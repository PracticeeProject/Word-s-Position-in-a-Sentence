
// =================================================
//  কিভাবে Sentence এর মধ্যে একটি Word এর Position 
//  নির্ণয় করা যায় ।।
// =================================================
const sentenccee = "hello guys im Programmer Sumit 5 Lorem ipsum dolor, sit amet consectetur sumit adipisicing elit. Eaque impedit tempora ullam Sumit culpa autem maxime labore eos. Repellat ratione odit nobis voluptate optio sumit voluptatum laborum quaerat, Sumit dolores aliquid culpa nam!";

let positions = sentenccee.search(/sumit/i); //comment:If you change the name sumit it able to give valu result
if( positions >= 0 ){
    console.log(positions);
}
else{
    console.log("The word is not found in sentence!");
};

// =================================================
//         Same Solving By Ternary Oparator
// =================================================

const setenccee = "hello guys im Programmer Sumit 5 Lorem ipsum dolor, sit amet consectetur sumit adipisicing elit. Eaque impedit tempora ullam Sumit culpa autem maxime labore eos. Repellat ratione odit nobis voluptate optio sumit voluptatum laborum quaerat, Sumit dolores aliquid culpa nam!";

let position = setenccee.search(/sumit/i); //comment:If you change the name sumit it able to give valu result

let rresult = position >= 0 ? position : "The word is not found in sentence!"

console.log(rresult);



