/*
 * file: mmc.js
 * author(s): 
 * copyright: (C) 2013
 * description: javascript file for money management calculator window
 */

/* function vertically centers inside parameters fieldset */
$.fn.verticalCenter = function () 
{
   innerElementHeight = $(this).height();
   outerElementHeight = $(this).parent().parent().height();
   offsetTop = (outerElementHeight - innerElementHeight) / 2;
   $(this).css("position", "absolute").css("top", offsetTop);
}

//function switches right content
function switchRightContent(contentClass)
{
   $("div.mmc_rightBody > div").hide();
   $("div." + contentClass).show();
}

//function switches a tab
function switchTab(thisTab, tabId)
{
   $(thisTab).attr("class", "active");
   $(thisTab).parent().siblings("li").children("a").removeAttr("class");

   $("ul.mmc_list_of_methods").hide();
   $("ul#" + tabId).show();
}

function initMmc()
{
   //Vertical center of elements inside parameters fieldset
   $("div.mmc_parameters_custom1").verticalCenter();
   $("div.mmc_parameters_custom2").verticalCenter();
   
   //Right content switch init
   $("div.mmc_rightBody > div").hide();
   $("div.mmc_rightBody > div").first().show();
   
   //Tab switch init
   $("ul.mmc_list_of_methods").hide(); //init
   $("ul.mmc_list_of_methods").first().show();
   $("ul.tabs").children("li").first().children("a").attr("class", "active");
}