import { useEffect, useState } from 'react';
import  useData from './useData';
import NewsList from './NewsList';   

const Home=()=>{
   
   const {data:news,ispending,error}=useData("http://localhost:7000/news"); 
     return (
    <div className="Home">
    {ispending && <div> Loading.....</div>}
    <div> {error} </div>
    {news && <NewsList news={news} />} 
</div>
);
}
export default Home;