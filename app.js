async function getweather(event){
     event.preventDefault()
    let input=document.getElementById("userinput").value
    let api_key= "0fde9cd78b04c8413c32dd222bb3c9b5"
    try{
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`)
        document.querySelector('#city-name').innerHTML= input
        document.querySelector('#temp').innerHTML=response.data.main.temp+"°C"
        document.querySelector('#humidity').innerHTML= response.data.main.humidity+"%"
        document.querySelector('#wind').innerHTML=response.data.wind.speed+"m/s"
        document.querySelector('#pressure').innerHTML= response.data.main.pressure
        console.log(response.data);


    }catch(error){
        console.log(error);
    }

    event.target.reset()
}