// const session = require("express-session");

var howmanyMembersSelected = 0;
var anyMemberSelected = false;
var AaronFlynn, AlexBlewett, AndyCarr, DuncanAnderson, JamesThomas, JohnBaptisteKelly, JohnJames, JohnTaylor, JonParker, JuanPintodelRio, LaurenDowling, LukasKroeningMaynard, MarkHornsby, MelviaMathew, NeilButler, NicolaAndrews, PatGannon, RomaniDavies, SimonSkidmore, SueWatchman, TonyWatson;
AaronFlynn= AlexBlewett= AndyCarr= DuncanAnderson= JamesThomas= JohnBaptisteKelly= JohnJames= JohnTaylor= JonParker= JuanPintodelRio= LaurenDowling= LukasKroeningMaynard= MarkHornsby= MelviaMathew= NeilButler= NicolaAndrews= PatGannon= RomaniDavies= SimonSkidmore= SueWatchman= TonyWatson = false;

function TeamMemberSelected(){

    var TeamMember = document.getElementById("cat").value;

    if ((TeamMember === 'AaronFlynn') && (AaronFlynn === false)){
        AaronFlynnSelected();
    }

    if ((TeamMember === 'AlexBlewett') && (AlexBlewett === false)){
        AlexBlewettSelected();
    }

    if ((TeamMember === 'AndyCarr') && (AndyCarr === false)){
        AndyCarrSelected();
    }

    if ((TeamMember === 'DuncanAnderson') && (DuncanAnderson === false)){
        DuncanAndersonSelected();
    }

    if ((TeamMember === 'JamesThomas') && (JamesThomas === false)){
        JamesThomasSelected();
    }

    if ((TeamMember === 'JohnBaptisteKelly') && (JohnBaptisteKelly === false)){
        JohnBaptisteKellySelected();
    }

    if ((TeamMember === 'JohnJames') && (JohnJames === false)){
        JohnJamesSelected();
    }

    if ((TeamMember === 'JohnTaylor') && (JohnTaylor === false)){
        JohnTaylorSelected();
    }

    if ((TeamMember === 'JonParker') && (JonParker === false)){
        JonParkerSelected();
    }

    if ((TeamMember === 'JuanPintodelRio') && (JuanPintodelRio === false)){
        JuanPintodelRioSelected();
    }
    
    if ((TeamMember === 'LaurenDowling') && (LaurenDowling === false)){
      LaurenDowlingSelected();
  }

    if ((TeamMember === 'LukasKroeningMaynard') && (LukasKroeningMaynard === false)){
        LukasKroeningMaynardSelected();
    }

    if ((TeamMember === 'MarkHornsby') && (MarkHornsby === false)){
        MarkHornsbySelected();
    }

    if ((TeamMember === 'MelviaMathew') && (MelviaMathew === false)){
        MelviaMathewSelected();
    }

    if ((TeamMember === 'NeilButler') && (NeilButler === false)){
        NeilButlerSelected();
    }

    if ((TeamMember === 'NicolaAndrews') && (NicolaAndrews === false)){
        NicolaAndrewsSelected();
    }

    if ((TeamMember === 'PatGannon') && (PatGannon === false)){
        PatGannonSelected();
    }

    if ((TeamMember === 'RomaniDavies') && (RomaniDavies === false)){
        RomaniDaviesSelected();
    }

    if ((TeamMember === 'SimonSkidmore') && (SimonSkidmore === false)){
        SimonSkidmoreSelected();
    }

    if ((TeamMember === 'SueWatchman') && (SueWatchman === false)){
        SueWatchmanSelected();
    }

    if ((TeamMember === 'TonyWatson') && (TonyWatson === false)){
        TonyWatsonSelected();
    }

}

function CreateDeleteHeading(){
    if ((howmanyMembersSelected === 1) && (anyMemberSelected === false)){
        anyMemberSelected = true;
        console.log('CREATE HEADING');

        var header = document.getElementById("addHeaderhere");
        var li_header = document.createElement('LI');
        li_header.setAttribute("id", "header_id");
        li_header.setAttribute("class", "govuk-body box-container-title");

        var tn_header = document.createTextNode("Team members");
        var litn_header = li_header.appendChild(tn_header);
        header.insertBefore(li_header, header.childNodes[0]);

        var teamBox = document.getElementById("greyBoxForTeamMembers");      
        teamBox.style.display = 'block';
      
    }
    if ((howmanyMembersSelected === 0) && (anyMemberSelected === true)){
        anyMemberSelected = false;
        console.log('DELETE HEADING');

        header_id.remove();
        var teamBox = document.getElementById("greyBoxForTeamMembers");      
        teamBox.style.display = 'none';
    }
}


// // AARON FLYNN

// function AaronFlynnSelected() {

// 	var listOfMembers = document.getElementById("addMemberListhere");

// 	var li_AaronFlynn = document.createElement('LI');
// 	li_AaronFlynn.setAttribute('id', 'AaronFlynn_id');

// 	var checkbox_AaronFlynn = document.createElement('input');
//     checkbox_AaronFlynn.type = 'checkbox';
//     checkbox_AaronFlynn.id = 'AaronFlynn_checkbox';
//     checkbox_AaronFlynn.name = 'AaronFlynn';
//     checkbox_AaronFlynn.value = 'AaronFlynn';
//     checkbox_AaronFlynn.setAttribute('class', 'govuk-checkboxes__input');


//     // document.getElementById("AaronFlynn_checkbox").className = "govuk-checkboxes__input";
    
//   	var label_AaronFlynn = document.createElement('label');
//     label_AaronFlynn.htmlFor = 'AaronFlynn';
//     label_AaronFlynn.appendChild(document.createTextNode('Aaron Flynn'));
//     label_AaronFlynn.setAttribute('class', 'govuk-label govuk-checkboxes__label');
//     label_AaronFlynn.setAttribute('style', 'padding: 8px 8px 5px 15px;');
    
//   	var button_AaronFlynn = document.createElement('button');
//   	button_AaronFlynn.setAttribute('id', 'AaronFlynn_id_remove');
//     button_AaronFlynn.setAttribute('class', 'removeButton');
// 	  button_AaronFlynn.setAttribute('onclick', 'remove_AaronFlynn()');
//     button_AaronFlynn.setAttribute('style', 'padding-left:0px;');
//     tn_button_AaronFlynn = document.createTextNode("Remove");
//     litn_button_AaronFlynn = button_AaronFlynn.appendChild(tn_button_AaronFlynn);
    
 
//     listOfMembers.appendChild(li_AaronFlynn);
//   	li_AaronFlynn.appendChild(checkbox_AaronFlynn);
//     li_AaronFlynn.appendChild(label_AaronFlynn);
//     li_AaronFlynn.appendChild(button_AaronFlynn);
    
//   	howmanyMembersSelected += 1;
//     CreateDeleteHeading();
//     }
    
// function remove_AaronFlynn(){
// 	AaronFlynn_id.remove();
//   	howmanyMembersSelected -= 1;
//     CreateDeleteHeading();

    
// }

// AARON FLYNN

function AaronFlynnSelected() {
  AaronFlynn = true;

	var listOfMembers = document.getElementById("MembersGoHere");


	var div_AaronFlynn = document.createElement('DIV');
	div_AaronFlynn.setAttribute('id', 'AaronFlynn_id');

   
  	var label_AaronFlynn = document.createElement('label');
    label_AaronFlynn.htmlFor = 'AaronFlynn';
    label_AaronFlynn.appendChild(document.createTextNode('Aaron Flynn'));
    label_AaronFlynn.setAttribute('class', 'govuk-label');

    
  	var button_AaronFlynn = document.createElement('button');
    console.log('button created');
  	button_AaronFlynn.setAttribute('id', 'AaronFlynn_id_remove');
    button_AaronFlynn.setAttribute('class', 'removeButton');
	  button_AaronFlynn.setAttribute('onclick', 'remove_AaronFlynn()');
    tn_button_AaronFlynn = document.createTextNode("Remove");
    litn_button_AaronFlynn = button_AaronFlynn.appendChild(tn_button_AaronFlynn);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AaronFlynn);
    div_AaronFlynn.appendChild(label_AaronFlynn);
    label_AaronFlynn.appendChild(button_AaronFlynn);


    
  	howmanyMembersSelected += 1;
    sessionStorage.setItem("Aaron Flynn", "true");

    CreateDeleteHeading();
    }
    
function remove_AaronFlynn(){
	AaronFlynn_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Aaron Flynn");
    CreateDeleteHeading();

    AaronFlynn = false;


    
}

// ALEX BLEWETT

function AlexBlewettSelected() {
  AlexBlewett = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_AlexBlewett = document.createElement('DIV');
	div_AlexBlewett.setAttribute('id', 'AlexBlewett_id');
    
  	var label_AlexBlewett = document.createElement('label');
    label_AlexBlewett.htmlFor = 'AlexBlewett';
    label_AlexBlewett.appendChild(document.createTextNode('Alex Blewett'));
    label_AlexBlewett.setAttribute('class', 'govuk-label');
    
  	var button_AlexBlewett = document.createElement('button');
    console.log('button created');
  	button_AlexBlewett.setAttribute('id', 'AlexBlewett_id_remove');
    button_AlexBlewett.setAttribute('class', 'removeButton');
	  button_AlexBlewett.setAttribute('onclick', 'remove_AlexBlewett()');
    tn_button_AlexBlewett = document.createTextNode("Remove");
    litn_button_AlexBlewett = button_AlexBlewett.appendChild(tn_button_AlexBlewett);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AlexBlewett);
    div_AlexBlewett.appendChild(label_AlexBlewett);
    label_AlexBlewett.appendChild(button_AlexBlewett);


    
  	howmanyMembersSelected += 1;
    sessionStorage.setItem("Alex Blewett", "true");

    CreateDeleteHeading();
    }
    
function remove_AlexBlewett(){
	AlexBlewett_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Alex Blewett");
    CreateDeleteHeading();

    AlexBlewett = false;

    
}

// ANDY CARR

function AndyCarrSelected() {
  AndyCarr = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_AndyCarr = document.createElement('DIV');
	div_AndyCarr.setAttribute('id', 'AndyCarr_id');
    
  	var label_AndyCarr = document.createElement('label');
    label_AndyCarr.htmlFor = 'AndyCarr';
    label_AndyCarr.appendChild(document.createTextNode('Andy Carr'));
    label_AndyCarr.setAttribute('class', 'govuk-label');
    
  	var button_AndyCarr = document.createElement('button');
    console.log('button created');
  	button_AndyCarr.setAttribute('id', 'AndyCarr_id_remove');
    button_AndyCarr.setAttribute('class', 'removeButton');
	  button_AndyCarr.setAttribute('onclick', 'remove_AndyCarr()');
    tn_button_AndyCarr = document.createTextNode("Remove");
    litn_button_AndyCarr = button_AndyCarr.appendChild(tn_button_AndyCarr);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AndyCarr);
    div_AndyCarr.appendChild(label_AndyCarr);
    label_AndyCarr.appendChild(button_AndyCarr);


    
  	howmanyMembersSelected += 1;
    sessionStorage.setItem("Andy Carr", "true");

    CreateDeleteHeading();
    }
    
function remove_AndyCarr(){
	AndyCarr_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Andy Carr");
    CreateDeleteHeading();

    AndyCarr = false;

    
}

// DUNCAN ANDERSON

function DuncanAndersonSelected() {
  DuncanAnderson = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_DuncanAnderson = document.createElement('DIV');
	div_DuncanAnderson.setAttribute('id', 'DuncanAnderson_id');
    
  	var label_DuncanAnderson = document.createElement('label');
    label_DuncanAnderson.htmlFor = 'DuncanAnderson';
    label_DuncanAnderson.appendChild(document.createTextNode('Duncan Anderson'));
    label_DuncanAnderson.setAttribute('class', 'govuk-label');
    
  	var button_DuncanAnderson = document.createElement('button');
    console.log('button created');
  	button_DuncanAnderson.setAttribute('id', 'DuncanAnderson_id_remove');
    button_DuncanAnderson.setAttribute('class', 'removeButton');
	  button_DuncanAnderson.setAttribute('onclick', 'remove_DuncanAnderson()');
    tn_button_DuncanAnderson = document.createTextNode("Remove");
    litn_button_DuncanAnderson = button_DuncanAnderson.appendChild(tn_button_DuncanAnderson);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_DuncanAnderson);
    div_DuncanAnderson.appendChild(label_DuncanAnderson);
    label_DuncanAnderson.appendChild(button_DuncanAnderson);


    sessionStorage.setItem("Duncan Anderson", "true");
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_DuncanAnderson(){
	DuncanAnderson_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Duncan Anderson");

    CreateDeleteHeading();

    DuncanAnderson = false;

    
}

// JAMES THOMAS

function JamesThomasSelected() {
  JamesThomas = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JamesThomas = document.createElement('DIV');
	div_JamesThomas.setAttribute('id', 'JamesThomas_id');
    
  	var label_JamesThomas = document.createElement('label');
    label_JamesThomas.htmlFor = 'JamesThomas';
    label_JamesThomas.appendChild(document.createTextNode('James Thomas'));
    label_JamesThomas.setAttribute('class', 'govuk-label');
    
  	var button_JamesThomas = document.createElement('button');
    console.log('button created');
  	button_JamesThomas.setAttribute('id', 'JamesThomas_id_remove');
    button_JamesThomas.setAttribute('class', 'removeButton');
	  button_JamesThomas.setAttribute('onclick', 'remove_JamesThomas()');
    tn_button_JamesThomas = document.createTextNode("Remove");
    litn_button_JamesThomas = button_JamesThomas.appendChild(tn_button_JamesThomas);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JamesThomas);
    div_JamesThomas.appendChild(label_JamesThomas);
    label_JamesThomas.appendChild(button_JamesThomas);


    sessionStorage.setItem("James Thomas", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JamesThomas(){
	JamesThomas_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("James Thomas");

    CreateDeleteHeading();

    JamesThomas = false;

    
}

// JOHN BAPTISTE KELLY
function JohnBaptisteKellySelected() {
  JohnBaptisteKelly = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JohnBaptisteKelly = document.createElement('DIV');
	div_JohnBaptisteKelly.setAttribute('id', 'JohnBaptisteKelly_id');
    
  	var label_JohnBaptisteKelly = document.createElement('label');
    label_JohnBaptisteKelly.htmlFor = 'JohnBaptisteKelly';
    label_JohnBaptisteKelly.appendChild(document.createTextNode('John Baptiste-Kelly'));
    label_JohnBaptisteKelly.setAttribute('class', 'govuk-label');
    
  	var button_JohnBaptisteKelly = document.createElement('button');
    console.log('button created');
  	button_JohnBaptisteKelly.setAttribute('id', 'JohnBaptisteKelly_id_remove');
    button_JohnBaptisteKelly.setAttribute('class', 'removeButton');
	  button_JohnBaptisteKelly.setAttribute('onclick', 'remove_JohnBaptisteKelly()');
    tn_button_JohnBaptisteKelly = document.createTextNode("Remove");
    litn_button_JohnBaptisteKelly = button_JohnBaptisteKelly.appendChild(tn_button_JohnBaptisteKelly);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JohnBaptisteKelly);
    div_JohnBaptisteKelly.appendChild(label_JohnBaptisteKelly);
    label_JohnBaptisteKelly.appendChild(button_JohnBaptisteKelly);


    sessionStorage.setItem("John Baptiste-Kelly", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JohnBaptisteKelly(){
	JohnBaptisteKelly_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("John Baptiste-Kelly");

    CreateDeleteHeading();

    JohnBaptisteKelly = false;
}

// JOHN JAMES
function JohnJamesSelected() {
  JohnJames = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JohnJames = document.createElement('DIV');
	div_JohnJames.setAttribute('id', 'JohnJames_id');
      
  	var label_JohnJames = document.createElement('label');
    label_JohnJames.htmlFor = 'JohnJames';
    label_JohnJames.appendChild(document.createTextNode('John James'));
    label_JohnJames.setAttribute('class', 'govuk-label');
    
  	var button_JohnJames = document.createElement('button');
    console.log('button created');
  	button_JohnJames.setAttribute('id', 'JohnJames_id_remove');
    button_JohnJames.setAttribute('class', 'removeButton');
	  button_JohnJames.setAttribute('onclick', 'remove_JohnJames()');
    tn_button_JohnJames = document.createTextNode("Remove");
    litn_button_JohnJames = button_JohnJames.appendChild(tn_button_JohnJames);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JohnJames);
    div_JohnJames.appendChild(label_JohnJames);
    label_JohnJames.appendChild(button_JohnJames);


    sessionStorage.setItem("John James", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JohnJames(){
	JohnJames_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("John James");

    CreateDeleteHeading();

    JohnJames = false;
}

// JOHN TAYLOR
function JohnTaylorSelected() {
  JohnTaylor = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JohnTaylor = document.createElement('DIV');
	div_JohnTaylor.setAttribute('id', 'JohnTaylor_id');
      
  	var label_JohnTaylor = document.createElement('label');
    label_JohnTaylor.htmlFor = 'JohnTaylor';
    label_JohnTaylor.appendChild(document.createTextNode('John Taylor'));
    label_JohnTaylor.setAttribute('class', 'govuk-label');
    
  	var button_JohnTaylor = document.createElement('button');
    console.log('button created');
  	button_JohnTaylor.setAttribute('id', 'JohnTaylor_id_remove');
    button_JohnTaylor.setAttribute('class', 'removeButton');
	  button_JohnTaylor.setAttribute('onclick', 'remove_JohnTaylor()');
    tn_button_JohnTaylor = document.createTextNode("Remove");
    litn_button_JohnTaylor = button_JohnTaylor.appendChild(tn_button_JohnTaylor);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JohnTaylor);
    div_JohnTaylor.appendChild(label_JohnTaylor);
    label_JohnTaylor.appendChild(button_JohnTaylor);


    sessionStorage.setItem("John Taylor", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JohnTaylor(){
	JohnTaylor_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("John Taylor");

    CreateDeleteHeading();

    JohnTaylor = false;
}

// JON PARKER
function JonParkerSelected() {
  JonParker = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JonParker = document.createElement('DIV');
	div_JonParker.setAttribute('id', 'JonParker_id');
  
  	var label_JonParker = document.createElement('label');
    label_JonParker.htmlFor = 'JonParker';
    label_JonParker.appendChild(document.createTextNode('Jon Parker'));
    label_JonParker.setAttribute('class', 'govuk-label');
    
  	var button_JonParker = document.createElement('button');
    console.log('button created');
  	button_JonParker.setAttribute('id', 'JonParker_id_remove');
    button_JonParker.setAttribute('class', 'removeButton');
	  button_JonParker.setAttribute('onclick', 'remove_JonParker()');
    tn_button_JonParker = document.createTextNode("Remove");
    litn_button_JonParker = button_JonParker.appendChild(tn_button_JonParker);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JonParker);
    div_JonParker.appendChild(label_JonParker);
    label_JonParker.appendChild(button_JonParker);


    sessionStorage.setItem("Jon Parker", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JonParker(){
	JonParker_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Jon Parker");

    CreateDeleteHeading();

    JonParker = false;
}

// JUAN PINTO DEL RIO
function JuanPintodelRioSelected() {
  JuanPintodelRio = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JuanPintodelRio = document.createElement('DIV');
	div_JuanPintodelRio.setAttribute('id', 'JuanPintodelRio_id');
      
  	var label_JuanPintodelRio = document.createElement('label');
    label_JuanPintodelRio.htmlFor = 'JuanPintodelRio';
    label_JuanPintodelRio.appendChild(document.createTextNode('Juan Pinto-del-Rio'));
    label_JuanPintodelRio.setAttribute('class', 'govuk-label');
    
  	var button_JuanPintodelRio = document.createElement('button');
    console.log('button created');
  	button_JuanPintodelRio.setAttribute('id', 'JuanPintodelRio_id_remove');
    button_JuanPintodelRio.setAttribute('class', 'removeButton');
	  button_JuanPintodelRio.setAttribute('onclick', 'remove_JuanPintodelRio()');
    tn_button_JuanPintodelRio = document.createTextNode("Remove");
    litn_button_JuanPintodelRio = button_JuanPintodelRio.appendChild(tn_button_JuanPintodelRio);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JuanPintodelRio);
    div_JuanPintodelRio.appendChild(label_JuanPintodelRio);
    label_JuanPintodelRio.appendChild(button_JuanPintodelRio);


    sessionStorage.setItem("Juan Pinto-del-Rio", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JuanPintodelRio(){
	JuanPintodelRio_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Juan Pinto-del-Rio");

    CreateDeleteHeading();

    JuanPintodelRio = false;
}


// LAUREN DOWLING
function LaurenDowlingSelected() {
  LaurenDowling = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_LaurenDowling = document.createElement('DIV');
	div_LaurenDowling.setAttribute('id', 'LaurenDowling_id');
    
  	var label_LaurenDowling = document.createElement('label');
    label_LaurenDowling.htmlFor = 'LukasKroeningMaynard';
    label_LaurenDowling.appendChild(document.createTextNode('Lauren Dowling'));
    label_LaurenDowling.setAttribute('class', 'govuk-label');
    
  	var button_LaurenDowling = document.createElement('button');
    console.log('button created');
  	button_LaurenDowling.setAttribute('id', 'LaurenDowling_id_remove');
    button_LaurenDowling.setAttribute('class', 'removeButton');
	  button_LaurenDowling.setAttribute('onclick', 'remove_LaurenDowling()');
    tn_button_LaurenDowling = document.createTextNode("Remove");
    litn_button_LaurenDowling = button_LaurenDowling.appendChild(tn_button_LaurenDowling);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_LaurenDowling);
    div_LaurenDowling.appendChild(label_LaurenDowling);
    label_LaurenDowling.appendChild(button_LaurenDowling);


    sessionStorage.setItem("Lauren Dowling", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_LaurenDowling(){
	LaurenDowling_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Lauren Dowling");

    CreateDeleteHeading();

    LaurenDowling = false;
}


// LUKAS KROENING MAYNARD
function LukasKroeningMaynardSelected() {
  LukasKroeningMaynard = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_LukasKroeningMaynard = document.createElement('DIV');
	div_LukasKroeningMaynard.setAttribute('id', 'LukasKroeningMaynard_id');
    
  	var label_LukasKroeningMaynard = document.createElement('label');
    label_LukasKroeningMaynard.htmlFor = 'LukasKroeningMaynard';
    label_LukasKroeningMaynard.appendChild(document.createTextNode('Lukas Kroening-Maynard'));
    label_LukasKroeningMaynard.setAttribute('class', 'govuk-label');
    
  	var button_LukasKroeningMaynard = document.createElement('button');
    console.log('button created');
  	button_LukasKroeningMaynard.setAttribute('id', 'LukasKroeningMaynard_id_remove');
    button_LukasKroeningMaynard.setAttribute('class', 'removeButton');
	  button_LukasKroeningMaynard.setAttribute('onclick', 'remove_LukasKroeningMaynard()');
    tn_button_LukasKroeningMaynard = document.createTextNode("Remove");
    litn_button_LukasKroeningMaynard = button_LukasKroeningMaynard.appendChild(tn_button_LukasKroeningMaynard);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_LukasKroeningMaynard);
    div_LukasKroeningMaynard.appendChild(label_LukasKroeningMaynard);
    label_LukasKroeningMaynard.appendChild(button_LukasKroeningMaynard);


    sessionStorage.setItem("Lukas Kroening-Maynard", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_LukasKroeningMaynard(){
	LukasKroeningMaynard_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Lukas Kroening-Maynard");

    CreateDeleteHeading();

    LukasKroeningMaynard = false;
}


// // MARK HORNSBY
function MarkHornsbySelected() {
  MarkHornsby = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_MarkHornsby = document.createElement('DIV');
	div_MarkHornsby.setAttribute('id', 'MarkHornsby_id');
      
  	var label_MarkHornsby = document.createElement('label');
    label_MarkHornsby.htmlFor = 'MarkHornsby';
    label_MarkHornsby.appendChild(document.createTextNode('Mark Hornsby'));
    label_MarkHornsby.setAttribute('class', 'govuk-label');
    
  	var button_MarkHornsby = document.createElement('button');
    console.log('button created');
  	button_MarkHornsby.setAttribute('id', 'MarkHornsby_id_remove');
    button_MarkHornsby.setAttribute('class', 'removeButton');
	  button_MarkHornsby.setAttribute('onclick', 'remove_MarkHornsby()');
    tn_button_MarkHornsby = document.createTextNode("Remove");
    litn_button_MarkHornsby = button_MarkHornsby.appendChild(tn_button_MarkHornsby);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_MarkHornsby);
    div_MarkHornsby.appendChild(label_MarkHornsby);
    label_MarkHornsby.appendChild(button_MarkHornsby);


    sessionStorage.setItem("Mark Hornsby", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_MarkHornsby(){
	MarkHornsby_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Mark Hornsby");

    CreateDeleteHeading();

    MarkHornsby = false;
}


// // MELVIA MATHEW

function MelviaMathewSelected() {
  MelviaMathew = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_MelviaMathew = document.createElement('DIV');
	div_MelviaMathew.setAttribute('id', 'MelviaMathew_id');
      
  	var label_MelviaMathew = document.createElement('label');
    label_MelviaMathew.htmlFor = 'MelviaMathew';
    label_MelviaMathew.appendChild(document.createTextNode('Melvia Mathew'));
    label_MelviaMathew.setAttribute('class', 'govuk-label');
    
  	var button_MelviaMathew = document.createElement('button');
    console.log('button created');
  	button_MelviaMathew.setAttribute('id', 'MelviaMathew_id_remove');
    button_MelviaMathew.setAttribute('class', 'removeButton');
	  button_MelviaMathew.setAttribute('onclick', 'remove_MelviaMathew()');
    tn_button_MelviaMathew = document.createTextNode("Remove");
    litn_button_MelviaMathew = button_MelviaMathew.appendChild(tn_button_MelviaMathew);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_MelviaMathew);
    div_MelviaMathew.appendChild(label_MelviaMathew);
    label_MelviaMathew.appendChild(button_MelviaMathew);


    sessionStorage.setItem("Melvia Mathew", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_MelviaMathew(){
	MelviaMathew_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Melvia Mathew");

    CreateDeleteHeading();

    MelviaMathew = false;
}
// // NEIL BUTLER

function NeilButlerSelected() {
  NeilButler = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_NeilButler = document.createElement('DIV');
	div_NeilButler.setAttribute('id', 'NeilButler_id');
      
  	var label_NeilButler = document.createElement('label');
    label_NeilButler.htmlFor = 'NeilButler';
    label_NeilButler.appendChild(document.createTextNode('Neil Butler'));
    label_NeilButler.setAttribute('class', 'govuk-label');
      
  	var button_NeilButler = document.createElement('button');
    console.log('button created');
  	button_NeilButler.setAttribute('id', 'NeilButler_id_remove');
    button_NeilButler.setAttribute('class', 'removeButton');
	  button_NeilButler.setAttribute('onclick', 'remove_NeilButler()');
    tn_button_NeilButler = document.createTextNode("Remove");
    litn_button_NeilButler = button_NeilButler.appendChild(tn_button_NeilButler);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_NeilButler);
    div_NeilButler.appendChild(label_NeilButler);
    label_NeilButler.appendChild(button_NeilButler);


    sessionStorage.setItem("Neil Butler", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_NeilButler(){
	NeilButler_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Neil Butler");

    
    CreateDeleteHeading();

    NeilButler = false;
}

// // NICOLA ADAMS

function NicolaAndrewsSelected() {
  NicolaAndrews = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_NicolaAndrews = document.createElement('DIV');
	div_NicolaAndrews.setAttribute('id', 'NicolaAndrews_id');
      
  	var label_NicolaAndrews = document.createElement('label');
    label_NicolaAndrews.htmlFor = 'NicolaAndrews';
    label_NicolaAndrews.appendChild(document.createTextNode('Nicola Andrews'));
    label_NicolaAndrews.setAttribute('class', 'govuk-label');
    
  	var button_NicolaAndrews = document.createElement('button');
    console.log('button created');
  	button_NicolaAndrews.setAttribute('id', 'NicolaAndrews_id_remove');
    button_NicolaAndrews.setAttribute('class', 'removeButton');
	  button_NicolaAndrews.setAttribute('onclick', 'remove_NicolaAndrews()');
    tn_button_NicolaAndrews = document.createTextNode("Remove");
    litn_button_NicolaAndrews = button_NicolaAndrews.appendChild(tn_button_NicolaAndrews);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_NicolaAndrews);
    div_NicolaAndrews.appendChild(label_NicolaAndrews);
    label_NicolaAndrews.appendChild(button_NicolaAndrews);


    sessionStorage.setItem("Nicola Andrews", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_NicolaAndrews(){
	NicolaAndrews_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Nicola Andrews");

    CreateDeleteHeading();

    NicolaAndrews = false;
}

// // PAT GANNON
function PatGannonSelected() {
  PatGannon = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_PatGannon = document.createElement('DIV');
	div_PatGannon.setAttribute('id', 'PatGannon_id');
      
  	var label_PatGannon = document.createElement('label');
    label_PatGannon.htmlFor = 'PatGannon';
    label_PatGannon.appendChild(document.createTextNode('Pat Gannon'));
    label_PatGannon.setAttribute('class', 'govuk-label');
    
  	var button_PatGannon = document.createElement('button');
    console.log('button created');
  	button_PatGannon.setAttribute('id', 'PatGannon_id_remove');
    button_PatGannon.setAttribute('class', 'removeButton');
	  button_PatGannon.setAttribute('onclick', 'remove_PatGannon()');
    tn_button_PatGannon = document.createTextNode("Remove");
    litn_button_PatGannon = button_PatGannon.appendChild(tn_button_PatGannon);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_PatGannon);
    div_PatGannon.appendChild(label_PatGannon);
    label_PatGannon.appendChild(button_PatGannon);


    sessionStorage.setItem("Pat Gannon", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_PatGannon(){
	PatGannon_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Pat Gannon");

    CreateDeleteHeading();

    PatGannon = false;
}
// // ROMANI DAVIES

function RomaniDaviesSelected() {
  RomaniDavies = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_RomaniDavies = document.createElement('DIV');
	div_RomaniDavies.setAttribute('id', 'RomaniDavies_id');
      
  	var label_RomaniDavies = document.createElement('label');
    label_RomaniDavies.htmlFor = 'RomaniDavies';
    label_RomaniDavies.appendChild(document.createTextNode('Romani Davies'));
    label_RomaniDavies.setAttribute('class', 'govuk-label');
    
  	var button_RomaniDavies = document.createElement('button');
    console.log('button created');
  	button_RomaniDavies.setAttribute('id', 'RomaniDavies_id_remove');
    button_RomaniDavies.setAttribute('class', 'removeButton');
	  button_RomaniDavies.setAttribute('onclick', 'remove_RomaniDavies()');
    tn_button_RomaniDavies = document.createTextNode("Remove");
    litn_button_RomaniDavies = button_RomaniDavies.appendChild(tn_button_RomaniDavies);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_RomaniDavies);
    div_RomaniDavies.appendChild(label_RomaniDavies);
    label_RomaniDavies.appendChild(button_RomaniDavies);


    sessionStorage.setItem("Romani Davies", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_RomaniDavies(){
	RomaniDavies_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Romani Davies");

    CreateDeleteHeading();

    RomaniDavies = false;
}

// // // SIMON SKIDMORE

function SimonSkidmoreSelected() {
  SimonSkidmore = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_SimonSkidmore = document.createElement('DIV');
	div_SimonSkidmore.setAttribute('id', 'SimonSkidmore_id');
      
  	var label_SimonSkidmore = document.createElement('label');
    label_SimonSkidmore.htmlFor = 'SimonSkidmore';
    label_SimonSkidmore.appendChild(document.createTextNode('Simon Skidmore'));
    label_SimonSkidmore.setAttribute('class', 'govuk-label');
    
  	var button_SimonSkidmore = document.createElement('button');
    console.log('button created');
  	button_SimonSkidmore.setAttribute('id', 'SimonSkidmore_id_remove');
    button_SimonSkidmore.setAttribute('class', 'removeButton');
	  button_SimonSkidmore.setAttribute('onclick', 'remove_SimonSkidmore()');
    tn_button_SimonSkidmore = document.createTextNode("Remove");
    litn_button_SimonSkidmore = button_SimonSkidmore.appendChild(tn_button_SimonSkidmore);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_SimonSkidmore);
    div_SimonSkidmore.appendChild(label_SimonSkidmore);
    label_SimonSkidmore.appendChild(button_SimonSkidmore);


    sessionStorage.setItem("Simon Skidmore", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_SimonSkidmore(){
	SimonSkidmore_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Simon Skidmore");

    CreateDeleteHeading();

    SimonSkidmore = false;
}

// // // SUE WATCHMAN

function SueWatchmanSelected() {
  SueWatchman = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_SueWatchman = document.createElement('DIV');
	div_SueWatchman.setAttribute('id', 'SueWatchman_id');
      
  	var label_SueWatchman = document.createElement('label');
    label_SueWatchman.htmlFor = 'SueWatchman';
    label_SueWatchman.appendChild(document.createTextNode('Sue Watchman'));
    label_SueWatchman.setAttribute('class', 'govuk-label');
    
  	var button_SueWatchman = document.createElement('button');
    console.log('button created');
  	button_SueWatchman.setAttribute('id', 'SueWatchman_id_remove');
    button_SueWatchman.setAttribute('class', 'removeButton');
	  button_SueWatchman.setAttribute('onclick', 'remove_SueWatchman()');
    tn_button_SueWatchman = document.createTextNode("Remove");
    litn_button_SueWatchman = button_SueWatchman.appendChild(tn_button_SueWatchman);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_SueWatchman);
    div_SueWatchman.appendChild(label_SueWatchman);
    label_SueWatchman.appendChild(button_SueWatchman);


    sessionStorage.setItem("Sue Watchman", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_SueWatchman(){
	SueWatchman_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Sue Watchman");

    CreateDeleteHeading();

    SueWatchman = false;
}

// // // TONY WATSON
function TonyWatsonSelected() {
  TonyWatson = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_TonyWatson = document.createElement('DIV');
	div_TonyWatson.setAttribute('id', 'TonyWatson_id');
      
  	var label_TonyWatson = document.createElement('label');
    label_TonyWatson.htmlFor = 'TonyWatson';
    label_TonyWatson.appendChild(document.createTextNode('Tony Watson'));
    label_TonyWatson.setAttribute('class', 'govuk-label');
    
  	var button_TonyWatson = document.createElement('button');
    console.log('button created');
  	button_TonyWatson.setAttribute('id', 'TonyWatson_id_remove');
    button_TonyWatson.setAttribute('class', 'removeButton');
	  button_TonyWatson.setAttribute('onclick', 'remove_TonyWatson()');
    tn_button_TonyWatson = document.createTextNode("Remove");
    litn_button_TonyWatson = button_TonyWatson.appendChild(tn_button_TonyWatson);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_TonyWatson);
    div_TonyWatson.appendChild(label_TonyWatson);
    label_TonyWatson.appendChild(button_TonyWatson);


    sessionStorage.setItem("Tony Watson", "true");

  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_TonyWatson(){
	TonyWatson_id.remove();
  	howmanyMembersSelected -= 1;
    sessionStorage.removeItem("Tony Watson");

    CreateDeleteHeading();

    TonyWatson = false;
}


function searchTitleNumbers(){
  var boxDK88932 = document.getElementById("titleOne");
  var boxNN22989 = document.getElementById("titleTwo");
  var boxJK44466 = document.getElementById("titleThree");

  var titleNumberEntered = document.getElementById("search-input").value;

  boxDK88932.style.display = 'none';
  boxNN22989.style.display = 'none';
  boxJK44466.style.display = 'none';

  if(titleNumberEntered !== ''){
    console.log('a title number was entered');
    var upperTN = titleNumberEntered.toUpperCase();
    var trimmedTN = upperTN.replace(/\s/g, '');
    console.log(upperTN);
    console.log(trimmedTN);


    if(trimmedTN == 'DK88932'){
      boxDK88932.style.display = 'block';
    }
    
    if(trimmedTN == 'NN22989'){
      boxNN22989.style.display = 'block';
      sessionStorage.setItem('testing', 'hello');
      console.log(sessionStorage.getItem('testing'));      
    }

    if(trimmedTN == 'JK44466'){
      console.log('code is executing');
      boxJK44466.style.display = 'block';
    }
  }
  else{
    console.log('no title number entered')
  }
}

var noOfApplications = 0;
var applicationsVisible = false;


// function applicationsAdded(){
//   console.log('function is being called');
//   console.log(noOfApplications);
//   console.log(applicationsVisible);

//   if((noOfApplications == 1) && (applicationsVisible === false)){
//     console.log('function is being called here');

//     // var applicationsBoxBlock = document.getElementById("greyBoxBlock");
//     // applicationsBoxBlock.style.display = 'block';
//     document.getElementById("greyBoxBlock").style.display = 'block';
//     applicationsVisible = true;
//   }

//   if((noOfApplications == 0) && (applicationsVisible == true)){
//     var applicationsBoxBlock = document.getElementById("greyBoxBlock");
//     applicationsBoxBlock.style.display = 'none';
//     applicationsVisible = false;
//   }
// }

function applicationsAdded(){
  console.log('function is being called');
  console.log(noOfApplications);
  console.log(applicationsVisible);
  sessionStorage.setItem("Number Of Applications Selected", noOfApplications);

  if(noOfApplications >= 1){
    console.log('function is being called here');

    var applicationsBoxBlock = document.getElementById("greyBoxBlock");
    // applicationsBoxBlock.style.display = 'block';
    document.getElementById("greyBoxBlock").style.display = 'block';
  }

  if(noOfApplications == 0){
    var applicationsBoxBlock = document.getElementById("greyBoxBlock");
    applicationsBoxBlock.style.display = 'none';
    applicationsVisible = false;
  }
}

// function applicationsAdded(){
//   console.log('function is being called');
//   var appsAddedonEditPage = false;

//   if(noOfApplications >= 1){
//     console.log('function is being called here');

//     // var applicationsBoxBlock = document.getElementById("greyBoxBlock");
//     // applicationsBoxBlock.style.display = 'block';
//     document.getElementById("greyBoxBlock").style.display = 'block';
//     applicationsVisible = true;
//   }

//   if((noOfApplications == 0) && (applicationsVisible == true)){
//     var applicationsBoxBlock = document.getElementById("greyBoxBlock");
//     applicationsBoxBlock.style.display = 'none';
//     applicationsVisible = false;
//   }
// }

function dk88932Transfer() {
  console.log('its checked');
  var exists = document.getElementById('DK88932-Transfer');
  console.log(exists);
  if (document.getElementById('DK88932-Transfer').checked) {
    console.log('the if statement is working')
    var applicationsTable = document.getElementById('applications-table');
    var rowCount1 = applicationsTable.rows.length;

    var addRow1 = applicationsTable.insertRow(rowCount1);
    addRow1.setAttribute('id', 'rowID1');

    var cell1_1 = addRow1.insertCell(0);
    cell1_1.setAttribute('class', 'govuk-table__cell');
    cell1_1.innerHTML = "<b>DK88932<b>";

    var cell2_1 = addRow1.insertCell(1);
    cell2_1.setAttribute('class', 'govuk-table__cell');
    cell2_1.innerHTML = "Transfer of whole with priority";

    var cell3_1 = addRow1.insertCell(2);
    cell3_1.setAttribute('class', 'govuk-table__cell');
    cell3_1.innerHTML = "Cancelled";

    var cell4_1 = addRow1.insertCell(3);
    cell4_1.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_1.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_1.setAttribute('onclick', 'removedk88932Transfer()');
    cell4_1.innerHTML = "Remove";

    noOfApplications += 1;
    sessionStorage.setItem("DTransfer", "true");

    applicationsAdded();

    }

  else{
    var row1 = document.getElementById('rowID1');
    var currentPosition1 = row1.rowIndex;
    console.log('row index:' + currentPosition1);
    var remove1 = document.getElementById("applications-table").deleteRow(currentPosition1 - 1);

    noOfApplications -= 1;
    sessionStorage.removeItem("DTransfer");
    applicationsAdded();
  }
}

function removedk88932Transfer(){
  var row1 = document.getElementById('rowID1');
  var currentPosition1 = row1.rowIndex;
  console.log('row index:' + currentPosition1);
  var remove1 = document.getElementById("applications-table").deleteRow(currentPosition1 - 1);

  noOfApplications -= 1;
  sessionStorage.removeItem("DTransfer");
  applicationsAdded();
  document.getElementById('DK88932-Transfer').checked = false;
}

function NN22989Transfer() {
  console.log('its checked');
  var exists = document.getElementById('NN22989-Transfer');
  console.log(exists);
  if (document.getElementById('NN22989-Transfer').checked) {
    console.log('the if statement is working')
    var applicationsTable = document.getElementById('applications-table');
    var rowCount4 = applicationsTable.rows.length;

    var addRow4 = applicationsTable.insertRow(rowCount4);
    addRow4.setAttribute('id', 'rowID4');

    var cell4_4 = addRow4.insertCell(0);
    cell4_4.setAttribute('class', 'govuk-table__cell');
    cell4_4.innerHTML = "<b>NN22989<b>";

    var cell2_4 = addRow4.insertCell(1);
    cell2_4.setAttribute('class', 'govuk-table__cell');
    cell2_4.innerHTML = "Transfer of whole with priority";

    var cell3_4 = addRow4.insertCell(2);
    cell3_4.setAttribute('class', 'govuk-table__cell');
    cell3_4.innerHTML = "Cancelled";

    var cell4_4 = addRow4.insertCell(3);
    cell4_4.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_4.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_4.setAttribute('onclick', 'removeNN22989Transfer()');
    cell4_4.innerHTML = "Remove";

    noOfApplications += 1;
    sessionStorage.setItem("NTransfer", "true");

    applicationsAdded();

    }

  else{
    var row4 = document.getElementById('rowID4');
    var currentPosition4 = row4.rowIndex;
    console.log('row index:' + currentPosition4);
    var remove4 = document.getElementById("applications-table").deleteRow(currentPosition4 - 1);

    noOfApplications -= 1;
    sessionStorage.removeItem("NTransfer");
    applicationsAdded();
  }
}

function removeNN22989Transfer(){
  console.log('function is being called');
  var row4 = document.getElementById('rowID4');
  var currentPosition4 = row4.rowIndex;
  console.log('row index:' + currentPosition4);
  var remove4 = document.getElementById("applications-table").deleteRow(currentPosition4 - 1);

  noOfApplications -= 1;
  sessionStorage.removeItem("NTransfer");
  console.log('row has been removed. Number of applications is now'+ noOfApplications);
  applicationsAdded();
  document.getElementById('NN22989-Transfer').checked = false;
}

function jk44466Transfer() {
  console.log('its checked');
  var exists = document.getElementById('jk44466-Transfer');
  console.log(exists);
  if (document.getElementById('jk44466-Transfer').checked) {
    console.log('the if statement is working')
    var applicationsTable = document.getElementById('applications-table');
    var rowCount7 = applicationsTable.rows.length;
    console.log(rowCount7);

    var addRow7 = applicationsTable.insertRow(rowCount7);
    addRow7.setAttribute('id', 'rowID7');

    var cell1_7 = addRow7.insertCell(0);
    cell1_7.setAttribute('class', 'govuk-table__cell');
    cell1_7.innerHTML = "<b>JK44466<b>";

    var cell2_7 = addRow7.insertCell(1);
    cell2_7.setAttribute('class', 'govuk-table__cell');
    cell2_7.innerHTML = "Transfer of whole with priority";

    var cell3_7 = addRow7.insertCell(2);
    cell3_7.setAttribute('class', 'govuk-table__cell');
    cell3_7.innerHTML = "Cancelled";

    var cell4_7 = addRow7.insertCell(3);
    cell4_7.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_7.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_7.setAttribute('onclick', 'removejk44466Transfer()');
    cell4_7.innerHTML = "Remove";

    noOfApplications += 1;
    sessionStorage.setItem("JTransfer", "true");
    applicationsAdded();

    }

  else{
    var row7 = document.getElementById('rowID7');
    var currentPosition7 = row7.rowIndex;
    console.log('row index:' + currentPosition7);
    var remove7 = document.getElementById("applications-table").deleteRow(currentPosition7 - 1);

    noOfApplications -= 1;
    sessionStorage.removeItem("JTransfer");
    applicationsAdded();
  }
}

function removejk44466Transfer(){
  var row7 = document.getElementById('rowID7');
  var currentPosition7 = row7.rowIndex;
  console.log('row index:' + currentPosition7);
  var remove7 = document.getElementById("applications-table").deleteRow(currentPosition7 - 1);

  noOfApplications -= 1;
  sessionStorage.removeItem("JTransfer");
  applicationsAdded();
  document.getElementById('jk44466-Transfer').checked = false;
}

function dk88932NewLease() {
  console.log('its checked');
  if (document.getElementById('dk88932-newLease').checked) {
    var applicationsTable = document.getElementById('applications-table');
    var rowCount = applicationsTable.rows.length;
    console.log(rowCount);

    var addRow3 = applicationsTable.insertRow(rowCount);
    addRow3.setAttribute('id', 'rowID3');

    var cell1_3 = addRow3.insertCell(0);
    cell1_3.setAttribute('class', 'govuk-table__cell');
    cell1_3.innerHTML = "<b>DK88932<b>";

    var cell2_3 = addRow3.insertCell(1);
    cell2_3.setAttribute('class', 'govuk-table__cell');
    cell2_3.innerHTML = "New lease";

    var cell3_3 = addRow3.insertCell(2);
    cell3_3.setAttribute('class', 'govuk-table__cell');
    cell3_3.innerHTML = "Received";

    var cell4_3 = addRow3.insertCell(3);
    cell4_3.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_3.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_3.setAttribute('onclick', 'removedk88932NewLease()');
    cell4_3.innerHTML = "Remove";

    noOfApplications += 1;
    sessionStorage.setItem("DNewLease", "true");

    applicationsAdded();


    }

  else{
    var row_3 = document.getElementById('rowID3');
    var currentPosition3 = row_3.rowIndex;
    console.log('row index:' + currentPosition3);
    var remove3 = document.getElementById("applications-table").deleteRow(currentPosition3 - 1);

    noOfApplications -= 1;
    sessionStorage.removeItem("DNewLease");

    applicationsAdded();

  }
}

function removedk88932NewLease(){
  var row_3 = document.getElementById('rowID3');
  var currentPosition3 = row_3.rowIndex;
  console.log('row index:' + currentPosition3);
  var remove3 = document.getElementById("applications-table").deleteRow(currentPosition3 - 1);
  document.getElementById('dk88932-newLease').checked = false;

  noOfApplications -= 1;
  sessionStorage.removeItem("DNewLease");
  applicationsAdded();
}

function NN22989NewLease() {
  console.log('its checked');
  if (document.getElementById('NN22989-newLease').checked) {
    var applicationsTable = document.getElementById('applications-table');
    var rowCount = applicationsTable.rows.length;
    console.log(rowCount);

    var addRow6 = applicationsTable.insertRow(rowCount);
    addRow6.setAttribute('id', 'rowID6');

    var cell1_6 = addRow6.insertCell(0);
    cell1_6.setAttribute('class', 'govuk-table__cell');
    cell1_6.innerHTML = "<b>NN22989<b>";

    var cell2_6 = addRow6.insertCell(1);
    cell2_6.setAttribute('class', 'govuk-table__cell');
    cell2_6.innerHTML = "New lease";

    var cell3_6 = addRow6.insertCell(2);
    cell3_6.setAttribute('class', 'govuk-table__cell');
    cell3_6.innerHTML = "Cancelled";

    var cell4_6 = addRow6.insertCell(3);
    cell4_6.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_6.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_6.setAttribute('onclick', 'removeNN22989NewLease()');
    cell4_6.innerHTML = "Remove";

    noOfApplications += 1;
    applicationsAdded();


    }

  else{
    var row_6 = document.getElementById('rowID6');
    var currentPosition6 = row_6.rowIndex;
    console.log('row index:' + currentPosition6);
    var remove6 = document.getElementById("applications-table").deleteRow(currentPosition6 - 1);

    noOfApplications -= 1;
    applicationsAdded();

  }
}

function removeNN22989NewLease(){
  var row_6 = document.getElementById('rowID6');
  var currentPosition6 = row_6.rowIndex;
  console.log('row index:' + currentPosition6);
  var remove6 = document.getElementById("applications-table").deleteRow(currentPosition6 - 1);
  document.getElementById('NN22989-newLease').checked = false;

  noOfApplications -= 1;
  applicationsAdded();
}


function jk44466NewLease() {
  console.log('its checked');
  if (document.getElementById('JK44466-newLease').checked) {
    var applicationsTable = document.getElementById('applications-table');
    var rowCount = applicationsTable.rows.length;
    console.log(rowCount);

    var addRow8 = applicationsTable.insertRow(rowCount);
    addRow8.setAttribute('id', 'rowID8');

    var cell1_8 = addRow8.insertCell(0);
    cell1_8.setAttribute('class', 'govuk-table__cell');
    cell1_8.innerHTML = "<b>JK44466<b>";

    var cell2_8 = addRow8.insertCell(1);
    cell2_8.setAttribute('class', 'govuk-table__cell');
    cell2_8.innerHTML = "New lease";

    var cell3_8 = addRow8.insertCell(2);
    cell3_8.setAttribute('class', 'govuk-table__cell');
    cell3_8.innerHTML = "Cancelled";

    var cell4_8 = addRow8.insertCell(3);
    cell4_8.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_8.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_8.setAttribute('onclick', 'removejk44466NewLease()');
    cell4_8.innerHTML = "Remove";

    noOfApplications += 1;
    applicationsAdded();


    }

  else{
    var row_8 = document.getElementById('rowID8');
    var currentPosition8 = row_8.rowIndex;
    console.log('row index:' + currentPosition8);
    var remove8 = document.getElementById("applications-table").deleteRow(currentPosition8 - 1);

    noOfApplications -= 1;
    applicationsAdded();

  }
}

function removejk44466NewLease(){
  var row_8 = document.getElementById('rowID8');
  var currentPosition8 = row_8.rowIndex;
  console.log('row index:' + currentPosition8);
  var remove8 = document.getElementById("applications-table").deleteRow(currentPosition8 - 1);
  document.getElementById('JK44466-newLease').checked = false;

  noOfApplications -= 1;
  applicationsAdded();
}

function dk88932OfficialCopy() {
  console.log('its checked');
  var exists = document.getElementById('DK88932-OfficialCopy');
  console.log(exists);
  if (document.getElementById('DK88932-OfficialCopy').checked) {
    console.log('the if statement is working')
    var applicationsTable = document.getElementById('applications-table');
    var rowCount2 = applicationsTable.rows.length;

    var addRow2 = applicationsTable.insertRow(rowCount2);
    addRow2.setAttribute('id', 'rowID2');

    var cell1_2 = addRow2.insertCell(0);
    cell1_2.setAttribute('class', 'govuk-table__cell');
    cell1_2.innerHTML = "<b>DK88932<b>";

    var cell2_2 = addRow2.insertCell(1);
    cell2_2.setAttribute('class', 'govuk-table__cell');
    cell2_2.innerHTML = "Register updated";

    var cell3_2 = addRow2.insertCell(2);
    cell3_2.setAttribute('class', 'govuk-table__cell');
    cell3_2.innerHTML = "Received";

    var cell4_2 = addRow2.insertCell(3);
    cell4_2.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_2.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_2.setAttribute('onclick', 'removedk88932OfficialCopy()');
    cell4_2.innerHTML = "Remove";

    noOfApplications += 1;
    applicationsAdded();

    }

  else{
    var row2 = document.getElementById('rowID2');
    var currentPosition2 = row2.rowIndex;
    console.log('row index:' + currentPosition2);
    var remove2 = document.getElementById("applications-table").deleteRow(currentPosition2 - 1);

    noOfApplications -= 1;
    applicationsAdded();
  }
}

function removedk88932OfficialCopy(){
  var row2 = document.getElementById('rowID2');
  var currentPosition2 = row2.rowIndex;
  console.log('row index:' + currentPosition2);
  var remove2 = document.getElementById("applications-table").deleteRow(currentPosition2 - 1);

  noOfApplications -= 1;
  applicationsAdded();
  document.getElementById('DK88932-OfficialCopy').checked = false;
}

function NN22989OfficialCopy() {
  console.log('its checked');
  var exists = document.getElementById('NN22989-OfficialCopy');
  console.log(exists);
  if (document.getElementById('NN22989-OfficialCopy').checked) {
    console.log('the if statement is working')
    var applicationsTable = document.getElementById('applications-table');
    var rowCount5 = applicationsTable.rows.length;

    var addRow5 = applicationsTable.insertRow(rowCount5);
    addRow5.setAttribute('id', 'rowID5');

    var cell1_5 = addRow5.insertCell(0);
    cell1_5.setAttribute('class', 'govuk-table__cell');
    cell1_5.innerHTML = "<b>NN22989<b>";

    var cell2_5 = addRow5.insertCell(1);
    cell2_5.setAttribute('class', 'govuk-table__cell');
    cell2_5.innerHTML = "Official Copy";

    var cell3_5 = addRow5.insertCell(2);
    cell3_5.setAttribute('class', 'govuk-table__cell');
    cell3_5.innerHTML = "Completed";

    var cell4_5 = addRow5.insertCell(3);
    cell4_5.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_5.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_5.setAttribute('onclick', 'removeNN22989OfficialCopy()');
    cell4_5.innerHTML = "Remove";

    noOfApplications += 1;
    applicationsAdded();

    }

  else{
    var row5 = document.getElementById('rowID5');
    var currentPosition5 = row5.rowIndex;
    console.log('row index:' + currentPosition5);
    var remove5 = document.getElementById("applications-table").deleteRow(currentPosition5 - 1);

    noOfApplications -= 1;
    applicationsAdded();
  }
}

function removeNN22989OfficialCopy(){
  var row5 = document.getElementById('rowID5');
  var currentPosition5 = row5.rowIndex;
  console.log('row index:' + currentPosition5);
  var remove5 = document.getElementById("applications-table").deleteRow(currentPosition5 - 1);

  noOfApplications -= 1;
  applicationsAdded();
  document.getElementById('NN22989-OfficialCopy').checked = false;
}


function jk44466OfficialCopy() {
  console.log('its checked');
  if (document.getElementById('JK44466-officialCopy').checked) {
    var applicationsTable = document.getElementById('applications-table');
    var rowCount = applicationsTable.rows.length;
    console.log(rowCount);

    var addRow9 = applicationsTable.insertRow(rowCount);
    addRow9.setAttribute('id', 'rowID9');

    var cell1_9 = addRow9.insertCell(0);
    cell1_9.setAttribute('class', 'govuk-table__cell');
    cell1_9.innerHTML = "<b>JK44466<b>";

    var cell2_9 = addRow9.insertCell(1);
    cell2_9.setAttribute('class', 'govuk-table__cell');
    cell2_9.innerHTML = "Official Copy";

    var cell3_9 = addRow9.insertCell(2);
    cell3_9.setAttribute('class', 'govuk-table__cell');
    cell3_9.innerHTML = "Cancelled";

    var cell4_9 = addRow9.insertCell(3);
    cell4_9.setAttribute('class', 'govuk-table__cell govuk-link');
    cell4_9.setAttribute('style', 'color: #D10A1E; cursor: pointer; text-align: right;');
    cell4_9.setAttribute('onclick', 'removejk44466OfficialCopy()');
    cell4_9.innerHTML = "Remove";

    noOfApplications += 1;
    applicationsAdded();


    }

  else{
    var row9 = document.getElementById('rowID9');
    var currentPosition9 = row9.rowIndex;
    console.log('row index:' + currentPosition9);
    var remove9 = document.getElementById("applications-table").deleteRow(currentPosition9 - 1);

    noOfApplications -= 1;
    applicationsAdded();

  }
}

function removejk44466OfficialCopy(){
  var row_9 = document.getElementById('rowID9');
  var currentPosition9 = row_9.rowIndex;
  console.log('row index:' + currentPosition9);
  var remove8 = document.getElementById("applications-table").deleteRow(currentPosition9 - 1);
  document.getElementById('JK44466-officialCopy').checked = false;

  noOfApplications -= 1;
  applicationsAdded();
}

function howManyappsSelectedEditPage(){
  console.log('onload function is working');
}



function DisplayingTeamMembersSelected(){
  console.log('hello its me');

  if (sessionStorage.getItem("Aaron Flynn") === null){
      var one = document.getElementById("AaronFlynn_id");
      one.remove();
  }

  if (sessionStorage.getItem("Alex Blewett") === null){
      var two = document.getElementById("AlexBlewett_id");
      two.remove();
  }

  if (sessionStorage.getItem("Andy Carr")=== null){
      var three = document.getElementById("AndyCarr_id");
      three.remove();
  }

  if (sessionStorage.getItem("Duncan Anderson")=== null){
      var four = document.getElementById("DuncanAnderson_id");
      four.remove();
  }

  if (sessionStorage.getItem("James Thomas")=== null){
      var five = document.getElementById("JamesThomas_id");
      five.remove();
  }

  if (sessionStorage.getItem("John Baptiste-Kelly")=== null){
      var six = document.getElementById("JohnBaptisteKelly_id");
      six.remove();
  }

  if (sessionStorage.getItem("John James")=== null){
      var seven = document.getElementById("JohnJames_id");
      seven.remove();
  }

  if (sessionStorage.getItem("John Taylor") === null){
    var one = document.getElementById("JohnTaylor_id");
    one.remove();
}

if (sessionStorage.getItem("Jon Parker") === null){
    var two = document.getElementById("JonParker_id");
    two.remove();
}

if (sessionStorage.getItem("Juan Pinto-del-Rio")=== null){
    var three = document.getElementById("JuanPintodelRio_id");
    three.remove();
}

if (sessionStorage.getItem("Lauren Dowling")=== null){
    var five = document.getElementById("LaurenDowling_id");
    five.remove();
}

if (sessionStorage.getItem("Lukas Kroening-Maynard")=== null){
    var six = document.getElementById("LukasKroeningMaynard_id");
    six.remove();
}

if (sessionStorage.getItem("Mark Hornsby")=== null){
    var seven = document.getElementById("MarkHornsby_id");
    seven.remove();
}

if (sessionStorage.getItem("Melvia Mathew") === null){
  var two = document.getElementById("MelviaMathew_id");
  two.remove();
}

if (sessionStorage.getItem("Neil Butler")=== null){
  var three = document.getElementById("NeilButler_id");
  three.remove();
}

if (sessionStorage.getItem("Nicola Andrews")=== null){
  var four = document.getElementById("NicolaAndrews_id");
  four.remove();
}

if (sessionStorage.getItem("Pat Gannon")=== null){
  var five = document.getElementById("PatGannon_id");
  five.remove();
}

if (sessionStorage.getItem("Romani Davies")=== null){
  var six = document.getElementById("RomaniDavies_id");
  six.remove();
}

if (sessionStorage.getItem("Simon Skidmore")=== null){
  var seven = document.getElementById("SimonSkidmore_id");
  seven.remove();
}

if (sessionStorage.getItem("Sue Watchman")=== null){
  var six = document.getElementById("SueWatchman_id");
  six.remove();
}

if (sessionStorage.getItem("Tony Watson")=== null){
  var seven = document.getElementById("TonyWatson_id");
  seven.remove();
}


}