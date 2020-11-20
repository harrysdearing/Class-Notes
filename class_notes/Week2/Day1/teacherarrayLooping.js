let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i])
};

for (let i = 0; i < alphabet.length; i++){
    if (i % 2 === 0){
        console.log(alphabet[i]);
    }   else {
        console.log('the index is odd');
    }
};

let arr = []

for (let i = 0; i < alphabet.length; i++){
    if (i % 2 === 0){
        arr.push(alphabet[i]);
        console.log(arr);
    }   else {
        console.log(`the index ${i} is an odd number`);
    }
};