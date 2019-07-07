import React from 'react';
import News from './News';
import './NewsList.scss';


const NewsList = props =>{
    return(
        <div className="newList">
            {props.data.map((item,index)=> <News key={index} {...item} />)}
        </div>
    );
}

export default NewsList;