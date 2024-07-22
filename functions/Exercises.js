// Rectangles
//makeLine(size) function

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  };

  console.log(makeLine(5));

//makeSquare(size) function

// function makeSquare(size) {
//     let square = "";
//     for (let i = 0; i < size; i++) {
//         square += "#".repeat(size);
//         if (i !== size - 1) {
//             square += "\n";
//         }
//     }
//     return square;
// };

// console.log(makeSquare(5));

console.log(" "); //for clarity between functions when printing

//makeRectangle(width, height) function

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
};
console.log(makeRectangle(2, 3));


console.log(" "); //for clarity between functions when printing

//Rewrite makeSquare to use makeRectangle

function makeSquare(size) {
    return makeRectangle(size, size);
}
console.log(makeSquare(6, 6));

console.log(" "); //for clarity between functions when printing

//makeDownwardStairs(height) function

function makeDownwardStairs(height) {
  let stairs = "";
  for (let i = 0; i < height; i++) {
    stairs += makeLine(i + 1) + "\n";
  }
  return stairs.slice(0, -1);
};

console.log(makeDownwardStairs(5));

console.log(" "); //for clarity between functions when printing

//makeSpaceLine(numSpaces, numChars) function

function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    for (let j = 0; j < numChars; j++) {
        line += '#';
    }
    for (let k = 0; k < numSpaces; k++) {
        line += ' ';
    }
    return line;
};

console.log(makeSpaceLine(3, 5));

console.log(" "); //for clarity between functions when printing

//makeIsoscelesTriangle(height) function

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  };

  console.log(makeIsoscelesTriangle(5));

  console.log(" "); //for clarity between functions when printing


  //makeDiamond(height) function

  function makeDiamond(height) {
    if (height % 2 === 0) {
        height++; 
    }

    let diamond = '';

    for (let i = 1; i <= height; i += 2) {
        const spaces = ' '.repeat((height - i) / 2);
        const hashtags = '#'.repeat(i);
        diamond += spaces + hashtags + '\n';
    }

    for (let i = height - 2; i >= 1; i -= 2) {
        const spaces = ' '.repeat((height - i) / 2);
        const hashtags = '#'.repeat(i);
        diamond += spaces + hashtags + '\n';
    }

    return diamond;
}

  console.log(makeDiamond(5));