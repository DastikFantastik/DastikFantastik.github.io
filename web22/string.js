$(document).ready(function(){
 var selected = localStorage.getItem('select');
 if (selected) {
 $('#myselect').val(selected);
 }

 $('#myselect').change(function(){
 localStorage.setItem('select', $(this).val());
 });
});
</script>
$(document).ready(function(){

 $("button").click(function(){
 var value = $(this).attr('data-filter');
 
 if(value == "all")
 {
 $('.filter').show('1000');
 }
 else
 {
 $(".filter").not('.'+value).hide('3000');
 $('.filter').filter('.'+value).show('3000');
 
 }
 });
 
 if ($("button").removeClass("active")) {
 $(this).removeClass("active");
}
 $(this).addClass("active");

});
</code></pre>
 </div>

</div>

</div>

<script>
$(document).ready(function(){

 $("button").click(function(){
 var value = $(this).attr('data-filter');
 
 if(value == "all")
 {
 $('.filter').show('1000');
 }
 else
 {
 $(".filter").not('.'+value).hide('3000');
 $('.filter').filter('.'+value).show('3000');
 
 }
 });
 
 if ($("button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
</script>
$(document).ready(function(){
    
    
    $('body h1').css('border','solid 3px red');
});
function validateEmail(theForm) {
if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)){
return(true);
}
alert("Invalid e-mail address! Please enter again carefully!.");
return(false);
}
let phone = $('.input').val(); // Получаем значение input
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
if(!regex.test(phone){
console.log('Не соответствует');
}else{
console.log('Соответствует');
}
var 
const time = $('.seconds');
  intervalId = setInterval(timerDecrement, 1000);

function countdown() {
  const newTime = time.text() - 1;

  time.text(newTime);

  if(newTime === 0) clearInterval(intervalId);
}


  
  
  

function play() {
let a=new Audio("faceburger.mp3");
a.play(); 
}
$('.music button').click(function(){ play();});