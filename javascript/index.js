function loadReport(){
    alert("Loading weather report...")
}

function acceptCookies(element){
    let cookies_card = element.closest('div')
    cookies_card.remove()
}

function changeScale(element){
    let temperature_arr = document.querySelectorAll('.temp');
    console.log(temperature_arr)
    if(element.value === "celsius"){
        for(let i = 0; i < temperature_arr.length; i++){
            temperature_arr[i].innerText = (temperature_arr[i].innerText - 32) * (5/9)
            temperature_arr[i].innerText = Math.floor(temperature_arr[i].innerText)
        }
    }else if(element.value === "fahrenheit"){
        for(let i = 0; i < temperature_arr.length; i++){
            temperature_arr[i].innerText = temperature_arr[i].innerText * (9/5) + 32
            temperature_arr[i].innerText = Math.floor(temperature_arr[i].innerText)
        }
    }
}