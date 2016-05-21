#pragma strict

var TheDammage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;
var TheMace : Transform;
function Update () 
{
   if (Input.GetButtonDown("Fire1"))
   {
       TheMace.animation.Play("Attack");
	   var hit : RaycastHit;
	   if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit))
	   {
	     Distance = hit.distance;
	     if (Distance < MaxDistance)
	     {
	        Debug.Log("Update Distance is " + Distance + " and Damage is " + TheDammage);
	     	hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);

		 }
	   }
   }
}