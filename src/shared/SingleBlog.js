import * as React from 'react'
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from 'react-router-dom'

export default function SingleBlog ({ apiData  }) {
  const history = useNavigate();
  const { id } = useParams();
  const productList = apiData || [];
    
  const singleBlogData = productList.find((a) => a.id === +id);

  const handleBackClick = (id) => {
    history(`/`);
  };

  return (
    <div className='blog-single-info-container'>
      <Helmet>
        <title>{singleBlogData?.title}</title>
        <meta name="title" content={singleBlogData?.title} />
        <meta name="description" content={singleBlogData?.description} />
        <meta property="og:title" content={singleBlogData?.title} />
        <meta property="og:description" content={singleBlogData?.description} />
        <meta property="og:image" content={singleBlogData?.thumbnail} />
      </Helmet>
      <button className='back-btn' onClick={handleBackClick}>Back to Products</button>
      <div className='single-blog-box-wrapper'>
        <img src={singleBlogData?.thumbnail} alt={singleBlogData?.title} />
        <p style={{color:"#000000"}}>
          <span className='single-info-identifier'>MODAL :</span>&nbsp;
          <span className='single-info-desc-content'>{singleBlogData?.title}</span>
          &nbsp;&nbsp;&nbsp;
          || 
          &nbsp;&nbsp;&nbsp;
          <span className='single-info-identifier'>BRAND :</span>&nbsp;
          <span className='single-info-desc-content'>{singleBlogData?.brand}</span>
          &nbsp;&nbsp;&nbsp;
          || 
          &nbsp;&nbsp;&nbsp;
          <span className='single-info-identifier'>CATEGORY :</span>&nbsp;
          <span className='single-info-desc-content'>{singleBlogData?.category}</span>

        </p>
        <p style={{color:"#000000"}}>
          <span className='single-info-identifier'>PRICE :</span>&nbsp;
          <span className='single-info-desc-content'>${singleBlogData?.price}</span>
          &nbsp;&nbsp;&nbsp;
          || 
          &nbsp;&nbsp;&nbsp;
          <span className='single-info-identifier'>rating :</span>&nbsp;
          <span className='single-info-desc-content'>{singleBlogData?.rating}</span>
          &nbsp;&nbsp;&nbsp;
          || 
          &nbsp;&nbsp;&nbsp;
          <span className='single-info-identifier'>IN STOCK :</span>&nbsp;
          <span className='single-info-desc-content'>{singleBlogData?.stock}</span>
          &nbsp;&nbsp;&nbsp;
          || 
          &nbsp;&nbsp;&nbsp;
          <span className='single-info-identifier'>DISCOUNT :</span>&nbsp;
          <span className='single-info-desc-content'>{singleBlogData?.discountPercentage}%</span>

        </p>
        <p style={{color:"#000000"}}>
        <span className='single-info-identifier'>Description :</span> &nbsp;
          {singleBlogData?.description}
        </p>
      </div>
    </div>
  )
}