export default function Timer() {
    const body = document.querySelector('body');
    let seconds = 0;
    let minutes = 0;
    let interval;

    function startStop() {
        if (interval) {
            clearInterval(interval);
        } else {
            interval = setInterval(updateTimer, 1000);
        }
    }

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 40) {
            clearInterval(interval);
            alert('40 minut minęło!');
        }

        const timer = document.querySelector('#timer');
        timer.class = 'timer';
        timer.innerHTML = formatTime(minutes) + ':' + formatTime(seconds);
        body.append(timer);
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    startStop();
}
