#pragma strict

private var mouseOver = false;
var lengthBar : int = 150;
var widthBar : int = 25;

function OnMouseOver()
{
   mouseOver = true;
}

function OnMouseExit()
{
   mouseOver = false;
}

function OnGUI()
{
   if(mouseOver == true)
   {
     GUI.Box(new Rect(200,200, lengthBar, widthBar), "Pickup Logs!");
   }
}


function OnMouseDown()
{
    Destroy(gameObject);
    
    var ManageScript : ManageInv = GameObject.Find("First Person Controller").GetComponent (ManageInv);
   
     ManageScript.logCollected = true;
 }                             