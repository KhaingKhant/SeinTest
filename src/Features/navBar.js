import React from "react";
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
    useLocation,
    Link,
} from "react-router-dom";

const Nav = () => {
    let location = useLocation();
    let loc = location.pathname;
    return (
        <div className='p-0 m-0 d-flex justify-content-center align-self-center ' >
            <nav class="navbar navbar-expand-md navbar-light bg-light p-0 w-100 shadow-sm m-0" style={{ position: 'absolute', zIndex: 1000 }}>
                <div class="container-fluid d-flex justify-content-between ">
                    <img className="navbar-brand mx-3 pr-3" src={"/vob.png"} style={{ width: window.innerWidth > 600 ? 75 : 60, height: 50 }} ></img>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-8 justify-content-end" id="navbarSupportedContent" style={{}}>
                        <div className="navbar-nav">
                            <Link
                                to="/home"
                                className=""
                                style={{
                                    textDecoration: "none",
                                    fontWeight: loc.includes("home") ? 600 : 400,
                                }}
                            >
                                <div className='py-2 px-3 cool-link' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                    style={{
                                        color: loc.includes("home")
                                            ? "#775ADA" : '#084C95',
                                        borderRadius: 6
                                        , fontWeight: loc.includes("home") ? 600 : 400,
                                    }}
                                >
                                    Home
                                </div>
                            </Link>
                            <Link
                                to="/product"
                                className=""
                                style={{
                                    textDecoration: "none",
                                    fontWeight: loc.includes("about") ? 600 : 400,
                                }}
                            >
                                <div className='py-2 px-3  cool-link' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                    style={{
                                        color: loc.includes("about")
                                            ? "#775ADA" : '#084C95',
                                        borderRadius: 6
                                        , fontWeight: loc.includes("about") ? 600 : 400,
                                    }}
                                >
                                    Product</div>
                            </Link>

                            <Link
                                to="/services"
                                className=""
                                style={{
                                    textDecoration: "none",
                                    fontWeight: loc.includes("services") ? 600 : 400,
                                }}
                            >
                                <div className='py-2 px-3  cool-link' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                                    style={{
                                        color: loc.includes("services")
                                            ? "#775ADA" : '#084C95',
                                        borderRadius: 6
                                        , fontWeight: loc.includes("services") ? 600 : 400,
                                    }}
                                >
                                    Avalible Places</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default withRouter(Nav);
