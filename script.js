//js for VSunny Creations 
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cname = document.querySelector('.cname');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=imperial&appid=322be09e15804d4df28536dda51a39f4`)
    .then(response => response.json())
    .then(data => {
        var cnameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var feels = data['main']['feels_like']

        cname.innerHTML =cnameValue;
        temp.innerHTML = 'Curently '+ tempValue + ' degrees Fahrenheit but feels like ' + feels + ' degrees Fahrenheit.';
        desc.innerHTML = 'Description of sky: '+ descValue;
    })

.catch(err => alert("City name not found"))
})
