#pragma strict

function Update () {

  if(Input.GetKeyDown("c"))
  
  {
    transform.localPosition = Vector3(0,0.9070835,0);
  }
  

  if(Input.GetKeyUp("c"))
 {
   transform.localPosition = Vector3(2.463,-0.497,2.432);
 
 }
}