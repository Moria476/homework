//task1
let count=0;
let star="*";
do{
console.log(star);
star+="*";
count++;
}while(count < 5);

//task2

const pattern=(char, int) =>{
let count = 1;
let word=char;
while(count < int)
{
    word+="-"+char;
    count++;
    };
    console.log(word);
}
pattern("$", 5);
pattern("$", 17);
pattern("@", 3);

//task3

const evenNumbersOnly = (array) =>{
    arrayEven=[];
    for(i=0; i<array.length; i++){
    if(array[i]%2===0&&array[i]!==0&&array[i]!==null){
    arrayEven.push(array[i]);
    }
}
    const result = arrayEven.filter(value => JSON.stringify(value) !== '[]');
    return result;
}


console.log(evenNumbersOnly([1, 2, 3, 4, 5, 6, 7])); 
console.log(evenNumbersOnly(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"])); 
console.log(evenNumbersOnly([{}, {}, [], [], "abc", 2])); 
console.log(evenNumbersOnly(["a", null, true, undefined, {}, []])); 