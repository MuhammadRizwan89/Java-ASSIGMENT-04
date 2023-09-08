// / ================CHAPTER NO:17 to 20 (Q NO 1)===================

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let multidimensionalArray = [];

// for (let i = 0; i < 3; i++) {
//   multidimensionalArray[i] = [];

//   for (let j = 0; j < 3; j++) {
//     multidimensionalArray[i][j] = [];

//     for (let k = 0; k < 3; k++) {
//       multidimensionalArray[i][j][k] = null;
//     }
//   }
// }
// console.log(multidimensionalArray)

// / ================CHAPTER NO:17 to 20 (Q NO 2)===================

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let ary = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ]

// for(let i = 0; i < ary.length; i++){
// document.write(ary[i] + "<br>")
// }


// / ================CHAPTER NO:17 to 20 (Q NO 3)===================

// 3. Write a program to print numeric counting from 1 to 10.

// for(let i = 1; i <= 10; i++){
// document.write(i + "<br>")
// }


// / ================CHAPTER NO:17 to 20 (Q NO 4)===================

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.



// let tableNum = parseInt(prompt("Table number enter karein: "));
// let tableLength = parseInt(prompt("Table ki length enter karein: "));

// let tableNum = prompt("Table number enter karein: ");
// let tableLength = prompt("Table ki length enter karein: ");


// console.log(`Table of ${tableNum} for length ${tableLength}:\n`);

// for (let i = 1; i <= tableLength; i++) {
//   let result = tableNum * i;
//   console.log(`${tableNum} x ${i} = ${result}`);
// }

// parseInt ka method is liye lagaya k prompt hamain string main value deta 
// hay ye lagany say jo num haum dain gay wo string k bjay num main ay ga.



// / ================CHAPTER NO:17 to 20 (Q NO 5)===================

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// let fruits = ["apple", "banana", "mango", "orange","strawberry"];


// for(let i = 0; i < fruits.length; i++){
// console.log(fruits[i])
// }

// / ================CHAPTER NO:17 to 20 (Q NO 6)===================

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// console.log("a. Counting:");
// for (let i = 1; i <= 15; i++) {
//   console.log(i);
// }


// console.log("\nb. Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }


// console.log("\nc. Even:");
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }


// console.log("\nd. Odd:");
// for (let i = 1; i <= 19; i += 2) {
//   console.log(i);
// }


// console.log("\ne. Series:");
// for (let k = 1; k <= 10; k++) {
//   console.log(2 * k + "k");
// }


// / ================CHAPTER NO:17 to 20 (Q NO 7)===================

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter an item to select: cake,apple pie,cookie,chips,patties");

// let lowercase = userInput.toLowerCase();

// let found = false;

// for (let i = 0; i < bakeryItems.length; i++) {
//   let lowercaseItem = bakeryItems[i].toLowerCase();
//   if (lowercaseItem === lowercase) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(`${userInput} is available our bakery.`);
// } else {
//   alert(`we are sorry ${userInput} is not available now our bakery  .`);
// }


// / ================CHAPTER NO:17 to 20 (Q NO 8)===================

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// let A = [24, 53, 78, 91, 12];

// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// console.log("The largest number in the array is:", largest);


// / ================CHAPTER NO:17 to 20 (Q NO 9)===================

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// console.log("The smallest number in the array is:", smallest);


// / ================CHAPTER NO:17 to 20 (Q NO 10)===================

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// console.log("Multiples of 5 ranging from 1 to 100:");
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// "modulo operator" Is operator ka istemal do numbers ke beech mein division ke baad remaining value ko calculate karne ke liye hota hai. For example, agar aap a % b likhte hain, to yeh aapko a ko b se divide karke bacha hua baaqi (remaining) value deta hai.


















// / ================CHAPTER NO:21 to 25 (Q NO 1)===================

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// Is program mein:

// prompt ka istemal pehle aur aakhri naam ke liye user se input lene ke liye kiya gaya hai.
// Fir, firstName aur lastName ko combine karke fullName mein rakha jata hai.
// Akhir mein, alert ka istemal karke pura naam ke sath "Khush amdeed" message ko display kiya jata hai.
// Is program ko chalane ke baad, jab user apna pehla aur aakhri naam enter karega, to unko unke puray naam ke sath "Khush amdeed" kehkar greet kiya jayega.


// let firstName = prompt("Apna pehla naam likhein:");
// let lastName = prompt("Apna aakhri naam likhein:");

// let fullName = firstName + " " + lastName;

// alert("Khush amdeed, " + fullName + "!");


// / ================CHAPTER NO:21 to 25 (Q NO 2)===================

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// Is program mein:

// prompt ka istemal user se mobile phone model ke liye input lena ke liye kiya gaya hai.
// Fir, mobileModel variable mein user ka input store kiya jata hai.
// document.write ka istemal input ki length (mobileModel.length) ko browser mein display karne ke liye kiya gaya hai.
// Jab aap is program ko chalayenge, to aapko mobile phone model ke liye input dena hoga, aur phir program aapko input ki length (kitne characters se milta hai) browser mein dikhayega.


// let mobileModel = prompt("Apna pasandeeda mobile phone model likhein:");

// document.write("Aapke pasandeeda mobile phone model ki length: " + mobileModel.length +" Hy");




// / ================CHAPTER NO:21 to 25 (Q NO 3)===================

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// Is program mein:

// word variable mein word "Pakistani" store kiya gaya hai jismein letter "n" ka index dhundhna hai.
// letterToFind variable mein dhundhne wala letter "n" store kiya gaya hai.
// indexOf function ka istemal word string mein letterToFind ko dhundhne ke liye kiya gaya hai. Agar letter mil jata hai to uska index return hota hai, warna -1 return hota hai.
// Fir, if statement se check kiya jata hai ki letter "n" ka index -1 se different hai ya nahi. Agar index -1 nahi hai to word mein letter "n" paya gaya hai aur uska index browser mein display kiya jata hai, warna message "Word "Pakistani" mein letter "n" nahi paya gaya." display kiya jata hai.

// let word = "Pakistani";
// let letterToFind = "n";
// let index = word.indexOf(letterToFind);

// if (index !== -1) {
//   document.write(`Word "${word}" mein letter "${letterToFind}" ka index: ${index}`);
// } else {
//   document.write(`Word "${word}" mein letter "${letterToFind}" nahi paya gaya.`);
// }




// / ================CHAPTER NO:21 to 25 (Q NO 4)===================

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// Is program mein:

// word variable mein word "Hello World" store kiya gaya hai jismein letter "l" ka last index dhundhna hai.
// letterToFind variable mein dhundhne wala letter "l" store kiya gaya hai.
// lastIndexOf function ka istemal word string mein letterToFind ko dhundhne ke liye kiya gaya hai. Agar letter mil jata hai to uska last index return hota hai, warna -1 return hota hai.
// Fir, if statement se check kiya jata hai ki letter "l" ka last index -1 se different hai ya nahi. Agar index -1 nahi hai to word mein letter "l" paya gaya hai aur uska last index browser mein display kiya jata hai, warna message "Word "Hello World" mein letter "l" nahi paya gaya." display kiya jata hai.
// Is program ko chalane ke baad, aapko browser mein result dekha jayega ki letter "l" word "Hello World" mein kis position par last bar hai.



// let word = "Hello World";
// let letterToFind = "l";
// let lastIndex = word.lastIndexOf(letterToFind);

// if (lastIndex !== -1) {
//   document.write(`Word "${word}" mein letter "${letterToFind}" ka last index: ${lastIndex}`);
// } else {
//   document.write(`Word "${word}" mein letter "${letterToFind}" nahi paya gaya.`);
// }




// / ================CHAPTER NO:21 to 25 (Q NO 5)===================

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// Is program mein:

// word variable mein word "Pakistani" store kiya gaya hai.
// indexToFind variable mein dhundhne wala index (yani 3rd index) store kiya gaya hai.
// if statement se pehle check kiya jata hai ki indexToFind valid hai, yani 0 se bada ya equal hai aur word.length se kam hai.
// Agar indexToFind valid hai, to charAt function ka istemal word string se specific index par character nikalne ke liye kiya gaya hai.
// Fir, valid character ko browser mein display kiya jata hai.
// Agar indexToFind valid nahi hai, to message "Word "Pakistani" ke 3rd index par koi character nahi hai." display kiya jata hai.


// let word = "Pakistani";
// let indexToFind = 3;

// if (indexToFind >= 0 && indexToFind < word.length) {
//   let character = word.charAt(indexToFind);
//   document.write(`Word "${word}" ke ${indexToFind} index par wala character: ${character}`);
// } else {
//   document.write(`Word "${word}" ke ${indexToFind} index par koi character nahi hai.`);
// }


// / ================CHAPTER NO:21 to 25 (Q NO 6)===================

// 6. Repeat Q1 using string concat() method.


// Is program mein:

// prompt ka istemal pehle aur aakhri naam ke liye user se input lena ke liye kiya gaya hai.
// Fir, concat() method ka istemal firstName aur lastName strings ko combine karke fullName mein rakha jata hai. Humne " " (ek space) add kiya hai taki pehla aur aakhri naam alag-alag words ke roop mein display ho.
// Akhir mein, alert ka istemal karke pura naam ke sath "Khush amdeed" message ko display kiya jata hai.

// let firstName = prompt("Apna pehla naam likhein:");
// let lastName = prompt("Apna aakhri naam likhein:");

// let fullName = firstName.concat(" ", lastName);

// alert("Khush amdeed, " + fullName + "!");




// / ================CHAPTER NO:21 to 25 (Q NO 7)===================

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// let originalWord = "Hyderabad";
// let modifiedWord = originalWord.replace("Hyder", "Islam");

// document.write(`Original Word: ${originalWord}<br>Modified Word: ${modifiedWord}`);


// Is program mein:

// originalWord variable mein original word "Hyderabad" store kiya gaya hai.
// replace() method ka istemal originalWord mein se "Hyder" ko "Islam" se replace karne ke liye kiya gaya hai.
// Fir, document.write ka istemal karke original aur modified word ko browser mein display kiya jata hai.



// / ================CHAPTER NO:21 to 25 (Q NO 8)===================

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// let message = "Ali and Sami are best friends. They play cricket and football together.";

// let modifiedMessage = message.replace(/and/g, "&");

// document.write(`Original Message: ${message}<br>Modified Message: ${modifiedMessage}`);


// Is program mein:

// message variable mein original message "Ali and Sami are best friends. They play cricket and football together." store kiya gaya hai.
// replace() method ka istemal message mein se "and" ko "&" se replace karne ke liye kiya gaya hai. /and/g regular expression ka istemal kiya gaya hai taki "and" ke sabhi occurrences ko replace kiya ja sake.
// Fir, document.write ka istemal karke original aur modified message ko browser mein display kiya jata hai.





// / ================CHAPTER NO:21 to 25 (Q NO 9)===================

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// let strNumber = "472";
// let numValue = parseInt(strNumber);

// document.write(`Original String: ${strNumber}<br>Converted Number: ${numValue}<br>Type of Original String: ${typeof strNumber}<br>Type of Converted Number: ${typeof numValue}`);


// Is program mein:

// strNumber variable mein original string "472" store kiya gaya hai.
// parseInt() function ka istemal strNumber string ko number mein convert karne ke liye kiya gaya hai.
// Fir, document.write ka istemal karke original string, converted number, original string ka type, aur converted number ka type ko browser mein display kiya jata hai.




// / ================CHAPTER NO:21 to 25 (Q NO 10)===================

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.



// var userInput = prompt("Apna input likhein:");
// var capitalizedInput = userInput.toUpperCase();

// document.write(`Original Input: ${userInput}<br>Capitalized Input: ${capitalizedInput}`);


// Is program mein:

// prompt ka istemal user se input lena ke liye kiya gaya hai.
// toUpperCase() method ka istemal input ko capital letters mein convert karne ke liye kiya gaya hai.
// Fir, document.write ka istemal karke original input aur capitalized input ko browser mein display kiya jata hai.




// / ================CHAPTER NO:21 to 25 (Q NO 11)===================

// 11. Write a program that takes user input. Convert and
// show the input in title case.



// var userInput = prompt("Apna input likhein:");
// var titleCaseInput = toTitleCase(userInput);

// document.write(`Original Input: ${userInput}<br>Title Case Input: ${titleCaseInput}`);

// function toTitleCase(input) {
//   return input.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
//     return match.toUpperCase();
//   });
// }


// Is program mein:

// prompt ka istemal user se input lena ke liye kiya gaya hai.
// toTitleCase function ka istemal input ko Title Case mein convert karne ke liye kiya gaya hai. Is function mein toLowerCase() ka istemal kiya gaya hai taki sab text ko pehle lowercase mein convert kiya ja sake, aur phir replace() ka istemal kiya gaya hai taki har word ka pehla character capital ho.
// Fir, document.write ka istemal karke original input aur Title Case input ko browser mein display kiya jata hai.




// / ================CHAPTER NO:21 to 25 (Q NO 12)===================

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// let num = 35.36;
// let strNum = num.toString();
// let modifiedStr = strNum.replace(".", "");

// document.write(`Original Number: ${num}<br>Modified String: ${modifiedStr}`);


// Is program mein:

// num variable mein original number 35.36 store kiya gaya hai.
// toString() method ka istemal num ko string mein convert karne ke liye kiya gaya hai.
// replace() method ka istemal string strNum mein se dot (.) ko remove karne ke liye kiya gaya hai.
// Fir, document.write ka istemal karke original number aur modified string ko browser mein display kiya jata hai.




// / ================CHAPTER NO:21 to 25 (Q NO 13)===================

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64




// let username = prompt("Apna username likhein:");

// function isSpecialSymbol(char) {
//   let specialSymbols = ['@', '.', ',', '!'];
//   return specialSymbols.includes(char);
// }


// let containsSpecialSymbol = false;
// for (let i = 0; i < username.length; i++) {
//   if (isSpecialSymbol(username.charAt(i))) {
//     containsSpecialSymbol = true;
//     break;
//   }
// }


// if (containsSpecialSymbol) {
//   alert("Aapka username me kisi special symbol ([@ . , !]) ko shamil nahi hona chahiye. Please dubara valid username likhein.");
// } else {
//   alert("Aapka username valid hai. Shukriya!");
// }



// Is program mein:

// prompt ka istemal user se username input lena ke liye kiya gaya hai.
// isSpecialSymbol function mein special symbols ([@ . , !]) ko ek array mein store kiya gaya hai, aur phir check kiya jata hai ki kya diya gaya character special symbol mein shamil hai ya nahi.
// for loop ka istemal username ke har character ko check karne ke liye kiya gaya hai aur agar koi special symbol mil jata hai to containsSpecialSymbol variable ko true kar diya jata hai.
// Fir, if statement se check kiya jata hai ki kya username mein koi special symbol shamil hai ya nahi. Agar special symbol milta hai to user ko dobara valid username enter karne ke liye prompt kiya jata hai, warna username valid hai.



// / ================CHAPTER NO:21 to 25 (Q NO 14)===================

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// Aap JavaScript mein user se input lekar us input ko array mein search kar sakte hain. Ismein hum case-insensitive search bhi karenge, yani user jo bhi capitalization use kare, usse koi farq nahi padega. Yahan ek program diya gaya hai:


// // Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // User se item input lena
// var userInput = prompt("Koi item likhein jise aap search karna chahte hain:");

// // Function to perform case-insensitive search in the array
// function isItemInArray(item, array) {
//   item = item.toLowerCase(); // Convert the input to lowercase
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() === item) {
//       return true; // Item found
//     }
//   }
//   return false; // Item not found
// }

// // Check if the item is in the array and display the result
// if (isItemInArray(userInput, A)) {
//   alert("Yes, '" + userInput + "' is available in the list.");
// } else {
//   alert("No, '" + userInput + "' is not available in the list.");
// }



// Is program mein:

// A variable mein items ka array store kiya gaya hai.
// prompt ka istemal user se item input lena ke liye kiya gaya hai.
// isItemInArray function mein item ko lowercase mein convert kiya jata hai taki case-insensitive search ho sake. Fir, array mein item search kiya jata hai.
// if statement se check kiya jata hai ki kya user ka input array mein maujood hai ya nahi. Agar item mil jata hai to user ko bata diya jata hai ki item maujood hai, warna bata diya jata hai ki item maujood nahi hai.




// / ================CHAPTER NO:21 to 25 (Q NO 15)===================

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// Aap JavaScript mein user se password input lena aur us password ko diye gaye requirements ke hisab se validate karna sakte hain. Agar password requirements ko poora nahi karta, to user se dobara valid password enter karne ke liye kaha jayega. Yahan ek program diya gaya hai jo ye sab kuch implement karta hai:


// // Function to check if a string contains alphabets and numbers
// function containsAlphabetsAndNumbers(password) {
//     var hasAlphabets = false;
//     var hasNumbers = false;
    
//     for (var i = 0; i < password.length; i++) {
//       var charCode = password.charCodeAt(i);
      
//       if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         hasAlphabets = true;
//       }
      
//       if (charCode >= 48 && charCode <= 57) {
//         hasNumbers = true;
//       }
//     }
    
//     return hasAlphabets && hasNumbers;
//   }
  
//   // User se password input lena
//   var password = prompt("Apna password likhein:");
  
//   // Check if the password meets the requirements
//   if (password.length >= 6 && password.charCodeAt(0) < 48 && containsAlphabetsAndNumbers(password)) {
//     alert("Password accepted!");
//   } else {
//     alert("Invalid password. Please enter a valid password.");
//   }
  

//   Is program mein:

// containsAlphabetsAndNumbers function mein password mein alphabets aur numbers hain ya nahi, ye check kiya jata hai.
// prompt ka istemal user se password input lena ke liye kiya gaya hai.
// if statement se check kiya jata hai ki password requirements ko poora karta hai ya nahi. Requirements yeh hain:
// Password kam se kam 6 characters ka hona chahiye (password.length >= 6).
// Password ka pehla character ek number nahi hona chahiye (password.charCodeAt(0) < 48).
// Password mein alphabets aur numbers dono hona chahiye (containsAlphabetsAndNumbers(password)).



// / ================CHAPTER NO:21 to 25 (Q NO 16)===================

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// Aap JavaScript mein split method ka istemal karke ek string ko array mein convert kar sakte hain. Yahan ek program diya gaya hai jismein split method ka istemal kiya gaya hai:


// var university = "University of Karachi";

// // String ko space (' ') ke basis par array mein convert karna
// var universityArray = university.split(' ');

// // Array ke elements ko browser mein display karna
// for (var i = 0; i < universityArray.length; i++) {
//   document.write(`Element ${i}: ${universityArray[i]}<br>`);
// }


// Is program mein:

// university variable mein original string "University of Karachi" store kiya gaya hai.
// split method ka istemal university string ko space (' ') ke basis par array mein convert karne ke liye kiya gaya hai. Isse string ke words alag-alag elements ban jate hain.
// Fir, for loop ka istemal kiya jata hai array ke elements ko browser mein display karne ke liye.





// / ================CHAPTER NO:21 to 25 (Q NO 17)===================

// 17. Write a program to display the last character of a user
// input.


// Aap JavaScript mein user se input lena aur us input ka last character display karne ke liye ek program likh sakte hain. Yahan ek program diya gaya hai:


// // User se input lena
// var userInput = prompt("Apna input likhein:");

// // Input ka last character nikalna
// var lastCharacter = userInput.charAt(userInput.length - 1);

// // Last character ko display karna
// alert("Aapke input ka last character: " + lastCharacter);


// Is program mein:

// prompt ka istemal user se input lena ke liye kiya gaya hai.
// charAt method ka istemal input string ke last character ko nikalne ke liye kiya gaya hai. userInput.length - 1 ka istemal last character ki position ko nikalne ke liye hota hai, kyun ki JavaScript mein string ki indexing 0 se shuru hoti hai.
// Fir, alert ka istemal last character ko user ko dikhane ke liye kiya gaya hai.




// / ================CHAPTER NO:21 to 25 (Q NO 18)===================

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// Aap JavaScript mein diye gaye string mein word "the" kitni baar aya hai, usko count karne ke liye ek program likh sakte hain. Yahan ek program diya gaya hai:


// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";

// // Case-insensitive count of word occurrences in the sentence
// var wordCount = countWordOccurrences(sentence, wordToCount);

// // Function to count word occurrences in a string
// function countWordOccurrences(inputString, word) {
//   var regex = new RegExp("\\b" + word + "\\b", "gi");
//   var matches = inputString.match(regex);
//   return matches ? matches.length : 0;
// }

// // Display the count
// alert("Word '" + wordToCount + "' occurs " + wordCount + " times in the sentence.");


// Is program mein:

// sentence variable mein di gayi string "The quick brown fox jumps over the lazy dog" store ki gayi hai.
// wordToCount variable mein count karna hai word "the" store kiya gaya hai (case-insensitive count karna hai).
// countWordOccurrences function mein di gayi string mein word ki occurrences count ki jati hai. Yahan regular expression ka istemal kiya gaya hai taki case-insensitive search ho aur word boundaries (\b) ka istemal kiya gaya hai taki sirf pura word "the" ko count kiya jaye.
// alert ka istemal count ko user ko display karne ke liye kiya gaya hai.



