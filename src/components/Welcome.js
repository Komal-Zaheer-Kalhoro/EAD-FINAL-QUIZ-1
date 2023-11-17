import React from 'react'
import WELCOME from "../images/v259_11.png"

export default function Welcome() {
    return (
        <div className='d-flex text-white p-5 align-items-center' style={{
            backgroundColor: "#464343"
        }}>
            <div className=''>
                <p>Indulge in a symphony of flavors at our artisanal bakery.
                    Welcome to a world where the aroma of freshly baked
                    wonders captivates your senses. Our master bakers
                    craft each creation with passion, using only the finest
                    ingredients to ensure every bite is pure delight.

                    From flaky croissants to decadent cakes, experience
                    the epitome of taste and craftsmanship. Whether it's
                    a special occasion or a craving for the extraordinary,
                    our bakery offers a haven for your palate. Elevate
                    your moments with the magic of our oven-fresh delights.
                    Your journey to exceptional taste begins here.</p>
            </div>

            <div>
                <img src={WELCOME} width={500} alt="Welcome"/>
            </div>
        </div>
    )
}
