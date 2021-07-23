let url = "https://homwwork2.herokuapp.com/quotes/api/socrates"


chrome.tabs.onCreated.addListener(() => {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
        content = responseData
        chrome.storage.sync.set({content})

        return responseData;
    })
    .catch(error => console.warn(error));
})