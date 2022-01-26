var howmanyMembersSelected = 0;
var anyMemberSelected = false;
var AaronFlynn, AlexBlewett, AndyCarr, DuncanAnderson, JamesThomas, JohnBaptisteKelly, JohnJames, JohnTaylor, JonParker, JuanPintodelRio, LukasKroeningMaynard, MarkHornsby, MelviaMathew, NeilButler, NicolaAndrews, PatGannon, RomaniDavies, SimonSkidmore, SueWatchman, TonyWatson;
AaronFlynn= AlexBlewett= AndyCarr= DuncanAnderson= JamesThomas= JohnBaptisteKelly= JohnJames= JohnTaylor= JonParker= JuanPintodelRio= LukasKroeningMaynard= MarkHornsby= MelviaMathew= NeilButler= NicolaAndrews= PatGannon= RomaniDavies= SimonSkidmore= SueWatchman= TonyWatson = false;

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
    }
    if ((howmanyMembersSelected === 0) && (anyMemberSelected === true)){
        anyMemberSelected = false;
        console.log('DELETE HEADING');

        header_id.remove();
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
//     tn_button_AaronFlynn = document.createTextNode("remove");
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
  div_AaronFlynn.setAttribute('class', 'govuk-checkboxes__item');
  div_AaronFlynn.setAttribute('style', 'height: 44px;');



	var checkbox_AaronFlynn = document.createElement('input');
    checkbox_AaronFlynn.type = 'checkbox';
    checkbox_AaronFlynn.id = 'AaronFlynn_checkbox';
    checkbox_AaronFlynn.name = 'AaronFlynn';
    checkbox_AaronFlynn.value = 'AaronFlynn';
    // checkbox_AaronFlynn.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_AaronFlynn.className = "govuk-checkboxes__input";
    
  	var label_AaronFlynn = document.createElement('label');
    label_AaronFlynn.htmlFor = 'AaronFlynn';
    label_AaronFlynn.appendChild(document.createTextNode('Aaron Flynn'));
    label_AaronFlynn.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_AaronFlynn.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_AaronFlynn = document.createElement('button');
    console.log('button created');
  	button_AaronFlynn.setAttribute('id', 'AaronFlynn_id_remove');
    button_AaronFlynn.setAttribute('class', 'removeButton');
	  button_AaronFlynn.setAttribute('onclick', 'remove_AaronFlynn()');
    button_AaronFlynn.setAttribute('style', 'padding-left:6px;');
    tn_button_AaronFlynn = document.createTextNode("remove");
    litn_button_AaronFlynn = button_AaronFlynn.appendChild(tn_button_AaronFlynn);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AaronFlynn);
  	div_AaronFlynn.appendChild(checkbox_AaronFlynn);
    div_AaronFlynn.appendChild(label_AaronFlynn);
    label_AaronFlynn.appendChild(button_AaronFlynn);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_AaronFlynn(){
	AaronFlynn_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    AaronFlynn = false;

    
}

// ALEX BLEWETT

function AlexBlewettSelected() {
  AlexBlewett = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_AlexBlewett = document.createElement('DIV');
	div_AlexBlewett.setAttribute('id', 'AlexBlewett_id');
  div_AlexBlewett.setAttribute('class', 'govuk-checkboxes__item');
  div_AlexBlewett.setAttribute('style', 'height: 44px;');



	var checkbox_AlexBlewett = document.createElement('input');
    checkbox_AlexBlewett.type = 'checkbox';
    checkbox_AlexBlewett.id = 'AlexBlewett_checkbox';
    checkbox_AlexBlewett.name = 'AlexBlewett';
    checkbox_AlexBlewett.value = 'AlexBlewett';
    // checkbox_AlexBlewett.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_AlexBlewett.className = "govuk-checkboxes__input";
    
  	var label_AlexBlewett = document.createElement('label');
    label_AlexBlewett.htmlFor = 'AlexBlewett';
    label_AlexBlewett.appendChild(document.createTextNode('Alex Blewett'));
    label_AlexBlewett.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_AlexBlewett.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_AlexBlewett = document.createElement('button');
    console.log('button created');
  	button_AlexBlewett.setAttribute('id', 'AlexBlewett_id_remove');
    button_AlexBlewett.setAttribute('class', 'removeButton');
	  button_AlexBlewett.setAttribute('onclick', 'remove_AlexBlewett()');
    button_AlexBlewett.setAttribute('style', 'padding-left:6px;');
    tn_button_AlexBlewett = document.createTextNode("remove");
    litn_button_AlexBlewett = button_AlexBlewett.appendChild(tn_button_AlexBlewett);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AlexBlewett);
  	div_AlexBlewett.appendChild(checkbox_AlexBlewett);
    div_AlexBlewett.appendChild(label_AlexBlewett);
    label_AlexBlewett.appendChild(button_AlexBlewett);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_AlexBlewett(){
	AlexBlewett_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    AlexBlewett = false;

    
}

// ANDY CARR

function AndyCarrSelected() {
  AndyCarr = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_AndyCarr = document.createElement('DIV');
	div_AndyCarr.setAttribute('id', 'AndyCarr_id');
  div_AndyCarr.setAttribute('class', 'govuk-checkboxes__item');
  div_AndyCarr.setAttribute('style', 'height: 44px;');



	var checkbox_AndyCarr = document.createElement('input');
    checkbox_AndyCarr.type = 'checkbox';
    checkbox_AndyCarr.id = 'AndyCarr_checkbox';
    checkbox_AndyCarr.name = 'AndyCarr';
    checkbox_AndyCarr.value = 'AndyCarr';
    // checkbox_AndyCarr.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_AndyCarr.className = "govuk-checkboxes__input";
    
  	var label_AndyCarr = document.createElement('label');
    label_AndyCarr.htmlFor = 'AndyCarr';
    label_AndyCarr.appendChild(document.createTextNode('Andy Carr'));
    label_AndyCarr.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_AndyCarr.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_AndyCarr = document.createElement('button');
    console.log('button created');
  	button_AndyCarr.setAttribute('id', 'AndyCarr_id_remove');
    button_AndyCarr.setAttribute('class', 'removeButton');
	  button_AndyCarr.setAttribute('onclick', 'remove_AndyCarr()');
    button_AndyCarr.setAttribute('style', 'padding-left:6px;');
    tn_button_AndyCarr = document.createTextNode("remove");
    litn_button_AndyCarr = button_AndyCarr.appendChild(tn_button_AndyCarr);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AndyCarr);
  	div_AndyCarr.appendChild(checkbox_AndyCarr);
    div_AndyCarr.appendChild(label_AndyCarr);
    label_AndyCarr.appendChild(button_AndyCarr);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_AndyCarr(){
	AndyCarr_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    AndyCarr = false;

    
}

// DUNCAN ANDERSON

function DuncanAndersonSelected() {
  DuncanAnderson = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_DuncanAnderson = document.createElement('DIV');
	div_DuncanAnderson.setAttribute('id', 'DuncanAnderson_id');
  div_DuncanAnderson.setAttribute('class', 'govuk-checkboxes__item');
  div_DuncanAnderson.setAttribute('style', 'height: 44px;');



	var checkbox_DuncanAnderson = document.createElement('input');
    checkbox_DuncanAnderson.type = 'checkbox';
    checkbox_DuncanAnderson.id = 'DuncanAnderson_checkbox';
    checkbox_DuncanAnderson.name = 'DuncanAnderson';
    checkbox_DuncanAnderson.value = 'DuncanAnderson';
    // checkbox_DuncanAnderson.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_DuncanAnderson.className = "govuk-checkboxes__input";
    
  	var label_DuncanAnderson = document.createElement('label');
    label_DuncanAnderson.htmlFor = 'DuncanAnderson';
    label_DuncanAnderson.appendChild(document.createTextNode('Duncan Anderson'));
    label_DuncanAnderson.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_DuncanAnderson.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_DuncanAnderson = document.createElement('button');
    console.log('button created');
  	button_DuncanAnderson.setAttribute('id', 'DuncanAnderson_id_remove');
    button_DuncanAnderson.setAttribute('class', 'removeButton');
	  button_DuncanAnderson.setAttribute('onclick', 'remove_DuncanAnderson()');
    button_DuncanAnderson.setAttribute('style', 'padding-left:6px;');
    tn_button_DuncanAnderson = document.createTextNode("remove");
    litn_button_DuncanAnderson = button_DuncanAnderson.appendChild(tn_button_DuncanAnderson);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_DuncanAnderson);
  	div_DuncanAnderson.appendChild(checkbox_DuncanAnderson);
    div_DuncanAnderson.appendChild(label_DuncanAnderson);
    label_DuncanAnderson.appendChild(button_DuncanAnderson);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_DuncanAnderson(){
	DuncanAnderson_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    DuncanAnderson = false;

    
}

// JAMES THOMAS

function JamesThomasSelected() {
  JamesThomas = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JamesThomas = document.createElement('DIV');
	div_JamesThomas.setAttribute('id', 'JamesThomas_id');
  div_JamesThomas.setAttribute('class', 'govuk-checkboxes__item');
  div_JamesThomas.setAttribute('style', 'height: 44px;');



	var checkbox_JamesThomas = document.createElement('input');
    checkbox_JamesThomas.type = 'checkbox';
    checkbox_JamesThomas.id = 'JamesThomas_checkbox';
    checkbox_JamesThomas.name = 'JamesThomas';
    checkbox_JamesThomas.value = 'JamesThomas';
    // checkbox_JamesThomas.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_JamesThomas.className = "govuk-checkboxes__input";
    
  	var label_JamesThomas = document.createElement('label');
    label_JamesThomas.htmlFor = 'JamesThomas';
    label_JamesThomas.appendChild(document.createTextNode('James Thomas'));
    label_JamesThomas.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_JamesThomas.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_JamesThomas = document.createElement('button');
    console.log('button created');
  	button_JamesThomas.setAttribute('id', 'JamesThomas_id_remove');
    button_JamesThomas.setAttribute('class', 'removeButton');
	  button_JamesThomas.setAttribute('onclick', 'remove_JamesThomas()');
    button_JamesThomas.setAttribute('style', 'padding-left:6px;');
    tn_button_JamesThomas = document.createTextNode("remove");
    litn_button_JamesThomas = button_JamesThomas.appendChild(tn_button_JamesThomas);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JamesThomas);
  	div_JamesThomas.appendChild(checkbox_JamesThomas);
    div_JamesThomas.appendChild(label_JamesThomas);
    label_JamesThomas.appendChild(button_JamesThomas);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JamesThomas(){
	JamesThomas_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    JamesThomas = false;

    
}

// JOHN BAPTISTE KELLY
function JohnBaptisteKellySelected() {
  JohnBaptisteKelly = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JohnBaptisteKelly = document.createElement('DIV');
	div_JohnBaptisteKelly.setAttribute('id', 'JohnBaptisteKelly_id');
  div_JohnBaptisteKelly.setAttribute('class', 'govuk-checkboxes__item');
  div_JohnBaptisteKelly.setAttribute('style', 'height: 44px;');



	var checkbox_JohnBaptisteKelly = document.createElement('input');
    checkbox_JohnBaptisteKelly.type = 'checkbox';
    checkbox_JohnBaptisteKelly.id = 'JohnBaptisteKelly_checkbox';
    checkbox_JohnBaptisteKelly.name = 'JohnBaptisteKelly';
    checkbox_JohnBaptisteKelly.value = 'JohnBaptisteKelly';
    // checkbox_JohnBaptisteKelly.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_JohnBaptisteKelly.className = "govuk-checkboxes__input";
    
  	var label_JohnBaptisteKelly = document.createElement('label');
    label_JohnBaptisteKelly.htmlFor = 'JohnBaptisteKelly';
    label_JohnBaptisteKelly.appendChild(document.createTextNode('John Baptiste-Kelly'));
    label_JohnBaptisteKelly.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_JohnBaptisteKelly.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_JohnBaptisteKelly = document.createElement('button');
    console.log('button created');
  	button_JohnBaptisteKelly.setAttribute('id', 'JohnBaptisteKelly_id_remove');
    button_JohnBaptisteKelly.setAttribute('class', 'removeButton');
	  button_JohnBaptisteKelly.setAttribute('onclick', 'remove_JohnBaptisteKelly()');
    button_JohnBaptisteKelly.setAttribute('style', 'padding-left:6px;');
    tn_button_JohnBaptisteKelly = document.createTextNode("remove");
    litn_button_JohnBaptisteKelly = button_JohnBaptisteKelly.appendChild(tn_button_JohnBaptisteKelly);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JohnBaptisteKelly);
  	div_JohnBaptisteKelly.appendChild(checkbox_JohnBaptisteKelly);
    div_JohnBaptisteKelly.appendChild(label_JohnBaptisteKelly);
    label_JohnBaptisteKelly.appendChild(button_JohnBaptisteKelly);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JohnBaptisteKelly(){
	JohnBaptisteKelly_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    JohnBaptisteKelly = false;
}

// JOHN JAMES
function JohnJamesSelected() {
  JohnJames = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JohnJames = document.createElement('DIV');
	div_JohnJames.setAttribute('id', 'JohnJames_id');
  div_JohnJames.setAttribute('class', 'govuk-checkboxes__item');
  div_JohnJames.setAttribute('style', 'height: 44px;');



	var checkbox_JohnJames = document.createElement('input');
    checkbox_JohnJames.type = 'checkbox';
    checkbox_JohnJames.id = 'JohnJames_checkbox';
    checkbox_JohnJames.name = 'JohnJames';
    checkbox_JohnJames.value = 'JohnJames';
    // checkbox_JohnJames.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_JohnJames.className = "govuk-checkboxes__input";
    
  	var label_JohnJames = document.createElement('label');
    label_JohnJames.htmlFor = 'JohnJames';
    label_JohnJames.appendChild(document.createTextNode('John James'));
    label_JohnJames.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_JohnJames.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_JohnJames = document.createElement('button');
    console.log('button created');
  	button_JohnJames.setAttribute('id', 'JohnJames_id_remove');
    button_JohnJames.setAttribute('class', 'removeButton');
	  button_JohnJames.setAttribute('onclick', 'remove_JohnJames()');
    button_JohnJames.setAttribute('style', 'padding-left:6px;');
    tn_button_JohnJames = document.createTextNode("remove");
    litn_button_JohnJames = button_JohnJames.appendChild(tn_button_JohnJames);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JohnJames);
  	div_JohnJames.appendChild(checkbox_JohnJames);
    div_JohnJames.appendChild(label_JohnJames);
    label_JohnJames.appendChild(button_JohnJames);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JohnJames(){
	JohnJames_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    JohnJames = false;
}

// JOHN TAYLOR
function JohnTaylorSelected() {
  JohnTaylor = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JohnTaylor = document.createElement('DIV');
	div_JohnTaylor.setAttribute('id', 'JohnTaylor_id');
  div_JohnTaylor.setAttribute('class', 'govuk-checkboxes__item');
  div_JohnTaylor.setAttribute('style', 'height: 44px;');



	var checkbox_JohnTaylor = document.createElement('input');
    checkbox_JohnTaylor.type = 'checkbox';
    checkbox_JohnTaylor.id = 'JohnTaylor_checkbox';
    checkbox_JohnTaylor.name = 'JohnTaylor';
    checkbox_JohnTaylor.value = 'JohnTaylor';
    // checkbox_JohnTaylor.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_JohnTaylor.className = "govuk-checkboxes__input";
    
  	var label_JohnTaylor = document.createElement('label');
    label_JohnTaylor.htmlFor = 'JohnTaylor';
    label_JohnTaylor.appendChild(document.createTextNode('John Taylor'));
    label_JohnTaylor.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_JohnTaylor.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_JohnTaylor = document.createElement('button');
    console.log('button created');
  	button_JohnTaylor.setAttribute('id', 'JohnTaylor_id_remove');
    button_JohnTaylor.setAttribute('class', 'removeButton');
	  button_JohnTaylor.setAttribute('onclick', 'remove_JohnTaylor()');
    button_JohnTaylor.setAttribute('style', 'padding-left:6px;');
    tn_button_JohnTaylor = document.createTextNode("remove");
    litn_button_JohnTaylor = button_JohnTaylor.appendChild(tn_button_JohnTaylor);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JohnTaylor);
  	div_JohnTaylor.appendChild(checkbox_JohnTaylor);
    div_JohnTaylor.appendChild(label_JohnTaylor);
    label_JohnTaylor.appendChild(button_JohnTaylor);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JohnTaylor(){
	JohnTaylor_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    JohnTaylor = false;
}

// JON PARKER
function JonParkerSelected() {
  JonParker = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JonParker = document.createElement('DIV');
	div_JonParker.setAttribute('id', 'JonParker_id');
  div_JonParker.setAttribute('class', 'govuk-checkboxes__item');
  div_JonParker.setAttribute('style', 'height: 44px;');



	var checkbox_JonParker = document.createElement('input');
    checkbox_JonParker.type = 'checkbox';
    checkbox_JonParker.id = 'JonParker_checkbox';
    checkbox_JonParker.name = 'JonParker';
    checkbox_JonParker.value = 'JonParker';
    // checkbox_JonParker.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_JonParker.className = "govuk-checkboxes__input";
    
  	var label_JonParker = document.createElement('label');
    label_JonParker.htmlFor = 'JonParker';
    label_JonParker.appendChild(document.createTextNode('Jon Parker'));
    label_JonParker.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_JonParker.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_JonParker = document.createElement('button');
    console.log('button created');
  	button_JonParker.setAttribute('id', 'JonParker_id_remove');
    button_JonParker.setAttribute('class', 'removeButton');
	  button_JonParker.setAttribute('onclick', 'remove_JonParker()');
    button_JonParker.setAttribute('style', 'padding-left:6px;');
    tn_button_JonParker = document.createTextNode("remove");
    litn_button_JonParker = button_JonParker.appendChild(tn_button_JonParker);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JonParker);
  	div_JonParker.appendChild(checkbox_JonParker);
    div_JonParker.appendChild(label_JonParker);
    label_JonParker.appendChild(button_JonParker);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JonParker(){
	JonParker_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    JonParker = false;
}

// JUAN PINTO DEL RIO
function JuanPintodelRioSelected() {
  JuanPintodelRio = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_JuanPintodelRio = document.createElement('DIV');
	div_JuanPintodelRio.setAttribute('id', 'JuanPintodelRio_id');
  div_JuanPintodelRio.setAttribute('class', 'govuk-checkboxes__item');
  div_JuanPintodelRio.setAttribute('style', 'height: 44px;');



	var checkbox_JuanPintodelRio = document.createElement('input');
    checkbox_JuanPintodelRio.type = 'checkbox';
    checkbox_JuanPintodelRio.id = 'JuanPintodelRio_checkbox';
    checkbox_JuanPintodelRio.name = 'JuanPintodelRio';
    checkbox_JuanPintodelRio.value = 'JuanPintodelRio';
    // checkbox_JuanPintodelRio.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_JuanPintodelRio.className = "govuk-checkboxes__input";
    
  	var label_JuanPintodelRio = document.createElement('label');
    label_JuanPintodelRio.htmlFor = 'JuanPintodelRio';
    label_JuanPintodelRio.appendChild(document.createTextNode('Juan Pinto-del-Rio'));
    label_JuanPintodelRio.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_JuanPintodelRio.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_JuanPintodelRio = document.createElement('button');
    console.log('button created');
  	button_JuanPintodelRio.setAttribute('id', 'JuanPintodelRio_id_remove');
    button_JuanPintodelRio.setAttribute('class', 'removeButton');
	  button_JuanPintodelRio.setAttribute('onclick', 'remove_JuanPintodelRio()');
    button_JuanPintodelRio.setAttribute('style', 'padding-left:6px;');
    tn_button_JuanPintodelRio = document.createTextNode("remove");
    litn_button_JuanPintodelRio = button_JuanPintodelRio.appendChild(tn_button_JuanPintodelRio);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_JuanPintodelRio);
  	div_JuanPintodelRio.appendChild(checkbox_JuanPintodelRio);
    div_JuanPintodelRio.appendChild(label_JuanPintodelRio);
    label_JuanPintodelRio.appendChild(button_JuanPintodelRio);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_JuanPintodelRio(){
	JuanPintodelRio_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    JuanPintodelRio = false;
}
// LUKAS KROENING MAYNARD
function LukasKroeningMaynardSelected() {
  LukasKroeningMaynard = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_LukasKroeningMaynard = document.createElement('DIV');
	div_LukasKroeningMaynard.setAttribute('id', 'LukasKroeningMaynard_id');
  div_LukasKroeningMaynard.setAttribute('class', 'govuk-checkboxes__item');
  div_LukasKroeningMaynard.setAttribute('style', 'height: 44px;');



	var checkbox_LukasKroeningMaynard = document.createElement('input');
    checkbox_LukasKroeningMaynard.type = 'checkbox';
    checkbox_LukasKroeningMaynard.id = 'LukasKroeningMaynard_checkbox';
    checkbox_LukasKroeningMaynard.name = 'LukasKroeningMaynard';
    checkbox_LukasKroeningMaynard.value = 'LukasKroeningMaynard';
    // checkbox_LukasKroeningMaynard.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_LukasKroeningMaynard.className = "govuk-checkboxes__input";
    
  	var label_LukasKroeningMaynard = document.createElement('label');
    label_LukasKroeningMaynard.htmlFor = 'LukasKroeningMaynard';
    label_LukasKroeningMaynard.appendChild(document.createTextNode('Lukas Kroening-Maynard'));
    label_LukasKroeningMaynard.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_LukasKroeningMaynard.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_LukasKroeningMaynard = document.createElement('button');
    console.log('button created');
  	button_LukasKroeningMaynard.setAttribute('id', 'LukasKroeningMaynard_id_remove');
    button_LukasKroeningMaynard.setAttribute('class', 'removeButton');
	  button_LukasKroeningMaynard.setAttribute('onclick', 'remove_LukasKroeningMaynard()');
    button_LukasKroeningMaynard.setAttribute('style', 'padding-left:6px;');
    tn_button_LukasKroeningMaynard = document.createTextNode("remove");
    litn_button_LukasKroeningMaynard = button_LukasKroeningMaynard.appendChild(tn_button_LukasKroeningMaynard);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_LukasKroeningMaynard);
  	div_LukasKroeningMaynard.appendChild(checkbox_LukasKroeningMaynard);
    div_LukasKroeningMaynard.appendChild(label_LukasKroeningMaynard);
    label_LukasKroeningMaynard.appendChild(button_LukasKroeningMaynard);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_LukasKroeningMaynard(){
	LukasKroeningMaynard_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    LukasKroeningMaynard = false;
}

// // MARK HORNSBY
function MarkHornsbySelected() {
  MarkHornsby = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_MarkHornsby = document.createElement('DIV');
	div_MarkHornsby.setAttribute('id', 'MarkHornsby_id');
  div_MarkHornsby.setAttribute('class', 'govuk-checkboxes__item');
  div_MarkHornsby.setAttribute('style', 'height: 44px;');



	var checkbox_MarkHornsby = document.createElement('input');
    checkbox_MarkHornsby.type = 'checkbox';
    checkbox_MarkHornsby.id = 'MarkHornsby_checkbox';
    checkbox_MarkHornsby.name = 'MarkHornsby';
    checkbox_MarkHornsby.value = 'MarkHornsby';
    // checkbox_MarkHornsby.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_MarkHornsby.className = "govuk-checkboxes__input";
    
  	var label_MarkHornsby = document.createElement('label');
    label_MarkHornsby.htmlFor = 'MarkHornsby';
    label_MarkHornsby.appendChild(document.createTextNode('Mark Hornsby'));
    label_MarkHornsby.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_MarkHornsby.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_MarkHornsby = document.createElement('button');
    console.log('button created');
  	button_MarkHornsby.setAttribute('id', 'MarkHornsby_id_remove');
    button_MarkHornsby.setAttribute('class', 'removeButton');
	  button_MarkHornsby.setAttribute('onclick', 'remove_MarkHornsby()');
    button_MarkHornsby.setAttribute('style', 'padding-left:6px;');
    tn_button_MarkHornsby = document.createTextNode("remove");
    litn_button_MarkHornsby = button_MarkHornsby.appendChild(tn_button_MarkHornsby);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_MarkHornsby);
  	div_MarkHornsby.appendChild(checkbox_MarkHornsby);
    div_MarkHornsby.appendChild(label_MarkHornsby);
    label_MarkHornsby.appendChild(button_MarkHornsby);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_MarkHornsby(){
	MarkHornsby_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    MarkHornsby = false;
}


// // MELVIA MATHEW

function MelviaMathewSelected() {
  MelviaMathew = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_MelviaMathew = document.createElement('DIV');
	div_MelviaMathew.setAttribute('id', 'MelviaMathew_id');
  div_MelviaMathew.setAttribute('class', 'govuk-checkboxes__item');
  div_MelviaMathew.setAttribute('style', 'height: 44px;');



	var checkbox_MelviaMathew = document.createElement('input');
    checkbox_MelviaMathew.type = 'checkbox';
    checkbox_MelviaMathew.id = 'MelviaMathew_checkbox';
    checkbox_MelviaMathew.name = 'MelviaMathew';
    checkbox_MelviaMathew.value = 'MelviaMathew';
    // checkbox_MelviaMathew.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_MelviaMathew.className = "govuk-checkboxes__input";
    
  	var label_MelviaMathew = document.createElement('label');
    label_MelviaMathew.htmlFor = 'MelviaMathew';
    label_MelviaMathew.appendChild(document.createTextNode('Melvia Mathew'));
    label_MelviaMathew.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_MelviaMathew.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_MelviaMathew = document.createElement('button');
    console.log('button created');
  	button_MelviaMathew.setAttribute('id', 'MelviaMathew_id_remove');
    button_MelviaMathew.setAttribute('class', 'removeButton');
	  button_MelviaMathew.setAttribute('onclick', 'remove_MelviaMathew()');
    button_MelviaMathew.setAttribute('style', 'padding-left:6px;');
    tn_button_MelviaMathew = document.createTextNode("remove");
    litn_button_MelviaMathew = button_MelviaMathew.appendChild(tn_button_MelviaMathew);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_MelviaMathew);
  	div_MelviaMathew.appendChild(checkbox_MelviaMathew);
    div_MelviaMathew.appendChild(label_MelviaMathew);
    label_MelviaMathew.appendChild(button_MelviaMathew);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_MelviaMathew(){
	MelviaMathew_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    MelviaMathew = false;
}
// // NEIL BUTLER

function NeilButlerSelected() {
  NeilButler = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_NeilButler = document.createElement('DIV');
	div_NeilButler.setAttribute('id', 'NeilButler_id');
  div_NeilButler.setAttribute('class', 'govuk-checkboxes__item');
  div_NeilButler.setAttribute('style', 'height: 44px;');



	var checkbox_NeilButler = document.createElement('input');
    checkbox_NeilButler.type = 'checkbox';
    checkbox_NeilButler.id = 'NeilButler_checkbox';
    checkbox_NeilButler.name = 'NeilButler';
    checkbox_NeilButler.value = 'NeilButler';
    // checkbox_NeilButler.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_NeilButler.className = "govuk-checkboxes__input";
    
  	var label_NeilButler = document.createElement('label');
    label_NeilButler.htmlFor = 'NeilButler';
    label_NeilButler.appendChild(document.createTextNode('Neil Butler'));
    label_NeilButler.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_NeilButler.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_NeilButler = document.createElement('button');
    console.log('button created');
  	button_NeilButler.setAttribute('id', 'NeilButler_id_remove');
    button_NeilButler.setAttribute('class', 'removeButton');
	  button_NeilButler.setAttribute('onclick', 'remove_NeilButler()');
    button_NeilButler.setAttribute('style', 'padding-left:6px;');
    tn_button_NeilButler = document.createTextNode("remove");
    litn_button_NeilButler = button_NeilButler.appendChild(tn_button_NeilButler);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_NeilButler);
  	div_NeilButler.appendChild(checkbox_NeilButler);
    div_NeilButler.appendChild(label_NeilButler);
    label_NeilButler.appendChild(button_NeilButler);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_NeilButler(){
	NeilButler_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    NeilButler = false;
}

// // NICOLA ADAMS

function NicolaAndrewsSelected() {
  NicolaAndrews = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_NicolaAndrews = document.createElement('DIV');
	div_NicolaAndrews.setAttribute('id', 'NicolaAndrews_id');
  div_NicolaAndrews.setAttribute('class', 'govuk-checkboxes__item');
  div_NicolaAndrews.setAttribute('style', 'height: 44px;');



	var checkbox_NicolaAndrews = document.createElement('input');
    checkbox_NicolaAndrews.type = 'checkbox';
    checkbox_NicolaAndrews.id = 'NicolaAndrews_checkbox';
    checkbox_NicolaAndrews.name = 'NicolaAndrews';
    checkbox_NicolaAndrews.value = 'NicolaAndrews';
    // checkbox_NicolaAndrews.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_NicolaAndrews.className = "govuk-checkboxes__input";
    
  	var label_NicolaAndrews = document.createElement('label');
    label_NicolaAndrews.htmlFor = 'NicolaAndrews';
    label_NicolaAndrews.appendChild(document.createTextNode('Nicola Andrews'));
    label_NicolaAndrews.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_NicolaAndrews.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_NicolaAndrews = document.createElement('button');
    console.log('button created');
  	button_NicolaAndrews.setAttribute('id', 'NicolaAndrews_id_remove');
    button_NicolaAndrews.setAttribute('class', 'removeButton');
	  button_NicolaAndrews.setAttribute('onclick', 'remove_NicolaAndrews()');
    button_NicolaAndrews.setAttribute('style', 'padding-left:6px;');
    tn_button_NicolaAndrews = document.createTextNode("remove");
    litn_button_NicolaAndrews = button_NicolaAndrews.appendChild(tn_button_NicolaAndrews);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_NicolaAndrews);
  	div_NicolaAndrews.appendChild(checkbox_NicolaAndrews);
    div_NicolaAndrews.appendChild(label_NicolaAndrews);
    label_NicolaAndrews.appendChild(button_NicolaAndrews);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_NicolaAndrews(){
	NicolaAndrews_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    NicolaAndrews = false;
}

// // PAT GANNON
function PatGannonSelected() {
  PatGannon = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_PatGannon = document.createElement('DIV');
	div_PatGannon.setAttribute('id', 'PatGannon_id');
  div_PatGannon.setAttribute('class', 'govuk-checkboxes__item');
  div_PatGannon.setAttribute('style', 'height: 44px;');



	var checkbox_PatGannon = document.createElement('input');
    checkbox_PatGannon.type = 'checkbox';
    checkbox_PatGannon.id = 'PatGannon_checkbox';
    checkbox_PatGannon.name = 'PatGannon';
    checkbox_PatGannon.value = 'PatGannon';
    // checkbox_PatGannon.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_PatGannon.className = "govuk-checkboxes__input";
    
  	var label_PatGannon = document.createElement('label');
    label_PatGannon.htmlFor = 'PatGannon';
    label_PatGannon.appendChild(document.createTextNode('Pat Gannon'));
    label_PatGannon.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_PatGannon.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_PatGannon = document.createElement('button');
    console.log('button created');
  	button_PatGannon.setAttribute('id', 'PatGannon_id_remove');
    button_PatGannon.setAttribute('class', 'removeButton');
	  button_PatGannon.setAttribute('onclick', 'remove_PatGannon()');
    button_PatGannon.setAttribute('style', 'padding-left:6px;');
    tn_button_PatGannon = document.createTextNode("remove");
    litn_button_PatGannon = button_PatGannon.appendChild(tn_button_PatGannon);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_PatGannon);
  	div_PatGannon.appendChild(checkbox_PatGannon);
    div_PatGannon.appendChild(label_PatGannon);
    label_PatGannon.appendChild(button_PatGannon);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_PatGannon(){
	PatGannon_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    PatGannon = false;
}
// // ROMANI DAVIES

function RomaniDaviesSelected() {
  RomaniDavies = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_RomaniDavies = document.createElement('DIV');
	div_RomaniDavies.setAttribute('id', 'RomaniDavies_id');
  div_RomaniDavies.setAttribute('class', 'govuk-checkboxes__item');
  div_RomaniDavies.setAttribute('style', 'height: 44px;');



	var checkbox_RomaniDavies = document.createElement('input');
    checkbox_RomaniDavies.type = 'checkbox';
    checkbox_RomaniDavies.id = 'RomaniDavies_checkbox';
    checkbox_RomaniDavies.name = 'RomaniDavies';
    checkbox_RomaniDavies.value = 'RomaniDavies';
    // checkbox_RomaniDavies.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_RomaniDavies.className = "govuk-checkboxes__input";
    
  	var label_RomaniDavies = document.createElement('label');
    label_RomaniDavies.htmlFor = 'RomaniDavies';
    label_RomaniDavies.appendChild(document.createTextNode('Romani Davies'));
    label_RomaniDavies.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_RomaniDavies.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_RomaniDavies = document.createElement('button');
    console.log('button created');
  	button_RomaniDavies.setAttribute('id', 'RomaniDavies_id_remove');
    button_RomaniDavies.setAttribute('class', 'removeButton');
	  button_RomaniDavies.setAttribute('onclick', 'remove_RomaniDavies()');
    button_RomaniDavies.setAttribute('style', 'padding-left:6px;');
    tn_button_RomaniDavies = document.createTextNode("remove");
    litn_button_RomaniDavies = button_RomaniDavies.appendChild(tn_button_RomaniDavies);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_RomaniDavies);
  	div_RomaniDavies.appendChild(checkbox_RomaniDavies);
    div_RomaniDavies.appendChild(label_RomaniDavies);
    label_RomaniDavies.appendChild(button_RomaniDavies);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_RomaniDavies(){
	RomaniDavies_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    RomaniDavies = false;
}

// // // SIMON SKIDMORE

function SimonSkidmoreSelected() {
  SimonSkidmore = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_SimonSkidmore = document.createElement('DIV');
	div_SimonSkidmore.setAttribute('id', 'SimonSkidmore_id');
  div_SimonSkidmore.setAttribute('class', 'govuk-checkboxes__item');
  div_SimonSkidmore.setAttribute('style', 'height: 44px;');



	var checkbox_SimonSkidmore = document.createElement('input');
    checkbox_SimonSkidmore.type = 'checkbox';
    checkbox_SimonSkidmore.id = 'SimonSkidmore_checkbox';
    checkbox_SimonSkidmore.name = 'SimonSkidmore';
    checkbox_SimonSkidmore.value = 'SimonSkidmore';
    // checkbox_SimonSkidmore.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_SimonSkidmore.className = "govuk-checkboxes__input";
    
  	var label_SimonSkidmore = document.createElement('label');
    label_SimonSkidmore.htmlFor = 'SimonSkidmore';
    label_SimonSkidmore.appendChild(document.createTextNode('Simon Skidmore'));
    label_SimonSkidmore.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_SimonSkidmore.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_SimonSkidmore = document.createElement('button');
    console.log('button created');
  	button_SimonSkidmore.setAttribute('id', 'SimonSkidmore_id_remove');
    button_SimonSkidmore.setAttribute('class', 'removeButton');
	  button_SimonSkidmore.setAttribute('onclick', 'remove_SimonSkidmore()');
    button_SimonSkidmore.setAttribute('style', 'padding-left:6px;');
    tn_button_SimonSkidmore = document.createTextNode("remove");
    litn_button_SimonSkidmore = button_SimonSkidmore.appendChild(tn_button_SimonSkidmore);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_SimonSkidmore);
  	div_SimonSkidmore.appendChild(checkbox_SimonSkidmore);
    div_SimonSkidmore.appendChild(label_SimonSkidmore);
    label_SimonSkidmore.appendChild(button_SimonSkidmore);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_SimonSkidmore(){
	SimonSkidmore_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    SimonSkidmore = false;
}

// // // SUE WATCHMAN

function SueWatchmanSelected() {
  SueWatchman = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_SueWatchman = document.createElement('DIV');
	div_SueWatchman.setAttribute('id', 'SueWatchman_id');
  div_SueWatchman.setAttribute('class', 'govuk-checkboxes__item');
  div_SueWatchman.setAttribute('style', 'height: 44px;');



	var checkbox_SueWatchman = document.createElement('input');
    checkbox_SueWatchman.type = 'checkbox';
    checkbox_SueWatchman.id = 'SueWatchman_checkbox';
    checkbox_SueWatchman.name = 'SueWatchman';
    checkbox_SueWatchman.value = 'SueWatchman';
    // checkbox_SueWatchman.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_SueWatchman.className = "govuk-checkboxes__input";
    
  	var label_SueWatchman = document.createElement('label');
    label_SueWatchman.htmlFor = 'SueWatchman';
    label_SueWatchman.appendChild(document.createTextNode('Sue Watchman'));
    label_SueWatchman.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_SueWatchman.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_SueWatchman = document.createElement('button');
    console.log('button created');
  	button_SueWatchman.setAttribute('id', 'SueWatchman_id_remove');
    button_SueWatchman.setAttribute('class', 'removeButton');
	  button_SueWatchman.setAttribute('onclick', 'remove_SueWatchman()');
    button_SueWatchman.setAttribute('style', 'padding-left:6px;');
    tn_button_SueWatchman = document.createTextNode("remove");
    litn_button_SueWatchman = button_SueWatchman.appendChild(tn_button_SueWatchman);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_SueWatchman);
  	div_SueWatchman.appendChild(checkbox_SueWatchman);
    div_SueWatchman.appendChild(label_SueWatchman);
    label_SueWatchman.appendChild(button_SueWatchman);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_SueWatchman(){
	SueWatchman_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    SueWatchman = false;
}

// // // TONY WATSON
function TonyWatsonSelected() {
  TonyWatson = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_TonyWatson = document.createElement('DIV');
	div_TonyWatson.setAttribute('id', 'TonyWatson_id');
  div_TonyWatson.setAttribute('class', 'govuk-checkboxes__item');
  div_TonyWatson.setAttribute('style', 'height: 44px;');



	var checkbox_TonyWatson = document.createElement('input');
    checkbox_TonyWatson.type = 'checkbox';
    checkbox_TonyWatson.id = 'TonyWatson_checkbox';
    checkbox_TonyWatson.name = 'TonyWatson';
    checkbox_TonyWatson.value = 'TonyWatson';
    // checkbox_TonyWatson.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_TonyWatson.className = "govuk-checkboxes__input";
    
  	var label_TonyWatson = document.createElement('label');
    label_TonyWatson.htmlFor = 'TonyWatson';
    label_TonyWatson.appendChild(document.createTextNode('Tony Watson'));
    label_TonyWatson.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_TonyWatson.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_TonyWatson = document.createElement('button');
    console.log('button created');
  	button_TonyWatson.setAttribute('id', 'TonyWatson_id_remove');
    button_TonyWatson.setAttribute('class', 'removeButton');
	  button_TonyWatson.setAttribute('onclick', 'remove_TonyWatson()');
    button_TonyWatson.setAttribute('style', 'padding-left:6px;');
    tn_button_TonyWatson = document.createTextNode("remove");
    litn_button_TonyWatson = button_TonyWatson.appendChild(tn_button_TonyWatson);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_TonyWatson);
  	div_TonyWatson.appendChild(checkbox_TonyWatson);
    div_TonyWatson.appendChild(label_TonyWatson);
    label_TonyWatson.appendChild(button_TonyWatson);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_TonyWatson(){
	TonyWatson_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    TonyWatson = false;
}