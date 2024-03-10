const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://ba5tkd7a7xrnnjd2luzqyzo6oy0fmcab.lambda-url.ap-south-1.on.aws"
    );
    let data = await response.json();
    counter.innerHTML = `views: ${data}`;
}
updateCounter();
