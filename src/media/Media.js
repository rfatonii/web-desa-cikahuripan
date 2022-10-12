import React from "react"
import { json } from "react-router-dom";
import './Media.css';


function Media(){
    return(
        <div className="container mt-3">
            <h3>Berita</h3>
            <div className="row" id="breakingNews">
            
            </div>
        </div>
    )
}


export default Media;

// REST-api breaking news

async function mediaNews(){
    let res = await fetch
    ('https://newsapi.org/v2/everything?q=tesla&from=2022-09-07&sortBy=publishedAt&apiKey=34e0f6e64c564d9caa3504194e275204')
    .then(response => response.json())
    // .then((json)=> console.log(json.articles[3])) 
    .then(json => {
        const result = json.articles;
        let data = ''
        for(let i = 0; i < result.length; i++){
            data = data + `<div class="col-md-3">
            <div class="card card-news text-start shadow">
            <img src="${result[i].urlToImage}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${result[i].title}</h5>
                    <a href="${result[i].url}" class="text-decoration-none text-dark">Baca</a>
                </div>
            </div>
        </div>`
        }
        document.querySelector('#breakingNews').innerHTML=data
    })
}

mediaNews();