#pragma strict
    
function Update () {
         
  if(Input.GetMouseButtonDown(1)) 
  {
    Debug.Log("mousedown before stop animation is " + animation);
  	animation.Stop("walk");
  	Debug.Log("mousedown after stop animation is " + animation);
  	// aim gun
    transform.localPosition = Vector3(0.14,-0.497,1.473);
  }
  

 if(Input.GetMouseButtonUp(1))
 {
 	// don't aim gun
   	transform.localPosition = Vector3(2.463,-0.497,2.432);
   	
    if (GlobalVars.isWalking) // USE A GLOBAL VARIABLE TO TRACK WHETHER "W" IS DOWN
    {
    	Debug.Log("mouseup animation is " + animation);
        animation.Play("walk");
    }
 }
 
}