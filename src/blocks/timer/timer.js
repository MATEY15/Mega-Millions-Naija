const timer = (id, deadline) => {
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000 * 60 * 60)) % 24),
            days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {
        const timer = selector,
            days = timer.querySelector(".timer-days"),
            hours = timer.querySelector(".timer-hours"),
            minutes = timer.querySelector(".timer-minutes"),
            seconds = timer.querySelector(".timer-seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            // days.textContent = t.days + " days";
            days.textContent = t.days + " " + declOfNum(t.days, [' day', ' days', ' days']) + " | ";
            hours.textContent = " " + addZero(t.hours) + " :";
            minutes.textContent = addZero(t.minutes) + " :";
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

let timerElement = document.querySelectorAll('.timer');

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 === 1) {
        return text_forms[0];
    }
    return text_forms[2];
}

// Delete
let daysToAdd = 2;
let dateDeadline = new Date()
dateDeadline.setDate(dateDeadline.getDate() + daysToAdd);
// End Delete

for(let i = 0; i < timerElement.length; i++){
    let currentElement = timerElement[i];
    let deadline = timerElement[i].getAttribute('data-date'); // Get time deadline
    timer(currentElement, dateDeadline);
}