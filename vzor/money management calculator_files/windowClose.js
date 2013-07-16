/*
 * file: windowClose.js
 * author(s): 
 * copyright: (C)
 * description: script closes a popup window when a close button is pressed
 */

function closeWindow(thisElement)
{
   $(thisElement).closest("div.window").remove();
}