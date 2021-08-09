function Calculate(){
    var h=document.getElementById('heigh').value;
    var w=document.getElementById('weigh').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    if(bmio>=18.5&&bmio<=24.9){
    document.getElementById('result').innerHTML=`Your BMI is Normal${bmio}`;
    }
    else if(bmio<18.5){
        document.getElementById('result').innerHTML=`${bmio}`;

    }
    else if(bmi>30){
        document.getElementById('result').innerHTML=` ${bmio}`;
    }
}
