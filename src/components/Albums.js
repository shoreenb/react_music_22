import React, { useState } from "react";

const Albums = () => {
    const [albums, setAlbums] = useState([
        { name: 'Heaux Tales', genre: 'R&B', img: "https://unsplash.com/photos/YrtFlrLo2DQ", intro: 'Heaux Tales is the first extended play (EP) by American R&B singer Jazmine Sullivan. It was released by RCA Records on January 8, 2021.'},
        { name: 'An Evening with Silk Sonic', genre: 'R&B, soul, funk, pop, hip hop', img: "https://unsplash.com/photos/Y20JJ_ddy9M", intro: 'An Evening with Silk Sonic is the debut studio album by American R&B duo Silk Sonic, composed of recording artists Bruno Mars and Anderson .Paak. It was released on November 12, 2021, by Aftermath Entertainment and Atlantic Records.'},
        { name: 'Floetic', genre: 'R&B, neo soul, hip hop', img: "https://unsplash.com/photos/PDX_a_82obo", intro: 'Floetic is the debut studio album by the English R&B duo Floetry, released by DreamWorks Records in the United States on 1 October 2002 and on Polydor Records in the United Kingdom on 25 November 2002.'}
    ])

    const renderCards = () => {
            
            return albums.map(a => <tr><td><img src={a.img}/></td><td>{a.name}</td><td>{a.genre}</td><td>{a.intro}</td></tr>)
    }

    return (
        <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Genre</th>
          <th>Intro</th>
        </tr>
      </thead>
      <tbody>
        { renderCards() }
      </tbody>
    </table>

    )
}

export default Albums;
