const yesFirstBtn = document.getElementById("yes-first");
const noFirstBtn = document.getElementById("no-first");
const yesSecondBtn = document.getElementById("yes-second");
const noSecondBtn = document.getElementById("no-second");

const firstGif = document.getElementById("first-gif");
const secondGif = document.getElementById("second-gif");

const firstQuestion = document.getElementById("first-question");
const secondQuestion = document.getElementById("second-question");

const firstMessage = document.getElementById("first-message");
const firstMessageText = document.getElementById("first-message-text");
const seeMoreBtn = document.getElementById("see-more");
const nextPageBtn = document.getElementById("next-page");
const secondMessage = document.getElementById("second-message");
const fixDateBtn = document.getElementById("fix-date");

let noClickCount = 0;

// First Question "Yes" interaction
yesFirstBtn.addEventListener("click", () => {
    firstMessage.style.display = 'block';
    yesFirstBtn.style.display = 'none';
    noFirstBtn.style.display = 'none';
    firstGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// First Question "No" button movement
noFirstBtn.addEventListener("mouseover", () => {
    moveButtonRandomly(noFirstBtn, firstQuestion);
});

// "See more" button on the first page
seeMoreBtn.addEventListener("click", () => {
    firstMessageText.textContent = "ndrb mok chi nhar ghir ziiiid";
    seeMoreBtn.style.display = 'none';
    nextPageBtn.style.display = 'block';
});

// "Next page" button interaction
nextPageBtn.addEventListener("click", () => {
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'block';
});

// Second Question "No" button movement
noSecondBtn.addEventListener("mouseover", () => {
    moveButtonRandomly(noSecondBtn, secondQuestion);
});

noSecondBtn.addEventListener("click", () => {
    noClickCount++;
    if (noClickCount >= 3) {
        secondMessage.querySelector('p').textContent = "Ya lkolayibah galt lik lae pfoo 3lik";
        secondMessage.querySelector('p').classList.add("huge-message");
        secondMessage.style.display = 'block';
        noClickCount = 0;
    }
});

// Second Question "Yes" interaction
yesSecondBtn.addEventListener("click", () => {
    secondMessage.querySelector('p').textContent = "Hakak limaaaak, nghibk rbk tu vois";
    secondMessage.querySelector('p').classList.add("huge-message");
    secondMessage.style.display = 'block';
    fixDateBtn.style.display = 'block';
    yesSecondBtn.style.display = 'none';
    noSecondBtn.style.display = 'none';
    secondGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Fix a date button interaction
fixDateBtn.addEventListener("click", () => {
    window.location.href = "https://wa.me/+212602005534?text=Love%20you%20a%20hbiba%20Aliiii,%20Touhchteeeeeeeeeeeeeeeeek,%20a%20date%20a%20Alouchiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
});

// Helper function to move buttons randomly within their container
function moveButtonRandomly(button, container) {
    const wrapperRect = container.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - btnRect.width;
    const maxY = wrapperRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}
