
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
var clearTable = function () {
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

   //ładuj zadania

   for (z = 1; z < 42; z++) {

      var arrayOfTd = $('#td' + z);
      var tdX = arrayOfTd[0];
      var tdXId = tdX.id;
      var monthAndYear = m + '' + year;
      var fullData = monthAndYear + tdXId;

      //ustawiasz text z localStorage, jeśli 
      console.log(localStorage.getItem(fullData));
      if (localStorage.getItem(fullData))
      {
         $(tdX).append(' ' + localStorage.getItem(fullData));
      } else {
      }
   }

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
   clearTable(); //zeruj wartości na początek
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

   //ładuj zadania

   for (z = 1; z < 42; z++) {

      var arrayOfTd = $('#td' + z);
      var tdX = arrayOfTd[0];
      var tdXId = tdX.id;
      var monthAndYear = m + '' + year;
      var fullData = monthAndYear + tdXId;

      //ustawiasz text z localStorage, jeśli 
      console.log(localStorage.getItem(fullData));
      if (localStorage.getItem(fullData))
      {
         $(tdX).append(' ' + localStorage.getItem(fullData));
      } else {
      }
   }

});


//gdy klikniemy na następny miesiąc
$('.next_month').on('click', function () {
   clearTable(); //zeruj wartości na początek
   //rok
   if (m === 11) {
      year = year + 1;
      $('h1').text('Calendar' + year);
      m = -1;
   }
   ;
   //miesiąc
   m = m + 1;
   $('h2').text(month[ar[m]]);
   //dni
   days(m, year);

   //ładuj zadania

   for (z = 1; z < 42; z++) {

      var arrayOfTd = $('#td' + z);
      var tdX = arrayOfTd[0];
      var tdXId = tdX.id;
      var monthAndYear = m + '' + year;
      var fullData = monthAndYear + tdXId;

      //ustawiasz text z localStorage, jeśli 
      console.log(localStorage.getItem(fullData));
      if (localStorage.getItem(fullData))
      {
         $(tdX).append(' ' + localStorage.getItem(fullData));
      } else {
      }
   }
   //koniec funkcji 'następny miesiąc' 

});
//wpisz zadanie
$('td').on('click', function () {

   var inputText = $('#input').val();

   //tworzenie zmiennej przechowującą zadanie 
   //w zależności od wybranego pola
   var currentData = m + '' + year + (this).id;
   events[0] = inputText;

   //ustawienie teksu z inputa do wybranego pola
   localStorage.setItem(currentData, inputText);
   var item = localStorage.getItem(currentData);

   var displayText = ($(this).text() + ' ' + inputText);
   $(this).text(displayText);


});


//usuń zadania


$('#bt1').on('click', function () {

   localStorage.clear();
   location.reload()

});


//ustaw zadania z local storage dla aktualnego miesiąca;

//substr(string,start,length);



