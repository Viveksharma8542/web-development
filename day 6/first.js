
// console.log(typeof age)
// console.log(age.length)
// console.log(age.toLocaleUpperCase())
// console.log(age.toLocaleLowerCase())
// console.log(age.trim())
// console.log(age.charAt(2))
// console.log(age.indexOf("l"))
// console.log(age.lastIndexOf("n"))
// console.log(age.slice(1,5))
// console.log(age.substring(1,5))
// console.log(age.substr(1,5))
// console.log(age.replace())
// for(let i=0;i<age.length;i++)
// {
//     console.log(age.charAt(i))
// }

// 1.check the word is anagram or not

// let name1 = "listen"
// let name2 = "silent"
// let result = "anagram"
// if (name1.length == name2.length) {
//     for (let i = 0; i < name1.length; i++) {
//         for (let j = 0; j < name2.length; j++) {
//             if (name1.charAt(i) == name2.charAt(j)) {
//                  continue;
//             }

//         }


//     }

// }

// console.log(result)



// 2.find the first non repeating character

// let word = "aabbcde"
// for(let i of word)
// {
//     if(word.indexOf(i)==word.lastIndexOf(i))
//     {
//         console.log(i)
//         break;
//     }
// }


// 3.find most frequent letter in string

// let word1 = "kviekv"
// let word2 = ""
// let max_count = 0
// let max_letter = ""
// for(let i of word1)
// {
//     let count = 0
//     let letter = ""
//     for(let j of word1)
//     {
//         if(i==j){
//               count = count + 1
//               letter = j
//         }
//     }
//     if(count>max_count)
//     {
//         max_count = count
//         max_letter = letter 
//     }
// }
// console.log(max_letter)
// console.log(max_count)


// 4.remove all digits from a string
//   let letter = "bhdyu374gf"
//   let arr = ""
//   for(let i of letter)
//   {
//     if(i.toLocaleLowerCase()==i.toLocaleUpperCase())
//     {
//         continue
//     }
//     else{
//         arr+=i
//     }
//   }
//   console.log(arr)

// 
// 5.count number of WebTransportDatagramDuplexStream(without .split())
// let input = "i am with you"
// let count = 0
// for(let i of input)
// {
//     if(i!=" "){
//         continue
//     }
//     else{
//         count +=1
//     }
// }
// console.log(count+1)

// 6.replace all the space with dashed
// method 1

// let input = "hello world again"
// let string = ""
// for (let i of input) {
//     if (i != " ") {
//         string += i
//     }
//     else{
//         string = string+"-"
//     }
// }
// console.log(string)

// method 2

// let word = "hello world again"
// console.log(word.replaceAll(" ","-"))


// 7.check one string is rotation of another
// let w1 = "get"
// let w2 = "etg"
// let w3 = w1 + w1
// console.log(w3.includes(w2))



// 8.count palindromes
// let input1 = "aaa"
// let count = 0
// for(let  i=0;i<input1.length;i++)
// {
//     for(let j=i;j<input1.length;j++)
//     {
//         if(input1.slice(i,j)==input1.slice(i,j).split().reverse().join())
//         {
//             count++
//         }
//     }
// }
// console.log(count)


// 9.remove all the adjacent duplicacy
let word = "aabbacce"
let word1 = ""
for(let i=0;i<word.length;i++)
{
    if(word1 && word[i]==word1[word1.length-1]){
        word1 = word1.slice(0,word1.length-1)
    }
    else word1+=word[i]
}
console.log(word1)
