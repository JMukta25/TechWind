
 import {Link} from 'react-router-dom'
 const NewsList=({news})=>{
   
    
    return (
        
        <div className="NewsList">
          
        {news.map((item)=>(
        <div className="news-preview"  key={item.id}>
            <Link style={{ textDecoration: 'none' }} to={ `/NewsDetail/${item.id}`}>
            <h2>{item.title}</h2>
            </Link>
           <img src={item.img} alt={item.name} />
           <p>{item.desc}</p>

        </div>
       ) )}
        </div>);
}
export default NewsList;