import { useParams , useHistory } from "react-router-dom";
import {useEffect,useState} from 'react-router-dom';
import useData  from './useData';



const NewsDetail=()=>{
    const {  id }=useParams();
    const {data:news,ispending,error}=useData('http://localhost:7000/news/'+id);
   console.log("this is detial"+news);
    
   
    return (
      
    <div className="news-details">
      
      {ispending && <div> Loading.....</div>}
      { error && <div> { error} </div>}
      { !ispending && (

        <article>
           <div className="news-details-d">
            <h2>{news.title}</h2>
            <img src={news.img}  alt={news.name} height="160px" width="500px" />
            <p>{news.desc}</p>
            <div>{news.body}</div>
            </div>
        </article>
      )}

    </div>
      
    


    )
}
export default NewsDetail;