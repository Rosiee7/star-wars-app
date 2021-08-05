import 'antd/dist/antd.css';

const Movie = ({data}:any) => {    
    return (
      <div style={{ width: 256 }}>
              <h1>{data?.title}</h1> 
              <p>
                {data?.created}
                {data?.edited}
              </p>
          </div>
    );
  }

export default Movie;