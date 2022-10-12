import React from "react"
import './profile.css'
import Sejarah from "./Sejarah";
import Penduduk from "./jumlahPenduduk";
import Geografis from "./Geografis";
import Visi from "./Visi";
import Struktur from "./Struktur";

function Profile(){
    return(
        <div className="container">
            <div className="row">
                <Sejarah />
                <Penduduk />
                <Visi />
                <Struktur />
                <Geografis />
            </div>
        </div>
    )
}

export default Profile;