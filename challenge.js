document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector('#counter');
    let counterNumber = parseInt(counter.innerText);

    const add = document.getElementById('+');
    const minus = document.getElementById('-');

    let pauseButton = document.querySelector('#pause');

    let likes = document.querySelector('.likes');
    const heart = document.getElementById('<3')

    let leaveAComment = document.querySelector(`div.comments`);
    let commentForm = document.querySelector('#comment-form')

// I should see the timer increment every second once the page has loaded.
    // extract value of counter, and convert to integer
    function startTimer() {
        return setInterval(function () {
            counter.innerText = counterNumber += 1;
        }, 1000);
    }

    let timer = startTimer(); 
    
    // DONE I can manually increment and decrement the counter as I like.
    function addCounter() { 
        counterNumber += 1;
        document.querySelector('#counter').innerText = counterNumber;
    }

    function minusCounter() { 
        counterNumber -= 1;
        document.querySelector('#counter').innerText = counterNumber;
    }

    add.addEventListener('click', addCounter)

    minus.addEventListener('click', minusCounter);

// I can like an individual number of the counter. 
    // I should see the appropriate number of likes associated with that particular number.
    
    function addLike(){
        let existingLi = document.querySelector(`.num${counterNumber}`)
        if (existingLi) {
            let currentLikes = parseInt(existingLi.innerText.split(" ")[4])
            currentLikes ++
            existingLi.innerText = counterNumber + " has been liked " + currentLikes + " times."
        } else {
            let li = document.createElement('li');
            li.setAttribute('class', `num${counterNumber}`)
            li.innerText = currentNumber + " has been liked 1 time."
            likes.append(li)
        }
    }

    heart.addEventListener('click', addLike);

// DONE I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

// I can pause the game, which should disable all buttons except the pause button. 
    // The pause button should then show the text "resume."

    function addComment(event) {
        event.preventDefault();
        let newComment = event.target.comment.value;
        let newCommentpara = document.createElement('p');
        newCommentpara.innerText = newComment;
        leaveAComment.appendChild(newCommentpara);
    }

    commentForm.addEventListener('submit', addComment);

    function pause() {
        pauseButton.innerText = 'resume';
        pauseButton.style.backgroundColor = 'red';
        // stop the automatic counter
        clearInterval(timer);
        // disable buttons
        add.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
    };

    function resume() {
        pauseButton.innerText = 'pause';
        pauseButton.style.backgroundColor = 'white';
        // RESUME THE AUTOMATIC COUNTER
        timer = startTimer()
        // enable buttons
        add.disabled = false;
        minus.disabled = false;
        heart.disabled = false;

    }

    function pauseButtonCheck(event){
        // check what current status of pause button is, and call functions accordingly: 
        pauseButton.innerText === 'pause' ? pause() : resume();
    }

    pauseButton.addEventListener('click', pauseButtonCheck);
});



