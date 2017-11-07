var events = {};
var d = new Date();
var year = d.getFullYear();
console.log(year);
var m = d.getMonth();

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

// funkcja wyzerowanie wartości
var clearTable = function () {
   for (var i = 1; i <= 42; i++) {
      $('.month').find($('#td' + i)).text('');
   }
};

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
};

//rysuj miesiąc z zadaniami
var fillTable = function (m, year) {
   $('h2').text(month[m]);
   $('h1').text('Calendar ' + year);

   days(m, year);

   //ładuj zadania
   for (z = 1; z < 42; z++) {

      var arrayOfTd = $('#td' + z);
      var tdX = arrayOfTd[0];
      var tdXId = tdX.id;
      var monthAndYear = m + '' + year;
      var fullData = monthAndYear + tdXId;

      //ustawiasz text z localStorage
      if (localStorage.getItem(fullData)) {
         $(tdX).append(' ' + localStorage.getItem(fullData));
      }
   }
};

//zwraca pierwszy dzień miesiaca
function daysInMonth(month, year) {
   return new Date(year, month, 0).getDate();
}

//gdy klikniemy na '<' - poprzedni miesiąc
var prevMonthButtonListener = function () {
   $('.prev_month').on('click', function () {
      clearTable(); //zeruj wartości na początek
      //rok
      if (m === 0) {
         year = year - 1;
         m = 12;
      }
      //ustaw miesiąc
      m = m - 1;

      //wypełnij tabelę
      fillTable(m, year);

   });
};

//gdy klikniemy na następny miesiąc
var nextMonthButtonListener = function () {

   $('.next_month').on('click', function () {
      clearTable(); //zeruj wartości na początek
      //rok
      if (m === 11) {
         year = year + 1;
         m = -1;
      }
      //miesiąc
      m = m + 1;
      //wypełnij tabelę
      fillTable(m, year);

   });
};

//wpisz zadanie
var tdClickListener = function () {
   $('td').on('click', function () {
      //jeśli komórka przechowuje dzień
      if ($(this).text().trim().length > 0) {

         var inputText = $('#input').val();

         //tworzenie zmiennej przechowującą zadanie 
         //w zależności od wybranego pola
         var currentData = m + '' + year + (this).id;
         events[0] = inputText;

         var item = localStorage.getItem(currentData);

         if (item) {
            alert(item);
         } else {
            //ustawienie teksu z inputa do wybranego pola i zapisanie w localstorage
            localStorage.setItem(currentData, inputText);
            var displayText = ($(this).text() + ' ' + inputText);
            $(this).text(displayText);
         }
      }
   });
};

//usuń zadania
var clearButtonListener = function () {
   $('.btClear').on('click', function () {
      localStorage.clear();
      location.reload();
   });
};

//miesiąc startowy
var initCalendar = function () {
   fillTable(m, year);
};

var main = function () {
   initCalendar();
   nextMonthButtonListener();
   prevMonthButtonListener();
   clearButtonListener();
   tdClickListener();
};

$(document).ready(main);

