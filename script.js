
let currentDate = new Date().toString();


function showDate (date) {
    document.write(date + '<br>') ;
    
};


showDate(currentDate);



/////////////////////
//2
function greets(fname, lname) {
    document.write('Welcome ' + fname + ' ' + lname + '<br>')
}

greets('Shah', 'Faisal');

//////////////////////////////
//3

function addNumbers (num1, num2) {
    let sum =  num1 + num2;
    return sum;
};
document.write(' <br> The Sum is : : ' + addNumbers(2,2));

/////////////////////////
///4



//////////////////////////
///4


function calculateNumbers (num1, operator,  num2) {

    num1 = Number(num1);
    num2 = Number(num2);

    let result;
    
 switch (operator){
    case '+':
        result = num1 + num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/' :
        result = num1 / num2;       
 }
    console.log(result)
    return result;
}

calculateNumbers(3, '/' ,2);


//////////////////////////////
///7

let firstInput = document.getElementById('firstinput');
let thirdInput = document.getElementById('thirdinput');
let result = document.getElementById('result');

let startNumber = Number(firstInput.value);
let endNumber = Number(thirdInput.value);
for (let i = startNumber; i <= endNumber; i++){
   result.textContent += i;
};


////////////////////////////
/// 11


let sentense = 'the quick brown fox';

function capi (str) {
  let sentenceArray = str.split(' ');

  for (let i = 0; i < sentenceArray.length; i++) {
     
    sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1);  
    
  }


  return sentenceArray.join(' ');
}

console.log(capi(sentense))



///////////////
//12

let longWord = 'Web Development Tutorial';

function findLongWord (para) {

   let paraArray = para.split(' ');
   let long_Word = paraArray[0];

   for (let i = 1; i < paraArray.length; i++) {
    if (paraArray[i].length >  long_Word.length) {
       long_Word = paraArray[i];
    }
   }
   return long_Word
}

console.log(findLongWord(longWord));


//////////////////////////////
// 13

function countLetterOccurrences (text, letter) {
  let count = 0;

  for (let i = 0; i < text.length; i++ ) {

    if ( text[i] === letter) {
      count++;

    }
  } 
    return count;
}

console.log(countLetterOccurrences('jsResourceS.com', 'j'))