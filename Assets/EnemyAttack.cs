  using UnityEngine;
using System.Collections;

public class EnemyAttack : MonoBehaviour {

	public float maxDistance;
	public float coolDownTimer;
	public PlayerHealth ph;

	private Transform myTransform;
	public Transform target;

	// Use this for initialization
	void Start () {
		GameObject go = GameObject.FindGameObjectWithTag("Player");
		target = go.transform;
		myTransform = transform;
	    maxDistance = 3;
		coolDownTimer = 1;

		ph = (PlayerHealth)go.GetComponent(typeof(PlayerHealth));
		
	}
	
	// Update is called once per frame
	void Update () {
		float distance = Vector3.Distance (target.position, myTransform.position);
		if (distance < maxDistance) {
			Attack ();

		}
		if (coolDownTimer > 0) {
			coolDownTimer = coolDownTimer * Time.deltaTime;

		}
	}

	void Attack () {
		if(coolDownTimer == 0)  {
			ph.ChangeHealth (-10);
			coolDownTimer = 1;




		}
	}
}