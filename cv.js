const fout = document.getElementById('filot');

function formValidate(){
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const number = document.getElementById('number').value;
    const mail = document.getElementById('mail').value;

    const pattern1 = /^[A-Za-z ,.'-]+$/;
    const pattern2 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\/0-9]*$/;
    const pattern4 = /@\w+\.\w{2,3}(\.\w{2,3})?/;


    /*if(pattern1.test(fname !== true)){
        alert('No numbers are allowed here! Input your first name(s).');
        return false;
    }
    

    if(pattern1.test(mname !== true)){
        alert('No numbers are allowed here! Input your middle name(s).');
        return false;
    }

    if(pattern1.test(lname !== true)){
        alert('No numbers are allowed here! Input your last name.');
        return false;
    }

    if(pattern2.test(number !==true)){
        alert('Enter your correct phone number with no letters!');
        return false;
    }
    if (pattern4.test(mail !==true) ){
        alert('Please enter a valid format for your email. e.g. abcd@ghrt.com');
        return false;
    }*/
    
    if(pattern1.test(fname)){
        fname.innerHTML=" ";
    }
    else{
        alert('No numbers are allowed here! Input your first name(s).');
        return false;
    }


    if(pattern1.test(mname)){
        mname.innerHTML=" ";
    }
    else{
        alert('No numbers are allowed here! Input your middle name(s).');
        return false;
    }
    

    if(pattern1.test(lname)){
        lname.innerHTML=" ";
    }
    else{
        alert('No numbers are allowed here! Input your last name.');
        return false;
    }


    if(pattern2.test(number)){
        number.innerHTML=" ";
    }
    else{
        alert('Enter your correct phone number with no letters!');
        return false;
    }


    if(pattern4.test(mail)){
        mail.innerHTML=" ";
    }
    else{
        alert('Please enter a valid format for your email. e.g. abcd@ghrt.com');
        return false;
    }


    return formValidate();
}

function submitToCv(){
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const number = document.getElementById('number').value;
    const mail = document.getElementById('mail').value;
    const PO = document.getElementById('PO').value;


    localStorage.setItem("NAME",fname);
    localStorage.setItem("MNAME", mname);
    localStorage.setItem("LNAME", lname);
    localStorage.setItem("NUMBER", number);
    localStorage.setItem("MAIL", mail);
    localStorage.setItem("PO", PO);

    return;
}

window.addEventListener('load' ,() => {

    const fname = localStorage.getItem('NAME');
    const mname = localStorage.getItem('MNAME');
    const lname = localStorage.getItem('LNAME');
    const PO = localStorage.getItem('PO');
    const number = localStorage.getItem('NUMBER');
    const mail = localStorage.getItem('MAIL');

    document.getElementById('cv-name').innerHTML = fname +" " + mname +" " + lname;
    document.getElementById('cv-address').innerHTML = PO;
    document.getElementById('cv-number').innerHTML = number;
    document.getElementById('cv-mail').innerHTML = mail;
})



