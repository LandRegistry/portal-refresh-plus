// const session = require("express-session");

var firstItemAdded = 1;
// var basketCost = 0;

function onloadCheck(checkboxID, tablerowID){
    console.log('onloadCheck running');
    if(sessionStorage.getItem(checkboxID)){
        console.log('session storage item exists');
        document.getElementById(checkboxID).checked = true;
        if(tablerowID != ''){
            var DocumentAdded = document.getElementById(tablerowID);
            DocumentAdded.style.display = 'table-row';
        }
    }
}

function anythingInBasket(){
    // if(basketQuantity === 0){
    //     document.getElementById("basketCounter").style.display = 'none';
    // }
    // if(basketQuantity >= 1){
    //     document.getElementById("basketCounter").style.display = 'block';
    // }
    if(parseInt(sessionStorage.getItem("basketQuantity")) === 0){
        document.getElementById("basketCounter").style.display = 'none';
        document.getElementById("checkout-button").style.display = 'none';

    }
    if(parseInt(sessionStorage.getItem("basketQuantity")) >= 1){
        document.getElementById("basketCounter").style.display = 'block';
        document.getElementById("checkout-button").style.display = 'block';

    }
}

function selectDocument(checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID, TableRow, ParentAccordian, CustomerReference, TableID, CostperProperty){
// function selectDocument(checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID){

    if (document.getElementById(checkboxID).checked) {
        console.log(arguments);

        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'table-row';
        if(sessionStorage.getItem("basketQuantity") === null){
            console.log('adding');
            sessionStorage.setItem('basketQuantity',1);
            sessionStorage.setItem('basketTotalCost',3);
            // var newItemNumber = sessionStorage.getItem("basketQuantity");
        }
        else{
            var previousItemsNumber = sessionStorage.getItem("basketQuantity");
            sessionStorage.setItem('basketQuantity', parseInt(previousItemsNumber) + 1);
            var previousTotalCost = sessionStorage.getItem("basketTotalCost");
            sessionStorage.setItem('basketTotalCost', parseInt(previousTotalCost) + 3);

            // var newItemNumber = sessionStorage.getItem('basketQuantity');

        }
        // basketQuantity += 1;
        anythingInBasket();
        // sessionStorage.setItem('basketQuantity',basketQuantity);
        // document.getElementById("basketCounter").innerHTML = basketQuantity;
        document.getElementById("basketCounter").innerHTML = sessionStorage.getItem("basketQuantity");


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
        
        // var argsString0 = arguments[0];
        // argsString0.toString();
        // JSON.stringify(argsString0);
        // console.log(argsString0);
        // var argsString1 = arguments[1];
        // var argsString2 = arguments[2];
        // var argsString3 = arguments[3];
        // var argsString4 = arguments[4];
        // var argsString5 = arguments[5];
        // console.log(argsString1);
        // var List = [argsString0, argsString1];
        // console.log(List);
        // var argsString = [arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]];
        // let inner = argsString.toString();
        // removeIcon.setAttribute('onclick', 'ItemFromBasket("'+argsString0+','+argsString1+','+argsString2+','+argsString3+','+argsString4+','+argsString5+'")');
        removeIcon.setAttribute('onclick', "ItemFromBasket('"+arguments[0]+"','"+arguments[1]+"','"+arguments[2]+"','"+arguments[3]+"','"+arguments[4]+"','"+arguments[5]+"','"+arguments[6]+"','"+arguments[7]+"','"+arguments[8]+"','"+arguments[9]+"','"+arguments[10]+"','"+arguments[11]+"','"+arguments[12]+"','"+arguments[13]+"','"+arguments[14]+"')");

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

        // basketCost += 3;
        document.getElementById("totalCostofBasket").innerHTML = '£' + sessionStorage.getItem("basketTotalCost") + '.00';
        // document.getElementById("totalCostofBasket").innerHTML = '£' + basketCost + '.00';
        // sessionStorage.setItem('totalCostofBasket', basketCost);
        sessionStorage.setItem(checkboxID, true);
        var AddingtoBasket = document.getElementById('addBasketItemsHere');
        sessionStorage.setItem('InBasket',AddingtoBasket.innerHTML);
        var BasketCounter = document.getElementById('basketCounter');
        sessionStorage.setItem('counterForBasket',BasketCounter.innerHTML);
        // var CostAndCheckout = document.getElementById('TotalCostandCheckout');
        // sessionStorage.setItem('CostAndCheckoutButton',CostAndCheckout.innerHTML);

        sessionStorage.setItem(checkboxID, true);


    }   
    else{
        console.log('code executing');
        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'none';
        // basketQuantity -= 1;
        var previousItemsNumber = sessionStorage.getItem("basketQuantity");
        sessionStorage.setItem('basketQuantity', parseInt(previousItemsNumber) - 1);
        var previousTotalCost = sessionStorage.getItem("basketTotalCost");
        sessionStorage.setItem('basketTotalCost', parseInt(previousTotalCost) - 3);
        document.getElementById("totalCostofBasket").innerHTML = '£' + sessionStorage.getItem("basketTotalCost") + '.00';

        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = sessionStorage.getItem("basketQuantity");
        if (sessionStorage.getItem(selectAllID)) {
            document.getElementById(selectAllID).checked = false;
            sessionStorage.removeItem(selectAllID);


        }

        // if(document.getElementById(listItemID)){
            document.getElementById(listItemID).remove();
        // }

        // check if the whole div needs to be removed
        deleteWholeDIV = document.getElementById(listID).childElementCount;
        console.log(deleteWholeDIV);
        if(deleteWholeDIV == 0){
            document.getElementById(divID).remove();
        }

        // basketCost -= 3;
        // document.getElementById("totalCostofBasket").innerHTML = '£' + basketCost + '.00';
        // sessionStorage.setItem('totalCostofBasket', basketCost);

        var AddingtoBasket = document.getElementById('addBasketItemsHere');
        sessionStorage.setItem('InBasket',AddingtoBasket.innerHTML);
        var BasketCounter = document.getElementById('basketCounter');
        sessionStorage.setItem('counterForBasket',BasketCounter.innerHTML);
        // var CostAndCheckout = document.getElementById('TotalCostandCheckout');
        // sessionStorage.setItem('CostAndCheckoutButton',CostAndCheckout.innerHTML);

        sessionStorage.removeItem(checkboxID);

        // If an item removed when on the checkout screen
        // var current_url = location.pathname;
        // if (current_url == '/officialcopies/V1/basket') {
        //     document.getElementById(DocumentRowAccordian).style.display = 'none';
        //     var howManyRows = document.getElementById(DocumentTableBody).childElementCount;
        //     if(howManyRows == 0){
        //         document.getElementById(propertyAccordian).style.display = 'none';
        //         document.getElementById(CustomerReference).style.display = 'none';
        //     }
        // }
        


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

function ItemFromBasket(checkboxID, tablerowID, selectAllID, Address, TitleNumber, DocumentName, divID, listID, listItemID, IconID, TableRow, ParentAccordian, CustomerReference, TableID, CostperProperty){
    console.log('testing the retrieval of arguments');
    // console.log(listItemID);
    // console.log(document.getElementById(listItemID));
    // document.getElementById(listItemID).remove();
    // THIS WORKS

    // TESTING WITH WHAT THE PAGE THE USER IS ON
    // var current_url = location.pathname;
    // if (current_url == '/officialcopies/V1/search-result') {
    //     console.log('Search result page');
    //     document.getElementById(checkboxID).checked = false;
    //     let RemoveITEM = selectDocument.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
    //     RemoveITEM();
    // }
    if (document.getElementById(checkboxID)) {
        console.log('Checkbox exists on page');
        document.getElementById(checkboxID).checked = false;
        let RemoveITEM = selectDocument.bind(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
        RemoveITEM();
    }
    else{
        console.log('Checkbox does NOT exist on page');
        var previousItemsNumber = sessionStorage.getItem("basketQuantity");
        sessionStorage.setItem('basketQuantity', parseInt(previousItemsNumber) - 1);
        var previousTotalCost = sessionStorage.getItem("basketTotalCost");
        sessionStorage.setItem('basketTotalCost', parseInt(previousTotalCost) - 3);
        document.getElementById("totalCostofBasket").innerHTML = '£' + sessionStorage.getItem("basketTotalCost") + '.00';

        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = sessionStorage.getItem("basketQuantity");
        // if (document.getElementById(selectAllID).checked) {
        //     document.getElementById(selectAllID).checked = false;
        // }

        // if(document.getElementById(listItemID)){
            document.getElementById(listItemID).remove();
        // }

        // check if the whole div needs to be removed
        deleteWholeDIV = document.getElementById(listID).childElementCount;
        console.log(deleteWholeDIV);
        if(deleteWholeDIV == 0){
            document.getElementById(divID).remove();
        }

        // basketCost -= 3;
        // document.getElementById("totalCostofBasket").innerHTML = '£' + basketCost + '.00';
        // sessionStorage.setItem('totalCostofBasket', basketCost);

        var AddingtoBasket = document.getElementById('addBasketItemsHere');
        sessionStorage.setItem('InBasket',AddingtoBasket.innerHTML);
        var BasketCounter = document.getElementById('basketCounter');
        sessionStorage.setItem('counterForBasket',BasketCounter.innerHTML);

        sessionStorage.removeItem(checkboxID);

        // var current_url = location.pathname;
        // if (current_url == '/officialcopies/V1/basket') {
        //     console.log('were at the checkout');
        //     document.getElementById(DocumentRowAccordian).style.display = 'none';
        //     var howManyRows = document.getElementById(DocumentTableBody).childElementCount;
        //     if(howManyRows == 0){
        //         document.getElementById(propertyAccordian).style.display = 'none';
        //         document.getElementById(CustomerReference).style.display = 'none';
        //     }
        // }

        var current_url = location.pathname;
        if (current_url == '/officialcopies/V1/basket') {
            console.log('items removed when on basket page');
            document.getElementById(TableRow).style.display = 'none';
            var numberDisplayed = 0;
            var Children = document.getElementById(TableID).children;
            console.log(Children.length);
            for (let child of Children){
                // console.log(Children[child]);
                if(child.style.display == 'table-row'){
                    console.log('a child is displayed');
                    numberDisplayed += 1;
                }
            }
            if(numberDisplayed == 0){
                document.getElementById(ParentAccordian).style.display = 'none';
                document.getElementById(CustomerReference).style.display = 'none';
    
            }

            var PropertyDocumentsCost = numberDisplayed * 3; 
            document.getElementById(CostperProperty).innerHTML = '£' + PropertyDocumentsCost + '.00';
            

        }

    }
}

function SelectAll(whichSelectAll){
    // console.log('function being called');
    if(whichSelectAll === '27a'){
        if(document.getElementById('27a-checkbox-all').checked){
            // console.log('Select all for 27a Drakefell Road has been selected');
            if(document.getElementById('27a-checkbox-1').checked == false){
                document.getElementById('27a-checkbox-1').checked = true;
                selectDocument('27a-checkbox-1', '27a-register', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27aDIV', '27aLIST', 'RegisterLI', '27a_RegisterIcon','27aRegisterBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');            
            }
            if(document.getElementById('27a-checkbox-2').checked == false){
                document.getElementById('27a-checkbox-2').checked = true;
                selectDocument('27a-checkbox-2', '27a-titlePlan', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27aDIV', '27aLIST', 'TitlePlanLI', '27a_TitlePlanIcon','27aTitlePlanBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
            }
            if(document.getElementById('27a-checkbox-deed')){
                if(document.getElementById('27a-checkbox-deed').checked == false){
                    document.getElementById('27a-checkbox-deed').checked = true;
                    selectDocument('27a-checkbox-deed', '27a-deed', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Deed', '27aDIV', '27aLIST', 'DeedLI', '27a_DeedIcon', '27aDeedBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                }
                if(document.getElementById('27a-checkbox-lease').checked == false){
                    document.getElementById('27a-checkbox-lease').checked = true;
                    selectDocument('27a-checkbox-lease', '27a-lease', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Lease', '27aDIV', '27aLIST', 'LeaseLI', '27a_LeaseIcon', '27aLeaseBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                }
                if(document.getElementById('27a-checkbox-transfer').checked == false){
                    document.getElementById('27a-checkbox-transfer').checked = true;
                    selectDocument('27a-checkbox-transfer', '27a-transfer', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Transfer', '27aDIV', '27aLIST', 'TransferLI', '27a_TransferIcon', '27aTransferBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                }
                if(document.getElementById('27a-checkbox-charge').checked == false){
                    document.getElementById('27a-checkbox-charge').checked = true;
                    selectDocument('27a-checkbox-charge', '27a-charge', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Charge', '27aDIV', '27aLIST', 'ChargeLI', '27a_ChargeIcon', '27aChargeBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                }
            }
            sessionStorage.setItem('27a-checkbox-all', true);

        }
        else{
            // console.log('Select all for 27a Drakefell Road has been deselected');
            document.getElementById('27a-checkbox-1').checked = false;
            document.getElementById('27a-checkbox-2').checked = false;
            selectDocument('27a-checkbox-1', '27a-register', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27aDIV', '27aLIST', 'RegisterLI', '27a_RegisterIcon','27aRegisterBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');            
            selectDocument('27a-checkbox-2', '27a-titlePlan', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27aDIV', '27aLIST', 'TitlePlanLI', '27a_TitlePlanIcon','27aTitlePlanBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');

            if(document.getElementById('27a-checkbox-deed')){
                document.getElementById('27a-checkbox-deed').checked = false;
                selectDocument('27a-checkbox-deed', '27a-deed', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Deed', '27aDIV', '27aLIST', 'DeedLI', '27a_DeedIcon', '27aDeedBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                document.getElementById('27a-checkbox-lease').checked = false;
                selectDocument('27a-checkbox-lease', '27a-lease', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Lease', '27aDIV', '27aLIST', 'LeaseLI', '27a_LeaseIcon', '27aLeaseBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                document.getElementById('27a-checkbox-transfer').checked = false;
                selectDocument('27a-checkbox-transfer', '27a-transfer', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Transfer', '27aDIV', '27aLIST', 'TransferLI', '27a_TransferIcon', '27aTransferBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
                document.getElementById('27a-checkbox-charge').checked = false;
                selectDocument('27a-checkbox-charge', '27a-charge', '27a-checkbox-all', '27a Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Charge', '27aDIV', '27aLIST', 'ChargeLI', '27a_ChargeIcon', '27aChargeBasket','27aBasket', 'reference-27a', '27aTable', '27aCost');
            }

            sessionStorage.removeItem('27a-checkbox-all');
        }
    }
    if(whichSelectAll === '27b'){
        if(document.getElementById('27b-checkbox-all').checked){
            console.log('Select all for 27b Drakefell Road has been selected');
            if(document.getElementById('27b-checkbox-1').checked == false){
                document.getElementById('27b-checkbox-1').checked = true;
                selectDocument('27b-checkbox-1', '27b-register', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27bDIV', '27bLIST', 'RegisterbLI', '27b_RegisterIcon', '27bRegisterBasket','27bBasket', 'reference-27b', '27bTable', '27bCost');
            }
            if(document.getElementById('27b-checkbox-2').checked == false){
                document.getElementById('27b-checkbox-2').checked = true;
                selectDocument('27b-checkbox-2', '27b-titlePlan', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27bDIV', '27bLIST', 'TitlePlanbLI', '27b_TitlePlanIcon', '27bTitlePlanBasket','27bBasket', 'reference-27b', '27bTable', '27bCost');
            }
            sessionStorage.setItem('27b-checkbox-all', true);

        }
        else{
            console.log('Select all for 27b Drakefell Road has been deselected');
            document.getElementById('27b-checkbox-1').checked = false;
            selectDocument('27b-checkbox-1', '27b-register', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Register', '27bDIV', '27bLIST', 'RegisterbLI', '27b_RegisterIcon', '27bRegisterBasket','27bBasket', 'reference-27b', '27bTable', '27bCost');
            document.getElementById('27b-checkbox-2').checked = false;
            selectDocument('27b-checkbox-2', '27b-titlePlan', '27b-checkbox-all', '27b Drakefell Road, Coventry, CV5K2X', 'SGL479276', 'Title plan', '27bDIV', '27bLIST', 'TitlePlanbLI', '27b_TitlePlanIcon', '27bTitlePlanBasket','27bBasket', 'reference-27b', '27bTable', '27bCost');

            sessionStorage.removeItem('27b-checkbox-all');

        }
    }
    if(whichSelectAll === '144a'){
        if(document.getElementById('144a-checkbox-all').checked){
            console.log('Select all for 144a Drakefell Road has been selected');
            if(document.getElementById('144a-checkbox-1').checked == false){
                document.getElementById('144a-checkbox-1').checked = true;
                selectDocument('144a-checkbox-1', '144a-register', '144a-checkbox-all', '144a Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144aDIV', '144aLIST', 'Register3LI', '144a_RegisterIcon');
            }
            if(document.getElementById('144a-checkbox-2').checked == false){
                document.getElementById('144a-checkbox-2').checked = true;
                selectDocument('144a-checkbox-2', '144a-titlePlan', '144a-checkbox-all', '144a Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144aDIV', '144aLIST', 'TitlePlan3LI', '144a_TitlePlanIcon');
            }
            sessionStorage.setItem('144a-checkbox-all', true);
    
        }
        else{
            console.log('Select all for 144a Drakefell Road has been deselected');
            document.getElementById('144a-checkbox-1').checked = false;
            selectDocument('144a-checkbox-1', '144a-register', '144a-checkbox-all', '144a Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144aDIV', '144aLIST', 'Register3LI', '144a_RegisterIcon');
            document.getElementById('144a-checkbox-2').checked = false;
            selectDocument('144a-checkbox-2', '144a-titlePlan', '144a-checkbox-all', '144a Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144aDIV', '144aLIST', 'TitlePlan3LI', '144a_TitlePlanIcon');
    
            sessionStorage.removeItem('144a-checkbox-all');
    
        }
    }
    if(whichSelectAll === '144b'){
        if(document.getElementById('144b-checkbox-all').checked){
            console.log('Select all for 144b Drakefell Road has been selected');
            if(document.getElementById('144b-checkbox-1').checked == false){
                document.getElementById('144b-checkbox-1').checked = true;
                selectDocument('144b-checkbox-1', '144b-register', '144b-checkbox-all', '144b Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144bDIV', '144bLIST', 'Register4LI', '144b_RegisterIcon');
            }
            if(document.getElementById('144b-checkbox-2').checked == false){
                document.getElementById('144b-checkbox-2').checked = true;
                selectDocument('144b-checkbox-2', '144b-titlePlan', '144b-checkbox-all', '144b Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144bDIV', '144bLIST', 'TitlePlan4LI', '144b_TitlePlanIcon');
            }
            sessionStorage.setItem('144b-checkbox-all', true);
    
        }
        else{
            console.log('Select all for 144b Drakefell Road has been deselected');
            document.getElementById('144b-checkbox-1').checked = false;
            selectDocument('144b-checkbox-1', '144b-register', '144b-checkbox-all', '144b Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144bDIV', '144bLIST', 'Register4LI', '144b_RegisterIcon');
            document.getElementById('144b-checkbox-2').checked = false;
            selectDocument('144b-checkbox-2', '144b-titlePlan', '144b-checkbox-all', '144b Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144bDIV', '144bLIST', 'TitlePlan4LI', '144b_TitlePlanIcon');
    
            sessionStorage.removeItem('144b-checkbox-all');
    
        }
    }
    if(whichSelectAll === '144c'){
        if(document.getElementById('144c-checkbox-all').checked){
            console.log('Select all for 144c Drakefell Road has been selected');
            if(document.getElementById('144c-checkbox-1').checked == false){
                document.getElementById('144c-checkbox-1').checked = true;
                selectDocument('144c-checkbox-1', '144c-register', '144c-checkbox-all', '144c Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144cDIV', '144cLIST', 'Register5LI', '144c_RegisterIcon');
            }
            if(document.getElementById('144c-checkbox-2').checked == false){
                document.getElementById('144c-checkbox-2').checked = true;
                selectDocument('144c-checkbox-2', '144c-titlePlan', '144c-checkbox-all', '144c Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144cDIV', '144cLIST', 'TitlePlan5LI', '144c_TitlePlanIcon');
            }
            sessionStorage.setItem('144c-checkbox-all', true);
    
        }
        else{
            console.log('Select all for 144c Drakefell Road has been deselected');
            document.getElementById('144c-checkbox-1').checked = false;
            selectDocument('144c-checkbox-1', '144c-register', '144c-checkbox-all', '144c Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144cDIV', '144cLIST', 'Register5LI', '144c_RegisterIcon');
            document.getElementById('144c-checkbox-2').checked = false;
            selectDocument('144c-checkbox-2', '144c-titlePlan', '144c-checkbox-all', '144c Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144cDIV', '144cLIST', 'TitlePlan5LI', '144c_TitlePlanIcon');
    
            sessionStorage.removeItem('144c-checkbox-all');
    
        }
    }
    if(whichSelectAll === '144d'){
        if(document.getElementById('144d-checkbox-all').checked){
            console.log('Select all for 144d Drakefell Road has been selected');
            if(document.getElementById('144d-checkbox-1').checked == false){
                document.getElementById('144d-checkbox-1').checked = true;
                selectDocument('144d-checkbox-1', '144d-register', '144d-checkbox-all', '144d Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144dDIV', '144dLIST', 'Register6LI', '144d_RegisterIcon');
            }
            if(document.getElementById('144d-checkbox-2').checked == false){
                document.getElementById('144d-checkbox-2').checked = true;
                selectDocument('144d-checkbox-2', '144d-titlePlan', '144d-checkbox-all', '144d Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144dDIV', '144dLIST', 'TitlePlan6LI', '144d_TitlePlanIcon');
            }
            sessionStorage.setItem('144d-checkbox-all', true);
    
        }
        else{
            console.log('Select all for 144d Drakefell Road has been deselected');
            document.getElementById('144d-checkbox-1').checked = false;
            selectDocument('144d-checkbox-1', '144d-register', '144d-checkbox-all', '144d Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Register', '144dDIV', '144dLIST', 'Register6LI', '144d_RegisterIcon');
            document.getElementById('144d-checkbox-2').checked = false;
            selectDocument('144d-checkbox-2', '144d-titlePlan', '144d-checkbox-all', '144d Drakefell Road, Coventry, CV5K2X', 'NN890234', 'Title plan', '144dDIV', '144dLIST', 'TitlePlan6LI', '144d_TitlePlanIcon');
    
            sessionStorage.removeItem('144d-checkbox-all');
    
        }
    }
}

// function CheckoutBasket(checkboxID, TableRow, ParentAccordian, CustomerReference){
//     var current_url = location.pathname;
//     if (current_url == '/officialcopies/V1/basket') {
//         if(sessionStorage.getItem(checkboxID)){
//             document.getElementById(TableRow).style.display = 'table-row';
//             document.getElementById(ParentAccordian).style.display = 'block';
//             document.getElementById(CustomerReference).style.display = 'block';
            
//         }
//         else{
//             var numberDisplayed = 0;
//             var children = document.getElementById(ParentAccordian).childNodes;
//             for (child in children){
//                 if(children[child].style.display == 'table-row'){
//                     numberDisplayed += 1;
//                 }
//             }
//             if(numberDisplayed == 0){
//                 document.getElementById(ParentAccordian).style.display = 'none';
//                 document.getElementById(CustomerReference).style.display = 'none';
    
//             }
//         }
//     }  
// }

var PropertyDocumentsNumber = 0;

function CheckoutBasket(checkboxID, TableRow, ParentAccordian, CustomerReference, TableID, CostperProperty){
    if(sessionStorage.getItem(checkboxID)){
        document.getElementById(TableRow).style.display = 'table-row';
        document.getElementById(ParentAccordian).style.display = 'block';
        document.getElementById(CustomerReference).style.display = 'block';
        PropertyDocumentsNumber += 1;
        var PropertyDocumentsCost = PropertyDocumentsNumber * 3; 
        document.getElementById(CostperProperty).innerHTML = '£' + PropertyDocumentsCost + '.00';
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

