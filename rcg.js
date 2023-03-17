const getColor = () => {
     // Get the random number and floor se round value
    const randomNum = Math.floor(Math.random() * 16777215);

    const getColorCode = "#" + randomNum.toString(16);
    
    // Set the background color
    document.body.style.backgroundColor = getColorCode;
    // Set the getColorCode value in the <h1>
    document.getElementById("rcg").innerHTML = getColorCode;
    // Copy the getColorCode value to clipboard
    navigator.clipboard.writeText(getColorCode);  
}

//event call on Click Me
document.getElementById("btn").addEventListener(
    "click", 
    getColor
    );

//get color for initial loading..    
getColor();