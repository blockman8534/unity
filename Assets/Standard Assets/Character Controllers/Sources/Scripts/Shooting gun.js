#pragma strict

var TheDammage : int = 50;
var Distance : float = 199;
var MaxDistance : float = 199;
var TheMace : Transform;
function Update () 
{
   if (Input.GetButtonDown("Fire1"))
   {
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