import 'antd/dist/antd.css';

const Movie = ({data}:any) => {    
    return (
      <div style={{ width: 256 }}>
              <h1>{data?.properties.title}</h1> 
              <p>
                {data?.properties.created}
                {data?.properties.edited}
              </p>
          </div>
    );
  }

export default Movie;