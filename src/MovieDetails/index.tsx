import 'antd/dist/antd.css';

const Movie = ({data}:any) => {    
    return (
      data ? <div style={{ width: 256 }}>
              <h1>{data?.properties.title}</h1> 
              
              <p>
                <label style={{fontWeight: "bold"}}>ID: </label>              
                <label>{data._id} - {data.uid}</label>
              </p>
              
              <p>
                <label style={{fontWeight: "bold"}}>Description: </label>              
                <label>{data.description}</label>
              </p>

              <p>
                <label style={{fontWeight: "bold"}}>Director: </label>              
                <label>{data.properties.director}</label>
              </p>

              <p>
                <label style={{fontWeight: "bold"}}>Producer: </label>              
                <label>{data.properties.producer}</label>
              </p>

              <p>
                <label style={{fontWeight: "bold"}}>Release Date: </label>              
                <label>{data.properties.release_date}</label>
              </p>

              <p>
                <label style={{fontWeight: "bold"}}>Opening Crawl: </label>              
                <label>{data.properties.opening_crawl}</label>
              </p>
          </div> : <></>
    );
  }

export default Movie;