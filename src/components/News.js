import React from 'react';
import './News.scss';




const News = props =>{
    return(
        <a href={props.url} className="news">
            <img src={props.urlToImage} alt=""/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </a>
    );
}

export default News;