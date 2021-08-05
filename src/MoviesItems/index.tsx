import 'antd/dist/antd.css';
import { Menu } from 'antd';
import MovieItem from './MovieItem';

const MoviesItems = ({movies, onClick}:any) => {  
    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
        >
          {movies.map((movie, index)=>{
            return <MovieItem key={movie.url} id={index} onClick={onClick} data={movie} />
          })}
        </Menu>
      </div>
    );
  }

export default MoviesItems;