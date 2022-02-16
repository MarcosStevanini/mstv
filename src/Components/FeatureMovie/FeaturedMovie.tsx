import './FeaturedMovie.css'
import Img from '../../img/img3.jpg'

export default ({item}:any) => {
    return (
        <section className="featured">
            <div>
                <div className='featuredImg'>
                    {/* <img width='100%' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" /> */}
                    
                    <div className="img">
                        <img src={Img} alt="img" />

                        <div className="featuredName">
                            <h2>Lucifer</h2>
                            {/* <h2>{item.original_name}</h2> */}
                            <p>
                                {/* {item.overview} */}
                                Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.
                            </p>
                            <span className='relevante'>
                                89% relevante
                            </span>
                            <span>
                                {/* {item.first_air_date} */}
                                2016-01-25
                            </span>
                            <span className='vote'>
                                {/* {item.vote_average} */}
                                8.5
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}