function generateEmails(){
    document.getElementById("emails").value = '';
    var domainName = document.getElementById("domain").value;
    var generateCount = document.getElementById("amount").value;
    var amountMade = 0;
    while(amountMade < generateCount){
        randomString = makeid(8);
        var email = randomString + "@" + domainName;
        document.getElementById("emails").value += email + "\n";
        amountMade++;
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}