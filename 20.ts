/* EXPL: The idea is simple. What you need to know is a bitwise AND. With this simple operation you can find out whether aninteger is odd or even.  The mechanism for the algorithm is also quite easy: 
 First if it is an opening character like ( [ { push it onto a stack. If it is a closing character check if the top element in the stack matches. If not it cannot possibly be a valid string. TS works faster
 when worked with charcodes rather than strings since they are cheaper to compare and manage. At the end if the stack is empty the stringis valid.*/
function isValid(s: string): boolean {

  const n = s.length;
  if (n & 1) return false;

  const stack = new Array<number>(n);
  let top = 0;

  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i);

    if (c === 40) stack[top++] = 41;       
    else if (c === 91) stack[top++] = 93;  
    else if (c === 123) stack[top++] = 125;
    else {
      if (top === 0 || stack[--top] !== c) return false;
    }
  }

  return top === 0;
}

console.log(isValid("()[]{}")); // true