// 11.runlengthencode
//     input - "aaacbbddd"
//     output - a3c1b2d3 

// let input = "aaacbbddd"
// let word = ""
// let count = 1
// for(let i=0;i<input.length;i++)
// {



//     if(input[i]==input[i+1]){

//         count++

//     }
//     else{
//     word+=input[i]+count
//     count=1
//   }

// }
// console.log(word)


// 12 "a-bc-def-ghij"-----ouput"j-ih-gfe-dcba


// let input = "a-bc-def-ghij"
// let word = ""
// let result= ""
//  for(let i=0;i<input.length;i++)
//  {
//     if(input[i]=="-"){
//         continue         
//     }
//     else{
//         word=input[i]+word
//     }
//  }

//  word=word.split().reverse().join()
//   for(let i of input)
//   {
//     if(i!="-")
//     {
//         result+=word[0]
//         word=word.slice(1)
//     }
//     else{
//         result+=i
//     }
//   }
// console.log(result)


// 13.longestuniquesubstring
// "abcabcbb"-----"abc"



// let input = "abcabcbb"
// let count = 0
// let word = ""
// for(let i=0;i<input.length;i++)
// {

//         let word1 = ""
//     for(let j=i;j<input.length;j++)
//     {  

//         if(word1.includes(input[j]))
//         {
//             break
//         }
//         else{
//             word1+=input[j]

//         }
//     }
//     if(count<word1.length)
//     {
//         word = word1
//         count = word1.length
//     }
// }
// console.log(word)



// 14. reverse word in sentence
// input = hello world 
// output = world hello

// let input = "helo world of coding"
// let word = input.split(" ").reverse().join(" ")
// console.log(word)



// 15.input= rakshpal bahadur management institute
//   output = r.b.m.institute


// let input = "rakshpal bahadur management institute"
// let word = input.split(" ")
// let j = 0
// let result = ""
// for (let i = 0; i < (word.length - 1); i++) {

//             result+=word[i][j]+"."

// }
// console.log(result+word[word.length-1])


// 16.interleave two strings
//   input = "abc" , "123"
//   output = "a1b2c3"


// let input1 = "abc" 
// let input2 = "123"
// let result = ""

//     for (let i = 0; i < input1.length; i++) {
//       for(let j=i;j<input2.length;j++)
//         {
//             if(i==j)
//             {
//                 result+=input1[i]+input2[j]
//             }
//             else{
//                 continue
//             }
//         }  

//     }


// console.log(result)

// 17 reverse vowel only
// input= "hello"
// output= "holle"


// let w = "hello"
// let ar=""
// let v = ["a","e","i","o","u"]
// let result = ""
// for(let i=0;i<w.length;i++)
// {

//     if(v.includes(w[i]))
//     {
//        ar+=i
//     }
// }
// for(let i=0;i<w.length;i++)
// {
//     if(!ar.includes(i))
//     {
//         result+=w[i]
//     }
//     else{
//              let m1 = ar[0]+ar[1]
//              ar[0] = m1-ar[0]
//              ar[1] = m1-ar[0]
//             result+=w[ar[0]]
//     }
// }
// console.log(result)

// function hello(){
//     console.log("hii")
// }
// hello()

// const hii = function(){
//     console.log("hello")

// }
// console.log(hii)

// const hii=()=>{
//     return "hello"
// }


// (function(){
//     console.log("hello")
// })()


// 1.find number of digits
// let number = 12346
// let count = 0

// while(number!=0)
// {
//  number = Math.floor(number/10)
//     count+=1
// }
// console.log(count)



// 2.find the sum of digits

// let input = 1234
// let sum  = 0
// while(input!=0)
// {
//     sum+=input%10
//     input = Math.floor(input/10)

// }
// console.log(sum)


// 3.check given number is palindrome or not


// let input = 121
// let num1 = 0
// let temp = input
// while(input>0)
// {
//     num1=num1*10+input%10
//     input= Math.floor(input/10)
// }
// if(num1==temp)
// {
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }


// 4.repeatedly sum the digits of a number until a single digit result


// let num = 5456
// let temp = 0
// while (num>9) {
//     temp = 0
//     while (num>0) {
//         temp += num % 10
//         num = Math.floor(num/10)
//     }
//     num = temp
// }
// console.log(num)
// console.log("hello")

// 5.harshad number--divisible by sum of its digits



// let input = 1234
// let sum  = 0
// let temp = input
// while(input!=0)
// {
//     sum+=input%10
//     input = Math.floor(input/10)

// }
// if((temp%sum)==0)
// {
//     console.log(" harshad number")
// }
// else{
//     console.log("not harshad number")
// }
// console.log(sum)


// 6.armstrong number

// let input = 153
// let sum = 0
// let temp = input
// let w = String(input).length
// while(input!=0)
// {
//     sum+=(input%10)**w
//     input = Math.floor(input/10)
// }

// if(temp==sum){
//     console.log("armstrong number")
// }
// else{
//     console.log("not armstrong number")
// }


// 7.find sum of even numbers and odd numbers from given number

// let input = 12345678
// let even = 0
// let odd = 0
// while(input>0)
// {
//     if((input%10)%2==0)
//     {
//         even+=input%10
//         input = Math.floor(input/10)
//     }
//     else{
//         odd+=input%10

//         input = Math.floor(input/10)
//     }
// }
// console.log(even)
// console.log(odd)

// 8. find the given number is prime or not


// function primeno(n) {
//     let count=0
//     if (n == 0 && n == 1) {
//         console.log("not a prime number")
//     }
//     else {
//         for (let i = 2; i < n; i++) {
//             if ((n % i) == 0) {
//                 console.log("not a prime")
//                 break
//             }
//             else count++

//     }
//     }
//     if(!count) console.log("prime number")
// }
// primeno(9)


// 9.factorial number

//  function fact(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return n*fact(n-1)
//     }
// }
// const value = fact(4)
// console.log(value)


// 10.print first 10 prime number
// let w = [1,2,3,4,5,6,7]
// console.log(typeof(w))


// w.forEach((index,value)=>console.log(index,value))
// let changed = w.map((n)=>n*n)
// console.log(changed)


// let sum = w.reduce((some,n)=>some+n)
// console.log(sum)

// let even = w.some((n)=>n%2==0)             //check is their any elemnt is even present in it
// console.log(even)

// let even = w.every((n)=>n%2==0)         //check that every elemnt is even or not
// console.log(even)

// let positive = w.every((n)=>n>0)
// console.log(positive)



// let even = w.filter((n)=>n%2==0)           //printing even number from array
// console.log(even)   


// let greater = w.find((n)=>n>2)                 //it will give only first value which satisfy the condition
// console.log(greater)


// let greater = w.findIndex((n)=>n>2)            //return index value 
//      console.log(greater)

// w.push(6)                                         //adding elemnt at last
// console.log(w)

// w.pop()                                        //removing element from last
// console.log(w)


// w.unshift(0)                                   //adding elemnt at first
// console.log(w)


// let content = ["hello","hii","world"]
//  content.splice(1,1,"bye")                        //removing any elemnt form perticular index
// console.log(content)
// content.splice(1,0,"hlo")                         //adding element to particular index value 
// console.log(content)

// let w1 = [1,2,3,4]
// let w2 = [5,6,7,8]
// let w3 = w1.concat(w2)
// console.log(w3)


// 1.find the missing number from given aaary
// let number = [1,2,4,6,7,8,9]
// let w = []
// for(let i=1;i<9;i++)
// {
//     if(!number.includes(i)){
//         w.push(i)

//     }
// }
// console.log(w)


// 2.find two value from array which sum is equal two given value


// const twosum = (list, sum) => {
//     for (let i = 0; i < list.length; i++) {
//         for (let j = i + 1; j < list.length; j++) {
//             if (list[i] + list[j] == sum) {
//                 return [list[i], list[j]]
//             }
//         }

//     }
//     return []
// }
// console.log(twosum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))


// 3.move all the zeroes at the end of array

// let num1 = [1,2,0,5,0,6,0]
// let num2 = []
// let num3 = []
// for(let i of num1)
// {
//     if(i!=0)
//     {
//         num2.push(i)
//     }
//     else{
//         num3.push(i)
//     }
// }
// console.log(num2.concat(num3))


// 4.find the sub array which has maximum sum

// let input = [2, -4, -4, 6, -5, 0, -3, 5, 9]
// let max_sum = -Infinity
// for (let i = 0; i < input.length; i++) {
//     let sum = 0
//     for (let j = i; j < input.length; j++) {
//         sum += input[j]
//         if (max_sum < sum) {
//             max_sum = sum
//         }
//     }
// }
// console.log(max_sum)

// 5. right rotate by one place
// input = [1,2,3,4] output  = [4,1,2,3]


// let ar1 = [1,2,3,4]
// for(let i=0;i<3;i++)
// {
//     let temp = ar1[i]+ar1[ar1.length-1]
//     ar1[i] = temp - ar1[i]
//     ar1[ar1.length-1] = temp - ar1[i]
// }
// console.log(ar1)

// 6. product of all digit except itself


// let input = [1,2,3,4]
// let arr = []
// for(let i of input)
// {
//       let product = 1
//     for(let j of input)
//     {

//         if(i==j)
//         {
//             continue
//         }
//         else{
//            product = product*j
//         }
//     }
//     arr.push(product)
// }
// console.log(arr)


// 7.greatest lenggth of two sorted array from one unsorted array



// let input = [101,102,103,1,2,3,4,104,105,5,6,7]
// let w = []
// input.sort((a,b)=>(a-b))
// co






//object


// let deatils ={
//   "name":"aman",
//   "age" : 24,
//   "college" : "RBMI"
// }
// console.log(deatils["name"])
// deatils["location"] = "bareilly"
// console.log(deatils["location"])
// console.log(deatils)
// console.log("name" in deatils)
// for(let key in deatils)
// {
//   console.log(deatils[key])
// }
// console.log(Object.keys(deatils))
// console.log(Object.values(deatils))



// 1.number = [1,3,4,3,5,1,3,5,2,23,4,1,2]
// find the frequency of each elemnt from array




// let number = [1,3,4,3,5,1,3,5,2,23,4,1,2]
// let data = {}
// for(let i=0;i<number.length;i++)
// {
//     if(data[number[i]])
//     {
//       data[number[i]] = data[number[i]]+1
//     }
//     else{
//       data[number[i]] = 1
//     }

// }
// console.log(data)


// 2.find first non repeating elemnt from array

//// let number = [1,3,4,3,5,1,3,5,2,23,4,1,2]
// let data = {}
// for(let i=0;i<number.length;i++)
// {
//     if(data[number[i]])
//     {
//       data[number[i]] = data[number[i]]+1
//     }
//     else{
//       data[number[i]] = 1
//     }

// }
// console.log(data)


// for (let key in data) {
//   if (data[key] == 1)
//    {
//     console.log(key)
//     break
//   }
// }



// 3.invert th object (reverse key value pairs)

//  let number = [1,3,4,3,5,1,3,5,2,23,4,1,2]
// let data = {}
// for(let i=0;i<number.length;i++)
// {
//     if(data[number[i]])
//     {
//       data[number[i]] = data[number[i]]+1
//     }
//     else{
//       data[number[i]] = 1
//     }

// }
// console.log(data)
// let reverse = {}

// for(let j in data)
// {
//   reverse[data[j]] = j
// }
// console.log(reverse)


// 4.merge two object
// let data1 = {1:5,2:10,3:15}
// let data2 = {1:7,4:10,3:10}
// let data3 = {}
// for(let i in data1){
//   data3[i] = data1[i]
// }
// for(let i in data2)
// {
//   data3[i]=data3[i] &&  data3[i]+data2[i] ||  data2[i]
// }
// console.log(data3)





// 5. group word by length

// let input = ["apple", "ball", "cat", "dog"]
// let dic = {}
// for (let key in input) {
//   let word = input[key]
//    let len = 0
//   for (let j=0;j<word.length;j++) {

//     len+=1

//   }
//   dic[word] = len
// }
// console.log(dic)


// 6. group word by its first letter



// 7. check two words are anagram or not

// let word1 = "sylent"
// let word2 = "listen"
// const fun=()=>{
//    let merg = {}
//    if(word1.length!==word2.length){
//       return "not anagram"
//    }
//    for(let i of word1){
//       merg[i]=(merg[i]||0)+1
//    }
//    for(let i of word2){
//       if(!merg[i]){
//          return "not  anagram"
//       }
//       else{
//          merg[i]=merg[i]-1
//          if(merg[i]==0){
//             delete merg[i]
//          }
//       }
//    }
//    return "anagram"
// }
// console.log(fun())


// 8. let onj = {a:{b:{c:10}}}
// print value of c


// let input= {a:{b:{c:10}}}
// let path=["a","b","c"]
// let val=input
// for(let key of path){
//    val=val[key]
//    
// }
// console.log(val)




// 9. student = {name:"praveen"
//    marks:{"maths":39,"science":40},"rollno":22
// }

// output = {
//    name:"praveen",
//    "marks.maths":39,
//    "marks.science":40,
//    "rollno:22"
// }







//  practice question
// let input = [16,17,4,3,5,2]
// let leader = []
// let max=-Infinity
// for(let i=input.length-1;i>=0;i--){

//     if(input[i]>max)
//     {
//         leader.push(input[i])

//         max = input[i]
//     }
// }
// console.log(leader)



// let input = [1, 3, -4, 5, -6, -2, 9, 8]
// let max = []
// let min = []
// let result = []
// for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//         max.push(input[i])
//     }
//     else {
//         min.push(input[i])
//     }
// }
// let len = min.length
// if (max.length > min.length) {
//     len = max.length
// }
// for (let i = 0; i < len; i++) {


//     max[i] && result.push(max[i])
//     min[i] && result.push(min[i])

// }

// console.log(result)




// let input = [1,2,3,4]
// let odd = []
// let even = []
// let result = []
// for(let i of input)
// {
//     if(i%2==0)
//     {
//         even.push(i)
//     }
//     else{
//         odd.push(i)
//     }
// }
// result.push(odd)

// result.push(even)
// console.log(result)



// let series = []
// series[0] = 0
// series[1] = 1
// for (let i = 2; i < 10; i++) {

//     series[i]=series[i - 1] + series[i - 2]
// }
// console.log(series)

  




//spread operator

// const arr = [3,5,8,4]

// const arr1 = [3,6,7,8]
// console.log(arr)      //without spread operator
// console.log(...arr,...arr1)    //with spread operator  remove square bracket

  // const arr= [1,2,4,5]
  // const copy = [...arr]   //shalow copy means when we chane something in copy then only copy will change nothign will change arr but without using this spread operator value will change in both array
  // console.log(copy)
  // copy[0] = 9
  // console.log(copy)
  // console.log(arr)




// const arr = [{1:"one",2:"two"},{3:"three",4:"four"}]
// const o = [...arr]
// console.log(o)
// o[1][3]= "hello"
// console.log(o)




//structured clone method

// const arr = [{1:"one",2:"two"},{3:"three",4:"four"}]
// const o = structuredClone(arr)     //same use as spread operator
// console.log(o)
// o[1][3]= "hello"
// console.log(0)


// const fun = ({...one})=>{
//   console.log(one)

// }

// const ar = {1:"one",2:"two"}
// fun(ar)



// const fun = (...one)=>{
//   console.log(one)

// }

// const ar = [2,5,6,7]
// fun(ar)



//desturing with spread operator

// const arr =[2,5,6,7]
// const[one,two,...three] = arr
// console.log(one)
// console.log(two)
// console.log(three)

// const obj = {one:"hello",two:"hii",three:"byy"}
// const{m,...n} = obj
// console.log(m)
// console.log(n)
   

// let a = 3
// let b = 6
// console.log(`a value is ${a} and b value is ${b}`)



// import division, {add} from "./second.js"    //using function which was written in another file
// console.log(add(2,3))
// console.log(division(3,3))