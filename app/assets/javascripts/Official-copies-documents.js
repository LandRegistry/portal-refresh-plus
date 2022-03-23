// const session = require("express-session");

var basketQuantity = 0;
var basketCost = 0;

function anythingInBasket(){
    if(basketQuantity === 0){
        document.getElementById("basketCounter").style.display = 'none';
    }
    if(basketQuantity >= 1){
        document.getElementById("basketCounter").style.display = 'block';
    }
}

function selectDocument(checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID){

    if (document.getElementById(checkboxID).checked) {
        console.log(arguments);

        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'table-row';
        basketQuantity += 1;
        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = basketQuantity;
        sessionStorage.setItem('basketQuantity',basketQuantity);

        if(document.getElementById(divID) == null){
            var div_basketItem = document.createElement("div");
            div_basketItem.setAttribute("class", "basketItem");
            div_basketItem.setAttribute("id", divID);
            var AddingtoBasket = document.getElementById('addBasketItemsHere');

            var div_basketSection = document.createElement("div");
            div_basketSection.setAttribute("class", "basketSection");
            div_basketItem.appendChild(div_basketSection);
            
            var div_basketAddress = document.createElement("div");
            div_basketAddress.setAttribute("class", "basketAddress");
            var tn_addressHeading = document.createTextNode("Address");
            var addressHeading = document.createElement("p");
            addressHeading.setAttribute("style", "font-size:16px; margin-bottom:0px; font-weight:700;");
            addressHeading.appendChild(tn_addressHeading);
            div_basketAddress.appendChild(addressHeading);
            var tn_address = document.createTextNode(Address);
            var address = document.createElement("p");
            address.setAttribute("style", "font-size:16px; margin-bottom:0px;");
            address.appendChild(tn_address);
            div_basketAddress.appendChild(address);

            var div_basketTitle = document.createElement("div");
            div_basketTitle.setAttribute("class", "basketTitle");
            var tn_titleNumberHeading = document.createTextNode("Title number");
            var titleNumberHeading = document.createElement("p");
            titleNumberHeading.setAttribute("style", "font-size:16px; margin-bottom:0px; font-weight:700;");
            titleNumberHeading.appendChild(tn_titleNumberHeading);
            div_basketTitle.appendChild(titleNumberHeading);
            var tn_titleNumber = document.createTextNode(TitleNumber);
            var titleNumber = document.createElement("p");
            titleNumber.setAttribute("style", "font-size:16px; margin-bottom:0px;");
            titleNumber.appendChild(tn_titleNumber);
            div_basketTitle.appendChild(titleNumber);

            div_basketSection.appendChild(div_basketAddress);
            div_basketSection.appendChild(div_basketTitle);

            AddingtoBasket.insertBefore(div_basketItem, AddingtoBasket.childNodes[0]);

            var div_basketSection2 = document.createElement("div");
            div_basketSection2.setAttribute("class", "basketSection");
            div_basketSection2.setAttribute("style", "padding: 15px 0px;");
            div_basketItem.appendChild(div_basketSection2);
            var tn_documentsHeading = document.createTextNode("Documents");
            var documentsHeading = document.createElement("p");
            documentsHeading.setAttribute("style", "font-size:16px; margin-bottom:0px; font-weight:700;");
            documentsHeading.appendChild(tn_documentsHeading);
            div_basketSection2.appendChild(documentsHeading);
            var documentsUL = document.createElement("UL");
            documentsUL.setAttribute("id", listID);
            div_basketSection2.appendChild(documentsUL);

            console.log('first section created');
        }

        // if statement should end here

        var documentLI = document.createElement("LI");
        documentLI.setAttribute("id", listItemID);
        var documentName = document.createElement("span");
        documentName.setAttribute("class", "basketItemSelected");
        var documentNameText = document.createTextNode(DocumentName);
        documentName.appendChild(documentNameText);
        var removeIcon = document.createElement("span");
        removeIcon.setAttribute("class", "basketItemRemove");
        // var removelistItemID = arguments[8];
        // var removelistID = arguments[7];
        // var removetablerowID = arguments[1];
        // this.listItemID = listItemID;
        // this.listID = listID;
        // this.tablerowID = tablerowID;

        // checkboxID, 
        // tablerowID, 
        // selectAllID, 
        // Address, 
        // TitleNumber, 
        // DocumentName, 
        // divID, 
        // listID, 
        // listItemID

        // var Iconfunction = callback.apply(this, args);
        removeIcon.setAttribute("id", IconID);
        // var retrieveIconID = removeIcon.id;
        // console.log(retrieveIconID);

        // removeIcon.setAttribute("onclick", "ItemFromBasket(event)");
        // removeIcon.setAttribute("onclick", "ItemFromBasket.bind(this, checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID)");
        
        
        // removeIcon.addEventListener('click', ItemFromBasket.bind(null, checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID));

        // let ItemFromBasketbinded = ItemFromBasket.bind(null, checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID);
        // removeIcon.addEventListener('click', ItemFromBasketbinded());
        
        // argumentsArray = [].slice.apply(arguments);        
        // console.log(argumentsArray);
        // console.log(argumentsArray[8]);
        // var carry_listID = String(argumentsArray[8]);
        // console.log(carry_listID);
        // console.log(arguments[7]);
        // let calltheFunction = ItemFromBasket(arguments[7]);
        // removeIcon.setAttribute('onclick', calltheFunction);
        
        // THIS WORKS
        // removeIcon.addEventListener('click', ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]));
        
        // THIS DOES NOT WORK
        // var SetArgs = [null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]]
        // removeIcon.setAttribute("onclick", "ItemFromBasket.apply(this, SetArgs)");

        // document.getElementById(removeIconID).onclick = this.ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
        // removeIcon.setAttribute("onclick", function() {ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9])});
        
        // const SetArgs = [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]]
        // let RemoveITEM = ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
        
        // removeIcon.onlick = function testing(...SetArgs){ 
        //     console.log('hello its me');
        // }
        
        // THIS WORKS
        // removeIcon.onclick = this.ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);

        // let HELLO = ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
        // removeIcon.setAttribute("onclick", "this.ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9])");
        
        var argsString0 = arguments[0];
        // argsString0.toString();
        JSON.stringify(argsString0);
        // console.log(argsString0);
        var argsString1 = arguments[1];
        var argsString2 = arguments[2];
        var argsString3 = arguments[3];
        var argsString4 = arguments[4];
        var argsString5 = arguments[5];
        console.log(argsString1);
        var List = [argsString0, argsString1];
        console.log(List);
        var argsString = [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]];
        let inner = argsString.toString();
        // removeIcon.setAttribute('onclick', 'ItemFromBasket("'+argsString0+','+argsString1+','+argsString2+','+argsString3+','+argsString4+','+argsString5+'")');
        removeIcon.setAttribute('onclick', "ItemFromBasket('"+arguments[0]+"','"+arguments[1]+"','"+arguments[2]+"','"+arguments[3]+"','"+arguments[4]+"','"+arguments[5]+"','"+arguments[6]+"','"+arguments[7]+"','"+arguments[8]+"','"+arguments[9]+"')");

        // this.ItemFromBasket = this.ItemFromBasket.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
        // removeIcon.setAttribute('onclick', this.ItemFromBasket());


        var documentPrice = document.createElement("span");
        documentPrice.setAttribute("class", "basketItemPrice");
        var documentPriceText = document.createTextNode("£3.00");
        documentPrice.appendChild(documentPriceText);
        documentLI.appendChild(documentName);
        documentLI.appendChild(removeIcon);
        documentLI.appendChild(documentPrice);
        addToList = document.getElementById(listID)
        addToList.appendChild(documentLI);

        basketCost += 3;
        document.getElementById("totalCostofBasket").innerHTML = '£' + basketCost + '.00';
        sessionStorage.setItem('totalCostofBasket', basketCost);

        var AddingtoBasket = document.getElementById('addBasketItemsHere');
        sessionStorage.setItem('InBasket',AddingtoBasket.innerHTML);

    }   
    else{
        // console.log('code executing');
        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'none';
        basketQuantity -= 1;
        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = basketQuantity;
        if (document.getElementById(selectAllID).checked) {
            document.getElementById(selectAllID).checked = false;
        }
        document.getElementById(listItemID).remove();

        // check if the whole div needs to be removed
        deleteWholeDIV = document.getElementById(listID).childElementCount;
        console.log(deleteWholeDIV);
        if(deleteWholeDIV == 0){
            document.getElementById(divID).remove();
        }

        basketCost -= 3;
        document.getElementById("totalCostofBasket").innerHTML = '£' + basketCost + '.00';
        sessionStorage.setItem('totalCostofBasket', basketCost);

        var AddingtoBasket = document.getElementById('addBasketItemsHere');
        sessionStorage.setItem('InBasket',AddingtoBasket.innerHTML);

    }
}

// function ItemFromBasket(event){

//     var triggeredIcon = event.target.id; 
//     console.log(triggeredIcon);
//     var LIof_triggeredIcon = document.getElementById(triggeredIcon).parentElement;
//     // LIof_triggeredIcon.remove();
//     var LIof_triggeredIconID = LIof_triggeredIcon.id;
//     ULof_triggeredIcon = document.getElementById(LIof_triggeredIconID).parentElement;
// }

function ItemFromBasket(checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID){
    console.log('testing the retrieval of arguments');
    // console.log(listItemID);
    // console.log(document.getElementById(listItemID));
    document.getElementById(listItemID).remove();
    // THIS WORKS
    document.getElementById(checkboxID).checked = false;
    let RemoveITEM = selectDocument.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
    RemoveITEM();
}

function SelectAll(whichSelectAll){
    // console.log('function being called');
    if(whichSelectAll === '27a'){
        if(document.getElementById('27a-checkbox-all').checked){
            // console.log('Select all for 27a Drakefell Road has been selected');
            if(document.getElementById('27a-checkbox-1').checked == false){
                document.getElementById('27a-checkbox-1').checked = true;
                selectDocument('27a-checkbox-1', '27a-register', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27aDIV', '27aLIST', 'RegisterLI');
            }
            if(document.getElementById('27a-checkbox-2').checked == false){
                document.getElementById('27a-checkbox-2').checked = true;
                selectDocument('27a-checkbox-2', '27a-titlePlan', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27aDIV', '27aLIST', 'TitlePlanLI');
            }
        }
        else{
            // console.log('Select all for 27a Drakefell Road has been deselected');
            document.getElementById('27a-checkbox-1').checked = false;
            document.getElementById('27a-checkbox-2').checked = false;
            selectDocument('27a-checkbox-1', '27a-register', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27aDIV', '27aLIST', 'RegisterLI');
            selectDocument('27a-checkbox-2', '27a-titlePlan', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27aDIV', '27aLIST', 'TitlePlanLI');
        }
    }
    if(whichSelectAll === '27b'){
        if(document.getElementById('27b-checkbox-all').checked){
            console.log('Select all for 27b Drakefell Road has been selected');
            if(document.getElementById('27b-checkbox-1').checked == false){
                document.getElementById('27b-checkbox-1').checked = true;
                selectDocument('27b-checkbox-1', '27b-register', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27bDIV', '27bLIST', 'RegisterbLI', '27b_RegisterIcon');
            }
            if(document.getElementById('27b-checkbox-2').checked == false){
                document.getElementById('27b-checkbox-2').checked = true;
                selectDocument('27b-checkbox-2', '27b-titlePlan', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27bDIV', '27bLIST', 'TitlePlanbLI', '27b_TitlePlanIcon');
            }
        }
        else{
            console.log('Select all for 27b Drakefell Road has been deselected');
            document.getElementById('27b-checkbox-1').checked = false;
            selectDocument('27b-checkbox-1', '27b-register', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27bDIV', '27bLIST', 'RegisterbLI', '27b_RegisterIcon');
            document.getElementById('27b-checkbox-2').checked = false;
            selectDocument('27b-checkbox-2', '27b-titlePlan', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27bDIV', '27bLIST', 'TitlePlanbLI', '27b_TitlePlanIcon');
        }
    }
}




// function ARegister(){
//     console.log('the javascript is linked');
//     if (document.getElementById('27a-checkbox-1').checked) {

//         var RegisterAdded = document.getElementById('27a-register');
//         RegisterAdded.style.display = 'table-row';
//     }   
//     else{
//         var RegisterAdded = document.getElementById('27a-register');
//         RegisterAdded.style.display = 'none';
//     }
// }

// function ATitlePlan(){
//     console.log('function is executing');
//     if (document.getElementById('27a-checkbox-2').checked) {

//         var TitlePlanAdded = document.getElementById('27a-titlePlan');
//         TitlePlanAdded.style.display = 'table-row';
//     }   
//     else{
//         var TitlePlanAdded = document.getElementById('27a-titlePlan');
//         TitlePlanAdded.style.display = 'none';
//     }
// }


// function ACheckAll(){
//     console.log('function is executing');
//     if (document.getElementById('27a-checkbox-all').checked) {
//         document.getElementById('27a-checkbox-1').checked = true;
//         var RegisterAdded = document.getElementById('27a-register');
//         RegisterAdded.style.display = 'table-row';
        
//         document.getElementById('27a-checkbox-2').checked = true;
//         var TitlePlanAdded = document.getElementById('27a-titlePlan');
//         TitlePlanAdded.style.display = 'table-row';
//     }   
//     else{
//         document.getElementById('27a-checkbox-1').checked = false;
//         var TitlePlanAdded = document.getElementById('27a-titlePlan');
//         TitlePlanAdded.style.display = 'none';
//         document.getElementById('27a-checkbox-2').checked = false;
//         var RegisterAdded = document.getElementById('27a-register');
//         RegisterAdded.style.display = 'none';
//     }
// }

