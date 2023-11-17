import React from 'react'

export const ContactUs = () => {
    return (
        <div className='p-5'>
            <h1 className='mb-5'>Contact Us</h1>
            <form>
                <div className='row'>
                    <div class="mb-3 col-5">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                    </div>
                    <div className='col-2'></div>
                    <div class="mb-3 col-5">
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                    </div>
                </div>
                <div className='row'>
                    <div class="mb-3 col-5">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address" />
                    </div>
                    <div className='col-2'></div>
                    <div class="mb-3 col-5">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description'></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success px-5'>Submit</button>
                </div>
            </form>
        </div>
    )
}
