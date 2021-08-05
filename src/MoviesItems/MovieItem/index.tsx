import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
  HeartOutlined,
  HeartTwoTone
} from '@ant-design/icons';

const MoviesItem = ({data, id, onClick}:any) => {  
    const favMoviesStorageIds = localStorage.getItem('favouriteMovies')?.split(",") ?? [];
    const isFavouriteByDefault = favMoviesStorageIds.includes(data.url);
    const [isFavourite, setIsFavourite] = useState(isFavouriteByDefault);
    
    const onFavClick = (movie: any)=>{
        if(isFavourite){
            const newFav = favMoviesStorageIds.filter(x=> x !== movie.url);
            localStorage.setItem('favouriteMovies', newFav.join(","));            
        }else{
            favMoviesStorageIds.push(movie.url);            
            localStorage.setItem('favouriteMovies', favMoviesStorageIds.join(","));            
        }  

        setIsFavourite(!isFavourite);   
    }

    return (
        <Menu.Item eventKey={id} key={id} onClick={() => onClick(data)}
                icon={(isFavourite ? 
                 <HeartTwoTone twoToneColor="#eb2f96" onClick={() => onFavClick(data)} /> :
                 <HeartOutlined onClick={() => onFavClick(data)} /> )}>
            {data.title}
        </Menu.Item>
    );
  }

export default MoviesItem;