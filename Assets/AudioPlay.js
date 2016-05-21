#pragma strict

var sound : AudioClip;

function Start()
{
  //var auido : AudioSource = GetComponent.<AudioSource>();
  //audio.Play(); 
  
  //GetComponent.<AudioSource>().PlayOneShot(sound);
}

function OnTriggerEnter(Col : Collider)
{
   if(Col.CompareTag("Player"))
   {
   GetComponent.<AudioSource>().PlayOneShot(sound);
   }
}