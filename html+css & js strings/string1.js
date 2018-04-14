var str1 = 'first easy string';
var str2 = 'second easy string';
var str3 = 'third easy string';
var str4 = '  fourth    easy    string  ';
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

function LastChar(str1) {
  var str1ToArr = str1.split('');    
  console.log(str1ToArr[str1ToArr.length - 1]);      
}
function NoLastChar(str2) {
  var str2ToArr = str2.split('');
  str2ToArr.splice(-1, 1);
  console.log(str2ToArr.join(''));    
}
function Reversed(str3) {
  var str3ToArr = str3.split('');
  str3ToArr.reverse();
  console.log(str3ToArr.join(''));    
}
function NoSpace(arr4) {
  var iterator = 0;
    //итератор нужен для правильного доступа к индексу массива, т.к. в цикле я буду в том числе менять длину массива
  var str4ToArr = arr4.split('');
  var shiftedArrObj = new Array(str4ToArr.length);  //мне нужно будет куда-то передавать пробелы с начала str4ToArr, т.к. shift должен это передавать 
  for (var i = 0; i < str4ToArr.length * 2; i++) {
    if ((str4ToArr[i - iterator] == ' ') && ((str4ToArr[i - iterator - 1] == ' ') || (str4ToArr[i - iterator + 1] == ' '))) { 
      str4ToArr.splice(i - iterator, 1);
      iterator += 1;
      };
    };
    iterator = 0;
    for (var i = 0; i < str4ToArr.length; i++) {
      if ((str4ToArr[i - iterator] == ' ') && ((i - iterator) == 0)) { 
        shiftedArrObj = str4ToArr.shift(); 
        iterator += 1;    
        }
    } 
    console.log(str4ToArr.join(''));    
}
LastChar(str1);
NoLastChar(str2);
Reversed(str3);
NoSpace(str4);
      



