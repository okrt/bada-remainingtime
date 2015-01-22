premyevents = widget.preferenceForKey("myevents");
something=widget.preferenceForKey("something");
if (premyevents == something) {
	myevents = new Array;
	mydates = new Array;
}
else
{
myevents=widget.preferenceForKey("myevents").split(',');
mydates=widget.preferenceForKey("mydates").split(',');
if(myevents.indexOf('noevent')!=-1)
{
myevents.splice(myevents.indexOf('noevent'),1);
mydates.splice(mydates.indexOf('noevent'),1);
}
}

function saveChanges()
{
widget.setPreferenceForKey(myevents.join(), "myevents");
widget.setPreferenceForKey(mydates.join(), "mydates");
window.location.reload(true);
}

function deleteAnEvent()
{
savedId=document.deleteEventForm.eventremovedrop.value;
if (savedId=="no")
{
alert("Silinecek kayıt yok.");
}
else
{
if (myevents.length==1)
{
	myevents = ['noevent'];
	mydates = ['noevent'];
	saveChanges();
}
else
{
myevents.splice(savedId, 1);
mydates.splice(savedId, 1);  
saveChanges();
}
}
}
function dropDownItemWriterForDeleting(value, index)
{
	document.writeln('<option value="'+index+'">'+value+'</option>');
	
}

function createMyEventsDropdown() {
	if (myevents.length==0)
	{
		document.writeln('<option value="no">No Events Added</option>');
	}
	else
	myevents.forEach(dropDownItemWriterForDeleting);
	}

function IsNumeric(sText)

{
   var ValidChars = "0123456789";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
   
   }

	
function saveSettings(){
	if (document.settingsForm.Months.checked==true || document.settingsForm.Days.checked==true || document.settingsForm.Hours.checked==true || document.settingsForm.Mins.checked==true || document.settingsForm.Secs.checked==true)
	{
	if(document.settingsForm.Months.checked==true){	widget.setPreferenceForKey(1, "showmonths");}else{widget.setPreferenceForKey(0, "showmonths");	}if(document.settingsForm.Days.checked==true){widget.setPreferenceForKey(1, "showdays");}else{widget.setPreferenceForKey(0, "showdays");}if(document.settingsForm.Hours.checked==true){widget.setPreferenceForKey(1, "showhours");}else{widget.setPreferenceForKey(0, "showhours");}if(document.settingsForm.Mins.checked==true){widget.setPreferenceForKey(1, "showmins");}else{widget.setPreferenceForKey(0, "showmins");}if(document.settingsForm.Secs.checked==true){widget.setPreferenceForKey(1, "showsecs");}else{widget.setPreferenceForKey(0, "showsecs");}
	alert("Settings has been saved.");
	}
	else
	{
	alert ("You must select at least one time unit.");	
	}
	
	
	};
function addTimer()
{
eventname=document.addEventForm.name.value;
if (eventname=="")
{
alert("You didn't enter an event name.");
}
else
{
eventdate=document.addEventForm.month.value+"/"+document.addEventForm.day.value+"/"+document.addEventForm.year.value+" "+document.addEventForm.hour.value+":"+document.addEventForm.minute.value;document.addEventForm.year.value+" "+document.addEventForm.hour.value+":"+document.addEventForm.minute.value;
//Tarih ve ismi kontrol et
	if (myevents.length>4)
	{
	alert("You can add up to 5 counters.");
	}
	else
	{
	myevents[myevents.length] = eventname;
	mydates[mydates.length] = eventdate;
	saveChanges();	
	}
}
}
function addTimeSpan()
{
eventname=document.addEventForm.name.value;
if (eventname=="")
{
alert("You didn't enter an event name.");
}
else
{
dayv=document.addEventForm.day.value;
hourv=document.addEventForm.hour.value;
minutev=document.addEventForm.minute.value;
if (dayv==""){dayv=0;}if (hourv==""){hourv=0;}if (minutev==""){minutev=0;}
if (IsNumeric(dayv) && IsNumeric(hourv) && IsNumeric(minutev))
{

tdate=parseInt(dayv)*24*60*60*1000+parseInt(hourv)*60*60*1000+parseInt(minutev)*60*1000;
today  = new Date();
tevent=new Date(today.getTime()+tdate);
eventdate=tevent.getMonth()+1+"/"+tevent.getDate()+"/"+tevent.getFullYear()+" "+tevent.getHours()+":"+tevent.getMinutes();

//Tarihi kontrol et
	if (myevents.length>4)
	{
	alert("You can add up to 5 counters.");
	}
	else
	{
	myevents[myevents.length] = eventname;
	mydates[mydates.length] = eventdate;
	saveChanges();
	alert("Timer added");
	}

}
else
{
alert ("Values are not acceptable");
}
}

}
