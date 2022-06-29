var nd = require("needle")
// var url = "https://jsonplaceholder.typicode.com/todos/1"
// nd.get(url, (err, response, body) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(body)
//     }
// })
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=ab2f0e0a16f7c5f6a428662015b8ae6f&language=en-US&page=1"
// nd.get(url, (err, response, body) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(body)
//     }
// })
for(i = 1;i <=499;i++){
var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=ab2f0e0a16f7c5f6a428662015b8ae6f&language=en-US&page="+i
nd.get(url, (err, response, body) =>{
    if(err){
        console.log(err)
    }
    else{
        var results  = body.results
        for(ele in results){
            if(body.results[ele].original_language == 'te')
                console.log(results[ele].title)
        }
    }
})}


// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bhimavaram.json?access_token=pk.eyJ1Ijoia2FseWFuaWthbGlnb3RsYSIsImEiOiJjbDNvMG5mNGUwNHJjM2NtcjMxOTk0MXQzIn0.47_6pohruP7mTXkgjFixEw"
// nd.get(url, (err, response, body) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(JSON.parse(body))
//         }
//     }
// )

// var url = "http://api.weatherstack.com/current?access_key=d5aa6f757972314d9fe68ef26feb68b9&query=bhimavaram"
// nd.get(url, (err, response, body) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(body.current.temperature)
//         console.log(body.location.lat)
//         var des = body.current.weather_descriptions
//         for(ele in des){
//             console.log(des[ele])
//         }
//         }
//     }
// )


