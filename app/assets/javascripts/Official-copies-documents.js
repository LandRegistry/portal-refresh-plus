function ARegister(){
    if (document.getElementById('27a-checkbox-1').checked) {

        var RegisterAdded = document.getElementById('27a-register');
        RegisterAdded.style.display = 'table-row';
    }   
    else{
        var RegisterAdded = document.getElementById('27a-register');
        RegisterAdded.style.display = 'none';
    }
}

function ATitlePlan(){
    console.log('function is executing');
    if (document.getElementById('27a-checkbox-2').checked) {

        var TitlePlanAdded = document.getElementById('27a-titlePlan');
        TitlePlanAdded.style.display = 'table-row';
    }   
    else{
        var TitlePlanAdded = document.getElementById('27a-titlePlan');
        TitlePlanAdded.style.display = 'none';
    }
}

function ACheckAll(){
    console.log('function is executing');
    if (document.getElementById('27a-checkbox-all').checked) {
        document.getElementById('27a-checkbox-1').checked = true;
        var RegisterAdded = document.getElementById('27a-register');
        RegisterAdded.style.display = 'table-row';
        
        document.getElementById('27a-checkbox-2').checked = true;
        var TitlePlanAdded = document.getElementById('27a-titlePlan');
        TitlePlanAdded.style.display = 'table-row';
    }   
    else{
        document.getElementById('27a-checkbox-1').checked = false;
        var TitlePlanAdded = document.getElementById('27a-titlePlan');
        TitlePlanAdded.style.display = 'none';
        document.getElementById('27a-checkbox-2').checked = false;
        var RegisterAdded = document.getElementById('27a-register');
        RegisterAdded.style.display = 'none';
    }
}

