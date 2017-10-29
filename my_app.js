var licznik = 1;
var click = 1 ;
$(document).ready(function(){
 months(1);  
});

        //wyzerowanie wartości
var to_0 = function(){
 for (var i = 1; i < 42; i++) {
$('.month').find($('#td'+i)).text('');
licznik = 1;
   };
   };
      
//gdy klikniemy na '<' - poprzedni miesiąc
$('.prev_month').on('click',function(){
 to_0() ; //zeruj wartości na początek
 click = click - 1; 
 months(click);
 if(click < 1){
    click = 1;
    months(click);
 }
});

$('.next_month').on('click',function(){
 to_0() ; //zeruj wartości na początek
 click = click +1; 
 months(click);
 if(click > 12){
    click = 12;
    months(12);
 }
 });
 
//miesiace, funckje

var January = function (){
 for (var i = 1; i < 32; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('January');
   }
   };

var February = function(){
for (i = 4; i < 32; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1;
$('.h1_title').text('February');
 }
 };
 var March = function(){
for (i = 4; i < 35; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('March');
 }
 };
var April = function(){
for (i = 7; i < 37; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('April');
 }
 };
var May = function(){
for (i = 2; i < 33; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('May');
 }
 };
var June = function(){
for (i = 5; i < 35; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('June');
 }
 };
var July = function(){
for (i = 7; i < 38; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('July');
 }
 };
var August = function(){
for (i = 3; i < 34; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('August');
 }
 };
var September = function(){
for (i = 6; i < 36; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1;
$('.h1_title').text('September');
 }
 };
 var October = function(){
for (i = 1; i < 32; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('October');
 }
 };
 var November = function(){
for (i = 4; i < 34; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('November');
 }
 };
 var December = function(){
for (i = 6; i < 37; i++) {
$('.month').find($('#td'+i)).text(licznik);
licznik = licznik + 1; 
$('.h1_title').text('December');
 }
 };
 
 var months = function(x){
  switch(x){
     case 1: January();
     break;
     case 2: February(); 
     break;
     case 3: March();
     break;
     case 4: April();
     break;
     case 5: May();
     break;
     case 6: June();
     break;
     case 7: July();
     break;
     case 8: August();
     break;
     case 9: September();
     break;
     case 10: October();
     break;
     case 11: November();
     break;
     case 12: December();
     break;
  }
 };
 
 

 //odpalamy styczeń
