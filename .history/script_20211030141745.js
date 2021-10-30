'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2/
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/kenya');
request.send();

request.addEventListener('load', function () {
  console.log(this);
});
