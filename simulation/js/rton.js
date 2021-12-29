var count=0,trackCounter=0,onReset=true,dc=false;

function start()
{
	document.getElementById("mainOff").style.visibility="hidden";
	document.getElementById("mainOn").style.visibility="visible";
	if(onReset==true)
	{
		document.getElementById("mon").style.backgroundColor="#FFFF00";
		document.getElementById("moff").style.backgroundColor="#996600";
		document.getElementById("bit4").style.backgroundColor="#FF0000";
		document.getElementById("on6").style.visibility="hidden";
		for(i=1;i<=3;i++)
		{
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		}
		for(i=1;i<=5;i++)
		{
			if(i==2);
			else
			{
				document.getElementById("on"+i).style.visibility="visible";
			}
		}
		trackCounter=setInterval(function()
		{
			count++;
			document.getElementById("accum").innerHTML=count;
			doneCounting(count);
		},350);
		// document.getElementById("arrow").style.transformOrigin="40% 50%";
		document.getElementById("arrow").style.visibility="visible";
		document.getElementById("arrow").style.animation="rotate 1s linear infinite";
	}
	if(onReset == false)
	{
		dc=true;
		doneCounting(count);
	}
	// console.log(onReset,"start",count);
}

function stop()
{
	// console.log(onReset,"stop",count);
	document.getElementById("mainOff").style.visibility="visible";
	document.getElementById("mainOn").style.visibility="hidden";
	if(onReset==true)
	{
		clearInterval(trackCounter);
		document.getElementById("arrow").style.visibility="hidden";
		document.getElementById("arrow").style.animation="";
		document.getElementById("moff").style.backgroundColor="#FFFF00";
		document.getElementById("mon").style.backgroundColor="#996600";
		document.getElementById("dt").style.backgroundColor="#996600";
		for(i=1;i<=5;i++)
		{
			if(i==4)
			{
				document.getElementById("bit"+i).style.backgroundColor="#009900";
			}
			else
			{
				document.getElementById("bit"+i).style.backgroundColor="#FF0000";
			}
		}
		for(i=1;i<=7;i++)
		{
			if(i==6)
			{
				document.getElementById("on"+i).style.visibility="visible";
			}
			else
			{
				document.getElementById("on"+i).style.visibility="hidden";
			}
		}
	}
	if(onReset == false)
	{
		for(i=1;i<=2;i++)
		{
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
		for(i=1;i<=3;i++)
		{
			document.getElementById("on"+i).style.visibility="hidden";
		}
	}
}

function doneCounting(count)
{
	// console.log(onReset,"doneCounting",count);
	if(count==50)
	{
		onReset=false;
		document.getElementById("arrow").style.visibility="hidden";
		document.getElementById("arrow").style.animation="";
		clearInterval(trackCounter);
		document.getElementById("mon").style.backgroundColor="#996600";
		document.getElementById("dt").style.backgroundColor="#FFFF00";
		document.getElementById("moff").style.backgroundColor="#FFFF00";
		for(i=1;i<=5;i++)
		{
			if(i==3)
			{
				document.getElementById("bit"+i).style.backgroundColor="#FF0000";
			}
			else
			{
				document.getElementById("bit"+i).style.backgroundColor="#009900";
			}
		}
		for(i=1;i<=7;i++)
		{
			if(i==4 || i==5)
			{
				document.getElementById("on"+i).style.visibility="hidden";
			}
			else
			{
				document.getElementById("on"+i).style.visibility="visible";
			}
		}
		if(dc==true)
		{
			document.getElementById("on2").style.visibility="hidden";
		}
	}
}

function reset()
{
	onReset=true;
	dc=false;
	document.getElementById("on8").style.visibility="visible";
	document.getElementById("bit6").style.backgroundColor="#009900";
	
	count=0;
	document.getElementById("accum").innerHTML=count;
	clearInterval(trackCounter);
	document.getElementById("arrow").style.visibility="hidden";
	document.getElementById("arrow").style.animation="";
	document.getElementById("dt").style.backgroundColor="#996600";
	for(i=1;i<=5;i++)
	{
		if(i==4)
		{
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		}
		else
		{
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
	}
	for(i=1;i<=7;i++)
	{
		if(i==6)
		{
			document.getElementById("on"+i).style.visibility="visible";
		}
		else
		{
			document.getElementById("on"+i).style.visibility="hidden";
		}
	}
}

function resetDone()
{
	document.getElementById("on8").style.visibility="hidden";
	document.getElementById("bit6").style.backgroundColor="#FF0000";
	if(document.getElementById("mainOn").style.visibility == "visible")
	{
		start();
	}
}