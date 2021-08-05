import {useState} from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
  HeartOutlined,
  HeartTwoTone
} from '@ant-design/icons';

const MoviesItem = ({data, onClick}:any) => {  
    const favMoviesStorageIds = localStorage.getItem('favouriteMovies')?.split(",") ?? [];
    const isFavouriteByDefault = favMoviesStorageIds.includes(data.uid);
    const [isFavourite, setIsFavourite] = useState(isFavouriteByDefault);
    
    const onFavClick = (movie: any)=>{
        if(isFavourite){
            const newFav = favMoviesStorageIds.filter(x=> x !== movie.uid);
            localStorage.setItem('favouriteMovies', newFav.join(","));            
        }else{
            favMoviesStorageIds.push(movie.uid);            
            localStorage.setItem('favouriteMovies', favMoviesStorageIds.join(","));            
        }  

        setIsFavourite(!isFavourite);   
    }
    
    return (
        <Menu.Item eventKey={data.uid} key={data.uid} onClick={() => onClick(data)}
                icon={(isFavourite ? 
                 <HeartTwoTone twoToneColor="#eb2f96" onClick={() => onFavClick(data)} /> :
                 <HeartOutlined onClick={() => onFavClick(data)} /> )}>
            {data.properties.title}
        </Menu.Item>
    );
  }

export default MoviesItem;