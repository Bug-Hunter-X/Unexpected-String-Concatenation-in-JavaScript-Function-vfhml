function foo(a,b){return a+b;}console.log(foo(1, "2")); //Output: 12
This happens because JavaScript performs string concatenation instead of addition when one of the operands is a string.