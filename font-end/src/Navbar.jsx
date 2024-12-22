import React from 'react';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div class="container p-2">
                    <a class="navbar-brand ml-5" href="#">
                        <img src="public/logo.svg" alt="Bootstrap" width="20%" />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="#">SignUp</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;