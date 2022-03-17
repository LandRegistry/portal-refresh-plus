
var basketQuantity = 0;

function anythingInBasket(){
    if(basketQuantity === 0){
        document.getElementById("basketCounter").style.display = 'none';
    }
    if(basketQuantity >= 1){
        document.getElementById("basketCounter").style.display = 'block';
    }
}

function selectDocument(checkboxID, tablerowID, selectAllID, Address){

    if (document.getElementById(checkboxID).checked) {

        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'table-row';
        basketQuantity += 1;
        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = basketQuantity;

        var div_basketItem = document.createElement("div");
        div_basketItem.setAttribute("class", "basketItem");
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
        console.log('hello');
        var tn_address = document.createTextNode(Address);
        var address = document.createElement("p");
        address.setAttribute("style", "font-size:16px; margin-bottom:0px;");
        address.appendChild(tn_address);
        div_basketAddress.appendChild(address);

        var div_basketTitle = document.createElement("div");
        div_basketTitle.setAttribute("class", "basketTitle");
        var tn_titleNumber = document.createTextNode("Title number");
        var titleNumber = document.createElement("p");
        titleNumber.setAttribute("style", "font-size:16px; margin-bottom:0px; font-weight:700;");
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
        div_basketSection2.appendChild(documentsUL);


        // if statement should end here

        var documentLI = document.createElement("LI");
        var documentName = document.createElement("span");
        documentName.setAttribute("class", "basketItemSelected");
        var documentNameText = document.createTextNode("Register");
        documentName.appendChild(documentNameText);
        var removeIcon = document.createElement("span");
        removeIcon.setAttribute("class", "basketItemRemove");
        var documentPrice = document.createElement("span");
        documentPrice.setAttribute("class", "basketItemPrice");
        var documentPriceText = document.createTextNode("£3.00");
        documentPrice.appendChild(documentPriceText);
        documentLI.appendChild(documentName);
        documentLI.appendChild(removeIcon);
        documentLI.appendChild(documentPrice);
        documentsUL.appendChild(documentLI);



    }   
    else{
        console.log('code executing');
        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'none';
        basketQuantity -= 1;
        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = basketQuantity;
        if (document.getElementById(selectAllID).checked) {
            document.getElementById(selectAllID).checked = false;
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
                selectDocument('27a-checkbox-1', '27a-register', '27a-checkbox-all');
            }
            if(document.getElementById('27a-checkbox-2').checked == false){
                document.getElementById('27a-checkbox-2').checked = true;
                selectDocument('27a-checkbox-2', '27a-titlePlan', '27a-checkbox-all');
            }
        }
        else{
            // console.log('Select all for 27a Drakefell Road has been deselected');
            document.getElementById('27a-checkbox-1').checked = false;
            document.getElementById('27a-checkbox-2').checked = false;
            selectDocument('27a-checkbox-2', '27a-titlePlan', '27a-checkbox-all');
            selectDocument('27a-checkbox-1', '27a-register', '27a-checkbox-all');
        }
    }
    if(whichSelectAll === '27b'){
        if(document.getElementById('27b-checkbox-all').checked){
            console.log('Select all for 27b Drakefell Road has been selected');
            if(document.getElementById('27b-checkbox-1').checked == false){
                document.getElementById('27b-checkbox-1').checked = true;
                selectDocument('27b-checkbox-1', '27b-register', '27b-checkbox-all');
            }
            if(document.getElementById('27b-checkbox-2').checked == false){
                document.getElementById('27b-checkbox-2').checked = true;
                selectDocument('27b-checkbox-2', '27b-titlePlan', '27b-checkbox-all');
            }
        }
        else{
            console.log('Select all for 27b Drakefell Road has been deselected');
            document.getElementById('27b-checkbox-1').checked = false;
            selectDocument('27b-checkbox-1', '27b-register', '27b-checkbox-all');
            document.getElementById('27b-checkbox-2').checked = false;
            selectDocument('27b-checkbox-2', '27b-titlePlan', '27b-checkbox-all');
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

