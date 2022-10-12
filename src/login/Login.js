import React from "react";
import '../carousel/Carousel.css'
// import Register from "./Register";
const Login = () => {
    return (
    <div className="container text-start">
        <div className="row">
            <div className="col-6 m-auto my-5">
                <div className="card shadow p-5">
                    <form>
                        <div className="header text-center mb-4">
                            <h2 className="fw-bold">Login</h2>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off"/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control mb-2" id="exampleInputPassword1" />
                        <a className="text-decoration-none" href="#">Lupa Sandi ?</a>
                        </div>
                        <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className="button-login text-center">
                        <button type="submit" class="btn login login-page">Submit</button>
                        </div>
                        <div className="register mt-4 text-center">
                            <p>Belum Punya Akun ? <a href='/register'>Buat Akun</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;