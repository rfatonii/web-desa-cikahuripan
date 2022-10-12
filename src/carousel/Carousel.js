import React from 'react';
import './Carousel.css';
// import Media from '../media/Media'
import Profile from '../profile/Profile';
function Carousel() {
    return(
        <>
        <div class="jumbotron jumbotron-fluid bg-jumbotron">
            <div class="container text-center text-black">
                <h1 class="display-4">DESA CIKAHURIPAN SIAP DIGITAL</h1>
                <p class="lead mb-0">Website Resmi Desa Cikahuripan Kecamatan Klapanunggal</p>
                <p class="mt-0">Kami Siap Mendukung Era Digitalisasi, Melalui Percepatan Pelayanan Dengan Smart System Terintegrasi</p>
                
                <div className='row px-5'>
                    <div className='col-6 text-end'>
                    <a className='btn login rounded-pill px-5' href='/login'>Login</a>
                    </div>
                    <div className='col-6 text-start'>
                    <a className='btn regis rounded-pill px-5' href='/register'>Daftar</a>
                    </div>
                </div>
            </div>
        </div>
        <Profile />
       {/* <Media /> */}
       </>
)}; 

export default Carousel;