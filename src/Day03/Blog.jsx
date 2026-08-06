import React from 'react'

const posts = [
  {
    tag: 'Trends',
    title: 'Top Interior Design Trends to Watch in 2026',
    excerpt: 'From biophilic design to warm minimalism, discover the trends shaping residential and commercial interiors.',
    author: 'Elena Vasquez',
    date: 'February 20, 2026',
  },
  {
    tag: 'Tips',
    title: 'Choosing the Right Color Palette for Your Home',
    excerpt: 'A definitive guide to selecting colors that create harmony, set the mood, and transform any room instantly.',
    author: 'Sophia Chen',
    date: 'February 13, 2026',
  },
  {
    tag: 'Tips',
    title: '10 Small Space Design Tips That Actually Work',
    excerpt: 'Practical strategies for making compact spaces feel spacious, functional, and beautifully designed.',
    author: 'James Whitfield',
    date: 'January 28, 2026',
  },
  {
    tag: 'Sustainability',
    title: 'The Rise of Sustainable Interior Design',
    excerpt: 'How eco-conscious choices are transforming the design industry into a more caring, beautiful future.',
    author: 'Elena Vasquez',
    date: 'January 18, 2026',
  },
  {
    tag: 'Guide',
    title: 'The Complete Lighting Guide for Every Room',
    excerpt: 'Master the art of layered lighting to create ambiance, improve functionality, and elevate any interior.',
    author: 'James Whitfield',
    date: 'January 5, 2026',
  },
  {
    tag: 'Inspiration',
    title: 'The Art of Mixing Modern and Traditional Styles',
    excerpt: 'Learn how to blend contemporary and classic design elements for spaces that feel layered and personal.',
    author: 'Sophia Chen',
    date: 'December 30, 2025',
  },
]

const categories = ['All', 'Trends', 'Tips', 'Sustainability', 'Guide', 'Inspiration']

const Blog = () => {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <button className="btn btn-outline-light rounded-pill px-4 py-2 mb-3">Our Blog</button>
          <h1 className="display-5 fw-bold">Design Insights & Inspiration</h1>
          <p className="text-secondary fs-5">Expert perspectives on interior design trends, tips, and timeless principles.</p>
          <p className="small text-secondary">Home / Blog</p>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-lg-6 col-md-8">
            <div className="input-group rounded-pill overflow-hidden shadow-sm blog-search">
              <span className="input-group-text bg-white border-0 text-secondary">🔍</span>
              <input type="text" className="form-control border-0" placeholder="Search articles..." aria-label="Search articles" />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((category) => (
            <button key={category} className="btn btn-outline-light rounded-pill py-2 px-3 blog-chip">
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.title} className="col-lg-4">
              <div className="card blog-card h-100 border-0 rounded-4 overflow-hidden shadow-lg bg-dark text-white">
                <div className="blog-card-image" />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-3">{post.tag}</span>
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-secondary">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <p className="mb-1 small text-secondary">{post.author}</p>
                      <p className="mb-0 small text-secondary">{post.date}</p>
                    </div>
                    <a href="#" className="text-warning text-decoration-none fw-semibold">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-xl-6 col-lg-8">
            <div className="p-5 rounded-4 blog-newsletter text-center">
              <span className="text-uppercase text-warning small">Newsletter</span>
              <h2 className="fw-bold mt-3">Stay Inspired</h2>
              <p className="text-secondary mb-4">Subscribe for the latest design insights, project reveals, and inspiration delivered to your inbox.</p>
              <div className="input-group rounded-pill overflow-hidden shadow-sm blog-subscribe">
                <input type="email" className="form-control border-0" placeholder="Enter your email address" aria-label="Email address" />
                <button className="btn btn-warning text-dark px-4">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
