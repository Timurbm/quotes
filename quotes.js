window.onload=function(){
    chrome.storage.sync.get("content", ({content}) => {
        document.getElementById("quote").innerHTML = content.quote;
    });

    //Change background
    randomNumber = Math.floor(Math.random() * 5) + 1;
    imageUrl = "images/" + randomNumber + " .jpg"

    document.body.style.backgroundImage="url(" + imageUrl + ")";
}