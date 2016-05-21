#pragma strict

function Update () {

  if(Input.GetKeyDown("f"))
  {
    transform.localPosition = Vector3(0.564,-0.976,0.38);
  }
  

  if(Input.GetKeyUp("f"))
 {
   transform.localPosition = Vector3(2.463,-0.497,2.432);
 
 }
}