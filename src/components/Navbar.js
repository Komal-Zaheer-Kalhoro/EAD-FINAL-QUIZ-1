import React from 'react'
import LOGO from "../images/logo.png"

export const Navbar = () => {
    return (
        <div><nav class="navbar navbar-expand-lg bg-body-white">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="/">
                    <img src={LOGO} alt="LOGO" width={60} height={60} />
                </a>
                <div class="navbar-nav text-black fw-semibold">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/">Menu</a>
                    <a class="nav-link" href="/">About Us</a>
                    <a class="nav-link " href='/'>Contact</a>
                </div>
            </div>
        </nav></div>
    )
}
