import Link from "next/link";
import "./page.css";

async function getPost(slug) {
  const apiUrl =
    `https://chequebounceadvisor.com/old-web/wp-json/wp/v2/posts` +
    `?slug=${encodeURIComponent(slug)}&_embed`;

  try {
    const response = await fetch(apiUrl, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return null;
    }

    const posts = await response.json();

    if (!posts || posts.length === 0) {
      return null;
    }

    return posts[0];
  } catch (error) {
    console.error("WordPress Post Error:", error);
    return null;
  }
}

async function getMorePosts(currentSlug) {
  const apiUrl =
    `https://chequebounceadvisor.com/old-web/wp-json/wp/v2/posts` +
    `?per_page=7&orderby=date&order=desc&_embed`;

  try {
    const response = await fetch(apiUrl, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return [];
    }

    const posts = await response.json();

    return posts
      .filter((post) => post.slug !== currentSlug)
      .slice(0, 6);
  } catch (error) {
    console.error("WordPress More Posts Error:", error);
    return [];
  }
}

function getFeaturedImage(post) {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/blog-placeholder.jpg"
  );
}

function getCategory(post) {
  return (
    post?._embedded?.["wp:term"]?.[0]?.find(
      (term) => term.taxonomy === "category"
    )?.name || "Cheque Bounce"
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="singleBlogPage">
        <div className="singleBlogContainer">
          <div className="blogNotFound">
            <h1>Blog Not Found</h1>

            <p>
              The article you are looking for could not be found.
            </p>

            <Link
              href="/blog"
              className="backToBlogButton"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const morePosts = await getMorePosts(slug);

  const title = post.title.rendered.replace(
    /<[^>]*>/g,
    ""
  );

  return (
    <main className="singleBlogPage">

      <div className="singleBlogContainer">

        {/* Breadcrumb */}

        <div className="singleBlogBreadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>

          <Link href="/blog">Blog</Link>
          <span>/</span>

          <span>{title}</span>
        </div>

        {/* Main Layout */}

        <div className="singleBlogLayout">

          {/* LEFT: ARTICLE */}

          <article className="singleBlogArticle">

            <div className="singleBlogTop">

              <span className="singleBlogCategory">
                {getCategory(post)}
              </span>

              <h1>{title}</h1>

              <div className="singleBlogMeta">
                <span>
                  {formatDate(post.date)}
                </span>

                <span>
                  Cheque Bounce Advisor
                </span>
              </div>

            </div>

            {/* Featured Image */}

            <div className="singleBlogImage">

              <img
                src={getFeaturedImage(post)}
                alt={title}
              />

            </div>

            {/* WordPress Content */}

            <div
              className="singleBlogContent"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            />

            <div className="singleBlogBottom">

              <Link
                href="/blog"
                className="backToBlogButton"
              >
                ← Back to Blog
              </Link>

            </div>

          </article>


          {/* RIGHT: MORE BLOGS */}

          <aside className="moreBlogsSidebar">

            <div className="moreBlogsBox">

              <div className="moreBlogsHeading">

                <span className="headingLine"></span>

                <h2>More Blogs</h2>

              </div>

              <div className="moreBlogsList">

                {morePosts.length > 0 ? (
                  morePosts.map((item) => {

                    const itemTitle =
                      item.title.rendered.replace(
                        /<[^>]*>/g,
                        ""
                      );

                    return (
                      <Link
                        key={item.id}
                        href={`/blog/${item.slug}`}
                        className="moreBlogItem"
                      >

                        <div className="moreBlogImage">

                          <img
                            src={getFeaturedImage(item)}
                            alt={itemTitle}
                          />

                        </div>

                        <div className="moreBlogInfo">

                          <span className="moreBlogCategory">
                            {getCategory(item)}
                          </span>

                          <h3>
                            {itemTitle}
                          </h3>

                          <span className="moreBlogDate">
                            {formatDate(item.date)}
                          </span>

                        </div>

                      </Link>
                    );
                  })
                ) : (
                  <p className="noMoreBlogs">
                    No more blogs available.
                  </p>
                )}

              </div>

              <Link
                href="/blog"
                className="viewAllBlogs"
              >
                View All Blogs
              </Link>

            </div>

          </aside>

        </div>

      </div>

    </main>
  );
}