/*
 * file: inputfield_counters.js
 * author(s): 
 * copyright: (C) 2013
 * description: script serves counters inside inputfields (increasing and decresing values)
 */

loop = false;
var elementId;

function incCounterStart(thisId)
{
   loop = true;
   incCounter();
   elementId = thisId;
}

function incCounterStop(thisId)
{
   loop = false;
   elementId = thisId;
}

function decCounterStart(thisId)
{
   loop = true;
   decCounter();
   elementId = thisId;
}

function decCounterStop(thisId)
{
   loop = false;
   elementId = thisId;
}


function incCounter()
{
   if (!loop) { return; }
   currentValue = $(elementId).parent("div.inputfield_counters").siblings("input").val();
   $(elementId).parent("div.inputfield_counters").siblings("input").val(++currentValue);
   setTimeout(incCounter, 100);
}

function decCounter(thisId)
{
   if (!loop) { return; }
   currentValue = $(elementId).parent("div.inputfield_counters").siblings("input").val();
   
   if (currentValue < 1)
      return;
   
   $(elementId).parent("div.inputfield_counters").siblings("input").val(--currentValue);
   setTimeout(decCounter, 100);
}
