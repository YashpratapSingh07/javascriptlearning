const form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`please give a valid height${height}`;
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`please give a valid weight${weight}`;
    }
    else{
        const bmi =(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6){
            //console.log("you are in underweight");
            results.innerHTML=`you are Underweight  ${bmi}`;
        }
        else if(bmi>18.6&&bmi<24.9){
            results.innerHTML=`you are fit  ${bmi}`;
            //console.log("you are in Fit");
            
        }
        else if(bmi>24.9){
            results.innerHTML=`you are Overweight  ${bmi}`;
            //console.log("you are in overweight");
            
        }
    }
});