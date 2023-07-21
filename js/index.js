//elements
const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const fullDate = document.querySelector('#fullDate');
const timeFormatLabel = document.querySelector('#timeFormatLabel');
const btnTimeFormat = document.querySelector('#timeFormat');

const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

let am_pm_format = false;

// events
btnTimeFormat.addEventListener('click', toggleTimeFormat);

function formatDigits(digit) {
    return digit < 10 ? `0${digit}` : digit;
}

function toggleTimeFormat() {
    am_pm_format = am_pm_format ? false : true;
    timeFormatLabel.style.display = am_pm_format ? 'block' : 'none';
    btnTimeFormat.textContent = am_pm_format ? 'Formato 24 horas' : 'Formato AM/PM';
}

function getFullDate() {
    let now = new Date();
    let fullDate = `${weekDays[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
    return fullDate;
}

function showTime() {
    setInterval(() => {
        const now = new Date();
        let am_pm = 'AM';
        let h = now.getHours();

        if (h > 12 && am_pm_format) {
            h = h - 12;
            am_pm = 'PM';
        }
        if (h === 0 && am_pm_format) {
            h = h + 12;
        }
        if (h === 12 && am_pm_format) {
            am_pm = 'PM';
        }
        
        hours.textContent = am_pm_format ? h : formatDigits(h);
        minutes.textContent = formatDigits(now.getMinutes());
        seconds.textContent = formatDigits(now.getSeconds());
        fullDate.textContent = getFullDate();
    }, 1000);
}

showTime();