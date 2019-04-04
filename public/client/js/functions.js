menuflag=0;
function toggleMenu(menuID) {
	//document.getElementById(menuID).style.display="block";
	//var menuStat = document.getElementById(menuID).style.display;
	//alert(menuStat);

	if(menuflag==0) {
		document.getElementById(menuID).style.display="block";
		menuflag=1;
	} else {
		document.getElementById(menuID).style.display="none";
		menuflag=0;
	}
}