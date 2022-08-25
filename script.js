let index = 0;

show_slide = (i) => {
  //инкремент/декремент слайд индекс
  index += i;

  //вытягиваем все картинки
  let images = document.getElementsByClassName("image");
  //вытягиваем все точки
  let dots = document.getElementsByClassName("dot");

  // скрываем все картинки
  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  // убираем активный класс у всех точек
  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  
  // если индекс больше длинны всех объектов обнуляем значение индекса
  if (index > images.length - 1) 
    index = 0 ;
  
  // если индекс меньше нуля присваиваем ему значение последнего изображения
  if (index < 0)
    index = images.length - 1;

  // делаем видимым изображение с текущим индексом
  images[index].style.display = "block";
  // делаем активной точку с текущим индексом
  dots[index].className += " active";

}
//вызываем функцию после полной загрузки окна браузера
window.addEventListener("onload", show_slide(index));