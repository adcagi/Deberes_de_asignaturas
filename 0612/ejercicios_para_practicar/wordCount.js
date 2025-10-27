let text = "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
// let words  = text.split('that');
// console.log(words.length);
function wordCount(word){

    let count = 0;
    for (let i = 0; i <= text.length - word.length; i++) {
        if (
            text[i] === word[0] &&
            text[i+1] === word[1] &&
            text[i+2] === word[2] &&
            text[i+3] === word[3]
        ) {
            count++;
        }
    }
    return count;
}

console.log(wordCount("that"));