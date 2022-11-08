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
