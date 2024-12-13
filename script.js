// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
// try {
//     string = eval(string);
//     input.value = string;
// } catch (error) {
//     input.value = "Error";
//     string = "";
// }
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })

// input.addEventListener('input', function (event) {
//     input.value = input.value.replace(/[^0-9+\-*/.]/g, '');
// });



let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Evaluate the expression and update the input box
                string = eval(string);
                input.value = string;
            } catch (error) {
                // In case of any invalid input, show an error
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            // Clear the input
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            // Delete the last character
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // Append the clicked button's value to the string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Allow only valid numeric characters and operators in the input box
input.addEventListener('input', function (event) {
    // Remove any invalid characters (anything other than digits and operators)
    input.value = input.value.replace(/[^0-9+\-*/.]/g, '');
});
