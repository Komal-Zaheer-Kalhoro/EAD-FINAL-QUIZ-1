import React from 'react'
import OFFFERING_1 from "../images/v259_12.png"
import OFFFERING_2 from "../images/v259_13.png"
import OFFFERING_3 from "../images/v259_15.png"
import OFFFERING_4 from "../images/v259_16.png"
import OFFFERING_5 from "../images/v259_17.png"
import OFFFERING_6 from "../images/v259_18.png"

const offeringItsm = [
    OFFFERING_1,
    OFFFERING_2,
    OFFFERING_3,
    OFFFERING_4,
    OFFFERING_5,
    OFFFERING_6,
]

export const Offerings = () => {
    return (
        <div className='w-100 text-white p-5'
            style={{
                backgroundColor: "#464343"
            }}>
            <h1 className='' style={{
                margin: "0px 0px 150px 0px"
            }}>Our Offerings</h1>

            <div className='row'>
                {
                    offeringItsm.map((img, key) => {
                        return <>
                            <div className='col-3 d-flex flex-column'>
                                <img src={img} width={300} alt="Offering"/>
                                <h1>Barfi</h1>
                                <p className='fs-3'>Rs. 900/=</p>
                                <button className='btn btn-light'>Order Now</button>
                            </div>
                            <div className='col-1'></div>
                        </>
                    })
                }
            </div>
        </div>
    )
}
