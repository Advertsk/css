/*
 * file: ie_unselectable.js
 * author(s): 
 * copyright: (C) 2013
 * description: prevents items on the page before selecting (works only for IE)
 */

$(document).ready( function() {
   $("select").attr("unselectable", "on");
});