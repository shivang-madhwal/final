import React from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <div>
                <RouterLink to='/'>
                    <a class="btn btn-light p-2  mr-3 "> MOVIE </a>
                </RouterLink>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                        <RouterLink to='/login'>
                            <a class="btn btn-light p-2  ml-3"> Login </a>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/signup">
                            <a class="btn btn-light p-2  ml-3 ">Signup</a>
                        </RouterLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
