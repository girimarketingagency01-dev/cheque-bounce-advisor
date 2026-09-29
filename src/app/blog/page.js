import Link from "next/link";
import "./page.css";

const POSTS_PER_PAGE = 6;

async function getBlogs(page = 1) {
  const apiUrl = `https://chequebounceadvisor.com/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${page}&orderby=date&order=desc`;

  try {
    const response = await fetch(apiUrl, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return {
        posts: [],
        totalPages: 0,
      };
    }

    const posts = await response.json();

    return {
      posts,
      totalPages: Number(response.headers.get("X-WP-TotalPages")) || 1,
    };
  } catch (error) {
    console.error("WordPress API Error:", error);

    return {
      posts: [],
      totalPages: 0,
    };
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

function getExcerpt(post) {
  return (post?.excerpt?.rendered || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "-")
    .replace(/&amp;/g, "&")
    .trim();
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getPageNumbers(currentPage, totalPages) {
  const pages = [];

  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;

  const currentPage = Math.max(
    1,
    Number(params?.page) || 1
  );

  const { posts, totalPages } = await getBlogs(currentPage);

  const pageNumbers = getPageNumbers(
    currentPage,
    totalPages
  );

  return (
    <main className="blogPage">

      <section className="blogSection">
        <div className="blogContainer">

          <div className="blogHeading">
            <span className="blogSmallTitle">
              CHEQUE BOUNCE ADVISOR
            </span>

            <h1>Latest Articles</h1>

            <p>
              Stay informed with practical guides, legal updates
              and useful information about cheque bounce matters.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="blogGrid">

              {posts.map((post) => (
                <article
                  className="blogCard"
                  key={post.id}
                >

                  <Link
                    href={`/blog/${post.slug}`}
                    className="blogImageLink"
                  >
                    <div className="blogImageWrapper">
                      <img
                        src={getFeaturedImage(post)}
                        alt={post.title.rendered.replace(
                          /<[^>]*>/g,
                          ""
                        )}
                      />
                    </div>
                  </Link>

                  <div className="blogCardContent">

                    <div className="blogMeta">
                      <span className="blogCategory">
                        {getCategory(post)}
                      </span>

                      <span className="blogDate">
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h2>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title.rendered.replace(
                          /<[^>]*>/g,
                          ""
                        )}
                      </Link>
                    </h2>

                    <p>
                      {getExcerpt(post)}
                    </p>

                    <div className="blogButtonWrapper">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="readArticleButton"
                      >
                        Read Article
                      </Link>
                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="noBlogs">
              <h3>No blog posts found.</h3>

              <p>
                Please check back soon for new articles.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <nav
              className="pagination"
              aria-label="Blog pagination"
            >

              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="paginationArrow"
                >
                  ←
                </Link>
              )}

              {pageNumbers.map((pageNumber) => (
                <Link
                  key={pageNumber}
                  href={`/blog?page=${pageNumber}`}
                  className={
                    pageNumber === currentPage
                      ? "paginationNumber active"
                      : "paginationNumber"
                  }
                >
                  {pageNumber}
                </Link>
              ))}

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="paginationArrow"
                >
                  →
                </Link>
              )}

            </nav>
          )}

        </div>
      </section>

    </main>
  );
}