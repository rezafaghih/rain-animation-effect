const rain = [];
var index = 0

function createRain(){
  rain[index] = document.createElement('div');

  var random_left = Math.random()*100;

  var random_opacity = Math.random();
  var random_size = Math.random();

  rain[index].id = 'rain';
  rain[index].style.left = random_left+"%";
  rain[index].style.opacity = random_opacity;
  rain[index].style.transform = `scale(1.${random_size})`;

  document.querySelector('.container').appendChild(rain[index]);
  
  setTimeout((index)=>{
    destoryRain(index);
  }, 2500, index)
  
  index+=1;
}

function destoryRain(i){
    rain[i].remove();
}

setInterval(createRain ,20)