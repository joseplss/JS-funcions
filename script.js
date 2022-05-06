function ex1(){
    console.log('==========excericse 1=========')
    //Excerise 1 print odds continues//
    let input = parseInt(prompt('test'));
    if (input < 0){
        console.log('test');
    }
    else{
        console.log('output of all odd numbers in' + input);
        for ( var i = 0; i <= input ; i++ ){
            if ( i % 2 === 1){
                console.log(i);
                             }
                                           }
        }
}
function ex2(){
    console.log('==========excericse 2=========')
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    if (name == "" || age=="" || isNaN(age)) {
        alert("Invalid inputs");
    }
    else{
        let aboveSixteen = 'Congrats ' + name + ' you can drive!';
        let belowSixteen = 'Sorry ' + name + 'but you need to wait until you are 16';
        if (age < 16){
            console.log(belowSixteen);
            alert(belowSixteen);
        }
        else{
            console.log(aboveSixteen);
            alert(aboveSixteen);
        }
    }
}