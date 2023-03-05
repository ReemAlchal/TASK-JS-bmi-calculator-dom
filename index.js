function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let bmi= weight/(height*2*0.01)

  // if (bmi <18.5){
  //   alert("Underweight");
  // }
  // else if(bmi>18.5 && bmi<24.9){
  //   alert("Healthy Weight");
  // }
  // else if(bmi>25.0 && bmi<29.0){
  //   alert("Over Weight");
  // }
  // else if(bmi>30.0){
  //   alert("Obesity");
  // }

if (19<=age && age<=24){
  if(19<=bmi<=24){
    alert("Normal");
  }
  else if( bmi<19){
    alert("Underweight");
  }
  else{
    alert("Overweight");
  }
}
else if (25<=age && age<=34){
  if(20<=bmi<=25){
    alert("Normal");
  }
  else if( bmi<20){
    alert("Underweight");
  }
  else{
    alert("Overweight");
  }
}
else if (35<=age && age<=44){
  if(21<=bmi<=26){
    alert("Normal")
  }
  else if( bmi<21){
    alert("Underweight")
  }
  else{
    alert("Overweight")
  }
}
else if (45<=age && age<=54){
  if(22<=bmi<=27){
    alert("Normal")
  }
  else if( bmi<22){
    alert("Underweight")
  }
  else{
    alert("Overweight")
  }
}
else if (55<=age && age<=64){
  if(23<=bmi<=28){
    alert("Normal")
  }
  else if( bmi<23){
    alert("Underweight")
  }
  else{
    alert("Overweight")
  }
}
else if(age>64){
  if(24<=bmi<=29){
    alert("Normal")
  }
  else if( bmi<24){
    alert("Underweight")
  }
  else{
    alert("Overweight")
  }
}
else{
  alert("please enter age bigger than 18") 
}
}

