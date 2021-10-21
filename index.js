const textEntry = document.getElementById("text_entry");
const result = document.getElementById("result");

function lowerIt() {
    const text = textEntry.value;
    if (text.length < 1)
        return alert("Please enter a text to convert to be converted to lowercase");
    else if ((text = text.toLowerCase()) === text)
        return alert("Text is already in lowercase");
    result.innerHTML = text;
}

function copyResult() {
    result.select();
    if (result.value === "Waiting for text...")
        return alert("You forgot to add a text!");
    document.execCommand("copy");
    alert("Text copied!");
}
