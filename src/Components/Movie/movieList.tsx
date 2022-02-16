import React from 'react'
import './movielist.css'

export default ({title, items}:any) => {
    return (
        <div className="movielist">
            <h2>{title}</h2>

            <div className="content-movielist">
                <div className="list-movielist">
                    {items.results.length > 0 && items.results.map((items: any, key: any) => (
                        <div key={key} className="item-movielist">
                            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} title={items.original_title} alt={items.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}