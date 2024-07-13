import './bootstrap.js';
import './styles/app.css';
require('bootstrap');

const $ = require('jquery');
$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});