

// let colorpicker = document.getElementById("colorpicker");
// let btn = document.getElementById("btn")


// colorpicker.onblur=()=>{
//     btn.style.backgroundColor=colorpicker.value;
// }

let colorpicker = document.getElementById("colorpicker");

colorpicker.oninput = () => {
    // Change the background color of the page
    document.body.style.backgroundColor = colorpicker.value;
}
