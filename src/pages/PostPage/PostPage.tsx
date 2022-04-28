import React from 'react';
import './PostPage.css'
import Button from '../../components/Button';

const PostPage = ({ image, title, text, date }: any) => {
    return <div className='containerPostPage'>
<div className="card">
      <img className="imageCard" src={image} />
      <h1 className="titleCard">{title}</h1>
      <p className="textCard">{text}</p>
      <p className="dateCard">{date.split("-").reverse().join(".")}</p>
    </div>
    </div>
}

export default PostPage