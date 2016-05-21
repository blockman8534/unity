#pragma strict

var logCollected : boolean = false;

private var showGui : boolean = false;

var plank : Transform;
var player : Transform;

function Update ()
{
   if(logCollected == true)
   {
      showGui = true;
   }
   
   if(logCollected == true && Input.GetKey("p"))
   {
      MakePlank();
   }
}

function OnGui()
{
if(showGui == true)

   {
   GUI.Box(new Rect(200,200,200,25), "Press P to craft your plank");
   }
}

function MakePlank()
{
    Instantiate (plank, player.transform.position, Quaternion.identity);
    logCollected = false;
    showGui = false;
    
}