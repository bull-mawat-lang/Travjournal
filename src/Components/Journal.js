import React from 'react'

const Journal = (props) => {
    const pin="Fill 219.png"
    const cordinates="View on Google Maps"
  return (
    <main className="journal">

        <div className="journal-image">
            <img src={`../images/${props.item.cover_img}`} alt="journal-pic" />
        </div>

        <div className="journal-item"> 
            <img src={`../images/${pin}`} alt="pin" className="journal__pin" />
            <span className="journal-item-country" >{props.item.location.country}</span>
            <span className="journal-item-cordinate">{cordinates}</span>
            <h3 className="journal-item-place">{props.item.location.place}</h3>
            <p className="journal-item-date">{props.item.travel_date}</p>
            <p className="journal-item-description">{props.item.description}</p>
        </div>
    </main>
  )
}

export default Journal