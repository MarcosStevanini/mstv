import { useEffect, useState } from 'react'
import Api from '../../Api/api'

import './index.css'

import Movie from '../../Components/Movie/movieList'
import FeaturedMovie from '../../Components/FeatureMovie/FeaturedMovie'

type listType = {
    slug?: string,
    title?: string,
    items?: any,
    map?: any
}

function Index() {
    const [movie, setMovie] = useState<listType>([] as unknown as listType)
    const [featureData, setFeatureData] = useState<any>(null)

    useEffect(() => {
        const loadAll = async () => {
            let list:string|any = await Api.getHomeList()
      
            setMovie(list)

            let getFeaturedMovie = list.filter(i=>i.slug === 'originals')
            let random = Math.floor(Math.random() * (getFeaturedMovie[0].items.results.length -1))
            let chosen = getFeaturedMovie[0].items.results[random]

            let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv')

            setFeatureData(chosenInfo)
          }
          loadAll()
    })

    return (
        <div className="page">

            {featureData && 
                <FeaturedMovie item={featureData}/>
            }

            <section className='lists'>
                {movie.map((item:any, key:any) => {
                    return (
                        <Movie key={key} title={item.title} items={item.items}/>
                        )
                    })}
            </section>
        </div>
    )
}

export default Index