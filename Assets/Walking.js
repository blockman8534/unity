#pragma strict

function Update () {

  if(Input.GetKeyDown("w"))
  {
  	GlobalVars.isWalking = true;
    animation.Play("walk");
  }
  

  if(Input.GetKeyUp("w"))
 {
 	GlobalVars.isWalking = false;
   animation.Stop("walk");
 
 }
 
}