function tick() {
            seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, "0");
            if (+seconds.textContent === 60) {
                minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, "0");
                seconds.textContent = "00";
            }
        }

        let intervalId,
            minutes = document.getElementById("minutes"),
            seconds = document.getElementById("seconds"),
            starts = document.getElementById("starts"),
            pause = document.getElementById("pause"),
            reset = document.getElementById("reset");

        starts.addEventListener("click", start_click);
        pause.addEventListener("click", pause_click)
        reset.addEventListener("click", reset_click);
        pause.disabled = true;
        reset.disabled = true;
        minutes.nextSibling.textContent = ":";

        function start_click() {
            intervalId = setInterval(tick, 1000);
            starts.disabled = true;
            pause.disabled = false;
            reset.disabled = false;
        }
        function pause_click() {
            clearInterval(intervalId);
            starts.disabled = false;
            pause.disabled = true;
            reset.disabled = true;
            document.getElementById("starts").classList.remove("disabled");
        }
        function reset_click() {
            clearInterval(intervalId);
            minutes.textContent = "00";
            seconds.textContent = "00";
            starts.disabled = false;
            pause.disabled = true;
            reset.disabled = true;
        }