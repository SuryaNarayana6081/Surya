function validateForm()
{
	var fn=document.forms["regform"]["firstname"].value;
		var ln=document.forms["regform"]["lastname"].value;
			var gn=document.forms["regform"]["gender"].value;
				var cy=document.forms["regform"]["country"].value;


	if(fn==null || fn==""){
		alert("First name cannot be empty");
		return false;
	}
	else if(ln==null || lm==""){
		alert("Last name cannot be empty");
	}
	else if((gn[0].checked==false)&&(gn[1].checked==false)){
		alert("please click any option");
		return false;
	}
	else if(cy.selectedIndex==0){

		alert("ENter the country");
		return false;
	}
}