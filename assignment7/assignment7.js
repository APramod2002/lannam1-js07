document.getElementById("add-button").onclick = function(){

    let name = document.getElementById("name").value;
    let reg_exp_name = /^.{2,}$/;

    if (name == ""){
        alert("No name Provided.");
        return;
    }
    else if(!reg_exp_name.test(name)){
        alert("At least 2 chars of name required.");
        return;
    }

    let email = document.getElementById("email").value;
    let reg_exp_email = /@/ ; 

    if(email == ""){
        alert("No email provided.");
        return;
    }
    else if(!reg_exp_email.test(email)){
        alert("Invalid email: should contain @");
        return;
    }

    let msg = document.getElementById("message");
    msg.innerHTML = `Added: ${name} : ${email}`;

    let tbody = document.getElementsByTagName("tbody")[0];

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger");
    button.textContent = "Remove";
    button.onclick = function(){
        tr.remove();
    }

    td1.innerHTML = `${name}`;
    td2.innerHTML = `${email}`;
    td3.appendChild(button);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
};

document.getElementById("search-button").onclick = function(){
    let text = document.getElementById("search-text").value.toLowerCase();
    let table = document.getElementsByTagName("table")[0];
    let tbody = document.getElementsByTagName("tbody")[0];
    let data = "";
    let msg_box = document.getElementById("message");
    msg_box.innerHTML = "";
            

    if(!text){
        alert("No search key provided.");
        return;
    }

    for (let i=0; i<tbody.rows.length; i++){
        let row = tbody.rows[i];
        let name_in_table = row.cells[0].textContent.toLowerCase();
        let name_in_table_o = row.cells[0].textContent;
        let email_in_table = row.cells[1].textContent.toLowerCase();
        let email_in_table_o = row.cells[1].textContent;
        
        if(name_in_table === text || email_in_table === text ){
            data = `name: ${name_in_table_o}, email: ${email_in_table_o}`;
            msg_box.innerHTML += `Found => [${data}] <br>`;
        }
        else{
            msg_box.innerHTML = `${text} Not Found!`;
        }
    }
};