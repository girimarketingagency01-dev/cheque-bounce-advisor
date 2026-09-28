"use client";

import { useState } from "react";
import Link from "next/link";
import blogs from "../../data/blogs";
import "./page.css";

const BLOGS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

  const totalPages = Math.ceil(sortedBlogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = sortedBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-overlay">
          <div className="blog-container">
            <span className="blog-hero-label">CHEQUE BOUNCE ADVISOR</span>

            <h1>Blog</h1>

            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="blog-section">
        <div className="blog-container">

          {/* SECTION HEADER */}
          <div className="blog-heading">
            <div>
              <span className="section-label">LATEST ARTICLES</span>

              <h2>
                Legal Insights &amp;
                <br />
                <span>Cheque Bounce Guides</span>
              </h2>
            </div>

            <p>
              Stay informed with practical guides, legal updates and
              important information related to cheque bounce matters,
              Section 138 and cheque misuse.
            </p>
          </div>

          {/* CATEGORY BAR */}
          <div className="blog-category-bar">
            <span className="category-active">All Articles</span>
            <span>Legal Guides</span>
            <span>Legal Updates</span>
            <span>Practical Guides</span>
          </div>

          {/* BLOG GRID */}
          {currentBlogs.length > 0 ? (
            <div className="blog-grid">
              {currentBlogs.map((blog) => (
                <article className="blog-card" key={blog.id}>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="blog-card-link"
                  >
                    {/* IMAGE */}
                    <div className="blog-image-wrapper">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="blog-image"
                        />
                      ) : (
                        <div className="blog-image-placeholder">
                          CHEQUE BOUNCE
                        </div>
                      )}

                      <div className="blog-category">
                        {blog.category}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="blog-card-content">
                      <div className="blog-meta">
                        <span>
                          {new Date(blog.publishedAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>

                        <span className="meta-dot">•</span>

                        <span>{blog.readTime}</span>
                      </div>

                      <h3>{blog.title}</h3>

                      <p>{blog.excerpt}</p>

                      <div className="read-more">
                        <span>Read Article</span>
                        <span className="arrow">→</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              <h3>No articles found</h3>
              <p>New articles will appear here soon.</p>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                type="button"
                className="pagination-arrow"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                ←
              </button>

              <div className="pagination-numbers">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    type="button"
                    key={page}
                    className={
                      currentPage === page
                        ? "pagination-number active"
                        : "pagination-number"
                    }
                    onClick={() => changePage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="pagination-arrow"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                →
              </button>
            </div>
          )}

          {/* ARTICLE COUNT */}
          <div className="blog-count">
            Showing{" "}
            <strong>
              {startIndex + 1}-
              {Math.min(startIndex + BLOGS_PER_PAGE, sortedBlogs.length)}
            </strong>{" "}
            of <strong>{sortedBlogs.length}</strong> articles
          </div>
        </div>
      </section>
    </main>
  );
}