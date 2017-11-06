
//miesiąc startowy

var events = {};
var click = 1;
var x;
var year = 2017;
var d = new Date();
var ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(m);
var m = ar[d.getMonth()];

// funkcja wyzerowanie wartości
var to_0 = function () {
   for (var i = 1; i <= 42; i++) {
      $('.month').find($('#td' + i)).text('');
   }
};
//koniec wyzerowania
//stworzenie tablicy dla miesięcy
var month = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
];
//koniec tablicy 



//miesiąc startowy
$('h2').text(month[m]);
for (var i = 1; i < 32; i++) {
   d.setDate(i);
   document.getElementById("td" + i).innerHTML = d.getDate();
}
//ustaw dni
var days = function (month, year) {
   var firstDayOfMonth = new Date(year, month, 1);
   x = firstDayOfMonth.getDay();

   if (x === 0) {
      x = 7;
   }

   var j = 1;
   for (var i = x; i < daysInMonth(month + 1, year) + x; i++) {
      document.getElementById("td" + i).innerHTML = j;
      j = j + 1;
   }
   ;

};
//zwraca pierwszy dzień miesiaca
function daysInMonth(month, year) {
   return new Date(year, month, 0).getDate();
}


//gdy klikniemy na '<' - poprzedni miesiąc
$('.prev_month').on('click', function () {
   to_0(); //zeruj wartości na początek
   //rok
   if (m === 0) {
      year = year - 1;
      $('h1').text('Calendar' + year);
      m = 12;
   }
   ;
   //ustaw miesiąc
   m = m - 1;
   $('h2').text(month[ar[m]]);

   //dni
   days(m, year);
   
   //zapamiętaj 
   
});


//gdy klikniemy na następny miesiąc
$('.next_month').on('click', function () {
   to_0(); //zeruj wartości na początek
   //rok
   if (m === 11) {
      year = year + 1;
      $('h1').text('Calendar' + year);
      m = -1;
   };
   //miesiąc
   m = m + 1;
   $('h2').text(month[ar[m]]);
   //dni
   days(m, year);
   
   //ładuj zadania
   
  for(z= 1; z <42; z ++){
   
	 var arrayOfTd = $('#td'+z);
	 var tdx = arrayOfTd[0];
	 var tdxId =  tdx.id;
	 var moye = m + '' + year ;
	 var fullData = moye + tdxId ; 
	  
	  //ustawiasz text z localStorage, jeśli 
	 tdx.innerHtml += localStorage.getItem(fullData);  
	  
	  console.log(tdx);
	  console.log($(tdx));
 }
 
 
});
//wpisz tekst
$('td').on('click', function () {

   $(this).toggleClass('makeBlue');
   var inputText = $('#input').val();
  
  //tworzenie zmiennej przechowującą zadanie 
  //w zależności od wybranego pola
   var currentData =  m + '' + year + (this).id ;
   events[0] = inputText;
   
   //ustawienie teksu z inputa do wybranego pola
   localStorage.setItem(currentData , inputText);
   var item = localStorage.getItem(currentData);
   
   var displayText = ($(this).text() + ' ' + inputText );
   $(this).text(displayText); 
   
   console.log(localStorage);
   //
   
   
});


//usuń tekst


$('#bt1').on('click', function () {

   $('td').on('select', function () {
      $(this).text('');
   });
});


//ustaw zadania z local storage dla aktualnego miesiąca;

//substr(string,start,length);



