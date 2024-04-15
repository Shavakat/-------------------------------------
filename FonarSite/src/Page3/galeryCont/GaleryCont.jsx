import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "./GaleryCont.css"

const images = [
    "./src/assets/picture/galtest/gal (1).png",
    "./src/assets/picture/galtest/gal (2).png",
    "./src/assets/picture/galtest/gal (3).png",
    "./src/assets/picture/galtest/gal (4).png",
    "./src/assets/picture/galtest/gal (5).png",

]

const GaleryCont = () => {

    return (
        <div className='gal_cont'>
            <p className="title_txt center_txt">Галерея</p>
            <div className="gal_item">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter='2%'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}

export default GaleryCont