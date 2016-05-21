#pragma strict

var Health = 50;

function update ()
{
   if(Health <= 0)
   {
   Debug.Log("Going to call Dead()");
       Dead();
   }
}

function ApplyDammage (TheDammage : int)
{
  Health -= TheDammage;
  Debug.Log("Took Damage --> Health is now " + Health);
  if(Health <= 0)
   {
   Health = 0;
   Debug.Log("Going to call Dead()");
       Dead();
   }
}

function Dead()
{
	Debug.Log("=============================Killing gameObject=================");
   Destroy (gameObject);
}