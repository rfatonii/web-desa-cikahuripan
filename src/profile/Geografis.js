import React from "react";
import './profile.css'

function Geografis(){
    return(                
        <div className="col-9 m-auto my-4">
            <div className="header-content">
                <h3 className="text-center fw-bold">Geografis</h3>
            </div>

            <div className="content">
                <p className="text-content mt-4">Luas wilayah Desa Cikahuripan 584. 47 Ha. Terdiri dari 26 RW, 78 RT, serta 14 Dusun dengan batas wilayah:</p>
                    <br/>
                <p className="text-content"><b>Sebelah Utara:</b> Desa Mampir Kecamatan klapanunggal Kabupaten Bogor.</p>
                <p className="text-content"><b>Sebelah Selatan:</b> Desa Klapanunggal Kecamatan klapanunggal Kabupaten Bogor.</p>
                <p className="text-content"><b>Sebelah Timur:</b> Desa Bojong & Linggar Mukti Kecamatan klapanunggal Kabupaten Bogor.</p>
                <p className="text-content"><b>Sebelah Barat:</b> Desa Kalapanunggal & Dayeuh Kecamatan klapanunggal & Cileungsi Kabupaten Bogor.</p>
                <div className="embed-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.087306026613!2d106.94153125538969!3d-6.456761189782346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699589c1339f9d%3A0xd92706a7f1e4ae58!2sCikahuripan%2C%20Kec.%20Klapanunggal%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1665455012622!5m2!1sid!2sid" className="mb-4 embed-responsive-item" 
                    width="600" height="450" allowfullscreen="" loading="lazy" title="peta-desa" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                    <br/>
                <p className="text-content">Jarak Desa ke Kecamatan Klapanunggal: 5 KM.</p>
                <p className="text-content">Jarak Desa ke Kabupaten Bogor: 35 KM.</p>
                <p className="text-content">Jarak Desa ke ibu Kota Provinsi Jawa Barat Bandung: 85 KM.</p>
                <p className="text-content">Jarak Desa ke ibu kota negara Indonesia Jakarta: 28 KM.</p>
            </div>
        <hr />
        </div>
)}

export default Geografis;