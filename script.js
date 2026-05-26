function calculate(operator){
            const num1=parseFloat(document.getElementById('num1').value);
            const num2=parseFloat(document.getElementById('num2').value);
            let result;

            switch(operator) {
                case '+':
                    result=num1+num2;
                    break;
                case '-':
                    result=num1-num2;
                    break;
                case '*':
                    result=num1*num2;
                    break;
                case '/':
                    result=num1/num2;
                    break;
            }

            document.getElementById('result').innerText='Result: '+result;
        }

        function clearInputs(){
            document.getElementById('num1').value='';
            document.getElementById('num2').value='';
            document.getElementById('result').innerText='Result:';

        }
    
    
