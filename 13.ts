function romanToInt(s: string): number {
  let x: string[] = s.split("");
  let y: number = 0;
  // Classic roman number system. "If I comes before V, add 4 and go forward 2 indeces instead of 1 and so on";
  for (let i: number = 0; i < x.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "X") {
          y += 9;
          i++;
        } else if (s[i + 1] === "V") {
          y += 4;
          i++;
        } else {
          y += 1;
        }
        break;
      case "V":
        y += 5;
        break;
      case "X":
        if (s[i + 1] === "L") {
          y += 40;
          i++;
        } else if (s[i + 1] === "C") {
          y += 90;
          i++;
        } else {
          y += 10;
        }
        break;
      case "L":
        y += 50;
        break;
      case "C":
        if (s[i + 1] === "D") {
          y += 400;
          i++;
        } else if (s[i + 1] === "M") {
          y += 900;
          i++;
        } else {
          y += 100;
        }
        break;
      case "D":
        y += 500;
        break;
      case "M":
        y += 1000;
        break;
    }
  }
  return y;
}

//APPROACH 2: With records to make it leaner. (same run complexity O(n))

function romanToInt2(s: string): number {
  const val: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = val[s[i]];
    const next = i + 1 < s.length ? val[s[i + 1]] : 0;

    if (curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total;
}


