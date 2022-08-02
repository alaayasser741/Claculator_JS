let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerHTML = "";
        } else if (item.id == "backspace") {
            let string = display.innerHTML.toString();
            display.innerHTML = string.substr(0, string.length - 1);
        } else if (display.innerHTML != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);//eval Can make opration on string 
        }else if (display.innerHTML == "" && item.id == "equal") {
            display.innerText = 'Empty !';
            setTimeout(()=>(display.innerHTML = ''),2000)
        }else{
            display.innerHTML += item.id;
        }
    };
});
let themeToggleBtn = document.querySelector('.theme-toggler');
let calculator = document.querySelector('.calculator');
let toggleIcon = document.querySelector('.togger-icon');
let isDark = true;
themeToggleBtn.onclick = ()=>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark != isDark;
}

