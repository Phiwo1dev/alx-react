import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function() {
  let counter = 0;
  $('#counterButton').click(function() {
    counter++;
    $('.counter').text(counter);
  });
});
