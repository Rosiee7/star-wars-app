import 'antd/dist/antd.css';
import { Menu } from 'antd';
import MovieItem from './MovieItem';

const MoviesItems = ({movies, onClick}:any) => {  
    return (
      <div style={{ width: 256 }}>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
        >
          {movies.map((movie)=>{
            return <MovieItem key={movie.uid} id={movie.uid} onClick={onClick} data={movie} />
          })}
        </Menu>
      </div>
    );
  }

export default MoviesItems;