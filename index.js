function lowerIt() {
    let text = document.getElementById("text_entry").value;
    if (text.length < 1) {
        alert("Please enter text to convert to lowercase");
        return;
    }
    if (text.toLowerCase() === text) {
        alert("Text is already lowercase");
        return;
    }
    let result = text.toLowerCase();
    document.getElementById("result").innerHTML = result;
}

function copyResult() {
    var copyText = document.getElementById("result");
    copyText.select();
    if (copyText.value === "Waiting for text...") {
        alert("You need to lowercase some text first");
        return;
    }
    document.execCommand("copy");
    alert("Text copied!");
}