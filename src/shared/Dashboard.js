import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Dashboard({
  apiData
}) {
  const history = useNavigate();

  const handleBlogClick = id => {
    history(`/blog/${id}`);
  };
  const productList = apiData || [];
  return (
    <div>
      <Helmet>
        <title>Electronics Shopping</title>
        <meta name="title" content="Electronics Shopping" />
        <meta name="description" content="You can buy every Electronics" />
        <meta property="og:title" content="Ecommerce electronics" />
        <meta
          property="og:description"
          content="E-commerce is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet"
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Helmet>
      <div className="blog-card-box-wrapper">
        {productList.map(blog =>
          <div className="blog-card-box-container">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleBlogClick(blog.id)}
            >
              <img
                className="blog-card-img"
                src={blog.thumbnail}
                alt={blog.title}
              />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleBlogClick(blog.id)}
            >
              <div style={{ color: "#000000", marginTop: 15 }}>
                <span className="blog-card-title">
                  {blog.title}, {blog.brand}
                </span>{" "}
                - <span className="blog-card-price">Price : ${blog.price}</span>
              </div>
              <div className="blog-card-price">
                {" "}{blog.description}{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
