using UnityEngine;
using System.Collections;

public class InteractiveScript: MonoBehaviour {

	public float interactDistance = 10f;

	void Start () {
		Debug.Log("InteractiveScript.Start()");
	}
	

	void Update () {

		if(Input.GetKeyDown(KeyCode.E))
		{
			Debug.Log("InteractiveScript.Update() KeyCode.E==============================");
			Ray ray = new Ray(transform.position,transform.forward);
			RaycastHit hit;
			if (Physics.Raycast(ray, out hit, interactDistance))
			{
				Debug.Log(hit.collider.tag + " was hit");
				if (hit.collider.CompareTag("Door"))
				{
					hit.collider.transform.GetComponent<Doorscript>().ChangeDoorState();
				}
			}
		}
	}
}