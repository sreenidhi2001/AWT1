async function whether(){
    let cityname=document.getElementById("test");
    let url="https://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid=e401b73910f87fc2144620c65cd7b2a5";
    const response=await fetch(url);
    let data=await response.json();
    console.log(data);
    


let{main:{temp,temp_min,temp_max}}=data;
    console.log("temp:"+temp);
    console.log("mintemp",+temp_min);
    console.log("maxtemp",+temp_max);}    
    
