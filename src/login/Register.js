import React from "react";
import '../carousel/Carousel.css'

function Register(){
    return(
        <div className="container text-start">
        <div className="row">
            <div className="col-6 m-auto my-5">
                <div className="card shadow p-5">
                    <form>
                        <div className="header text-center mb-4">
                            <h2 className="fw-bold">Daftar</h2>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">NIK</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control mb-2" id="InputPassword" />
                        </div>
                        <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={showPassword}/>
                        <label class="form-check-label" for="exampleCheck1">Tampilkan Password</label>
                        </div>
                        <div className="button-login text-center mt-4">
                        <button type="submit" class="btn btn-danger login-page">Buat Akun</button>
                        </div>
                        {/* <div className="register mt-4 text-center">
                            <p>Belum Punya Akun ? <a href="">Daftar</a></p>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register;

function showPassword(){
    let show = document.getElementById('InputPassword');
    if(show.type === 'password'){
        show.type = 'text';
    } else {
        show.type = 'password';
    }
}
