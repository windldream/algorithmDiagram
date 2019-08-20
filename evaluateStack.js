function evaluate(str) {  
    let opsStack = [], valsStack = [];

    for (let i = 0; i < str.length; i++) {
        let s = str[i];
        switch (s) {
            case '(':
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                opsStack.push(s);
                break;
            case ')':
                let op = opsStack.pop();
                let val = valsStack.pop();

                switch (op) {
                    case '+':
                        val = valsStack.pop() + val;
                        break;
                    case '-':
                        val = valsStack.pop() - val;
                        break;
                    case '*':
                        val = valsStack.pop() * val;
                        break;
                    case '/':
                        val = valsStack.pop() / val;
                        break;
                    default:
                        break;
                }
                valsStack.push(val)
                break;
            default:
                valsStack.push(Number(s));
                break;
        }
    }
    
    console.log(valsStack.pop());
}

evaluate('(1+((2+3)*(4*5))')