function selectDocument(checkboxID, tablerowID){

    if (document.getElementById(checkboxID).checked) {

        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'table-row';
    }   
    else{
        var DocumentAdded = document.getElementById(tablerowID);
        DocumentAdded.style.display = 'none';
    }
}

function SelectAll(whichSelectAll){
    console.log('function being called');
    if(whichSelectAll === '27a'){
        if(document.getElementById('27a-checkbox-all').checked){
            console.log('Select all for 27a Drakefell Road has been selected');
            document.getElementById('27a-checkbox-1').checked = true;
            selectDocument('27a-checkbox-1', '27a-register')
            document.getElementById('27a-checkbox-2').checked = true;
            selectDocument('27a-checkbox-2', '27a-titlePlan')
        }
        else{
            console.log('Select all for 27a Drakefell Road has been deselected');
            document.getElementById('27a-checkbox-1').checked = false;
            selectDocument('27a-checkbox-1', '27a-register')
            document.getElementById('27a-checkbox-2').checked = false;
            selectDocument('27a-checkbox-2', '27a-titlePlan')
        }
    }
    if(whichSelectAll === '27b'){
        if(document.getElementById('27b-checkbox-all').checked){
            console.log('Select all for 27b Drakefell Road has been selected');
            document.getElementById('27b-checkbox-1').checked = true;
            selectDocument('27b-checkbox-1', '27b-register');
            document.getElementById('27b-checkbox-2').checked = true;
            selectDocument('27b-checkbox-2', '27b-titlePlan');
        }
        else{
            console.log('Select all for 27b Drakefell Road has been deselected');
            document.getElementById('27b-checkbox-1').checked = false;
            selectDocument('27b-checkbox-1', '27b-register');
            document.getElementById('27b-checkbox-2').checked = false;
            selectDocument('27b-checkbox-2', '27b-titlePlan');
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

