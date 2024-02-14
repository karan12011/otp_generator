function generateOTP(){
  let value = document.getElementsByName("types");
  let selected ;
  let otp = '';

  for(let i = 0; i < value.length; i++){
    if(value[i].checked){
      selected = (value[i].value);
    }
  }
  
  if(selected == 4){
    for(let j = 1; j <= 4; j++){
      otp += Math.floor(Math.random() * 10);
    }
  }

  if(selected == 6){
    for(let j = 1; j <= 6; j++){
      otp += Math.floor(Math.random() * 10);
    }
  }

  document.getElementById('otp').innerHTML = otp;
}

