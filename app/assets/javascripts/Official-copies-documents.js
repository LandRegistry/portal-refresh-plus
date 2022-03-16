
var basketQuantity = 0;

function anythingInBasket(){
    if(basketQuantity === 0){
        document.getElementById("basketCounter").style.display = 'none';
    }
    if(basketQuantity >= 1){
        document.getElementById("basketCounter").style.display = 'block';
    }
}

function selectDocument(checkboxID, tablerowID, selectAllID){

    if (document.getElementById(checkboxID).checked) {

        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'table-row';
        basketQuantity += 1;
        anythingInBasket();
        document.getElementById("basketCounter").innerHTML = basketQuantity;

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

