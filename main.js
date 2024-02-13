const monday = {
    temperature: [-2, -3, -4, 0],
    feelsLike: [-4, -6, -8, -2],
    pressure: [750, 750, 749, 747],
    humidity: [88, 79, 55, 78],
    windSpeed: [6.2, 6.6, 7.6, 2.7],
    precipitation: [43, 50, 81, 72],
    time: ["7:20", "16:30"]
};

const tuesday = {
    temperature: [-3, -2, 3, 0],
    feelsLike: [-5, -4, 1, -2],
    pressure: [749, 750, 739, 745],
    humidity: [50, 60, 55, 71],
    windSpeed: [5, 4.2, 6.2, 4.7],
    precipitation: [85, 60, 29, 30],
    time: ["7:23", "16:33"]
    
};
const wednesday = {
    temperature: [-1, -2, 3, 0],
    feelsLike: [-4, -4, 0, -4],
    pressure: [740, 745, 747, 750],
    humidity: [90,70, 76, 78],
    windSpeed: [6.2, 6.9, 7.2, 5.7],
    precipitation: [13, 30, 59, 81],
    time: ["7:25", "16:35"]
};
const thursday = {
    temperature: [-1, -1, 3, 2],
    feelsLike: [-4, -4, -1, 1],
    pressure: [750, 750, 749, 747],
    humidity: [84, 70, 65, 48],
    windSpeed: [6.2, 6.6, 7.6, 2.7],
    precipitation: [43, 53, 52, 20],
    time: ["7:28", "16:38"]
};
const friday = {
    temperature: [1, 0, 3, -1],
    feelsLike: [-1, 0, 1, -5],
    pressure: [740, 745, 746, 747],
    humidity: [98, 79, 70, 78],
    windSpeed: [6, 6, 7.2, 3.7],
    precipitation: [5, 25, 40, 55],
    time: ["7:30", "16:40"],
};
const saturday = {
    temperature: [-2, -2, 1, 0],
    feelsLike: [-4, -6, 0, 0],
    pressure: [750, 750, 749, 747],
    humidity: [59, 69, 45, 58],
    windSpeed: [3.2, 2.6, 5.6, 4.7],
    precipitation: [43, 20, 39, 20],
    time: ["7:32", "16:42"]
};
const sunday = {
    temperature: [1, 2, 4, 2],
    feelsLike: [0, 0, 2, 1],
    pressure: [749, 750, 749, 747],
    humidity: [50, 59, 55, 78],
    windSpeed: [8.2, 9, 8.6, 10.7],
    precipitation: [80, 89, 92, 90],
    time: ["7:35", "16:45"]
};

// Кнопки, блоки и функции для открытия ячеек
btn1.classList.add("none");
div1.classList.add("show");

for (let i = 0; i < 7; i++) {
    const btn = document.getElementById(`btn${i + 1}`);
    const div = document.getElementById(`div${i + 1}`);

    btn.addEventListener('click', () => {
        div.classList.add("show");
        btn.classList.add("none");

        for (let j = 0; j < 7; j++) {
            if (j !== i) {
                const otherDiv = document.getElementById(`div${j + 1}`);
                const otherBtn = document.getElementById(`btn${j + 1}`);
                otherDiv.classList.remove("show");
                otherBtn.classList.remove("none");
            }
        }
    });
}


// Массивы значений из объектов
const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(let i = 0; i < days.length; i++) {
    // Заполняем минимальную и максимальную температуру в ячейках дней
    const minTemp = document.getElementById(`minTemp${dayNames[i]}`);
    minTemp.textContent = Math.min(...days[i].temperature) + "°";

    const maxTemp = document.getElementById(`maxTemp${dayNames[i]}`);
    maxTemp.textContent = Math.max(...days[i].temperature) + "°";

    
    // Заполнение времени солнца и иконок
    const timeSunrise = document.getElementById(`timeSunrise${dayNames[i]}`);
    const timeSunset = document.getElementById(`timeSunset${dayNames[i]}`);

    timeSunrise.textContent = days[i].time[0];
    timeSunset.textContent = days[i].time[1]; 
    
    const iconWeather = document.getElementById(`iconWeather${dayNames[i]}`);
    const minTemperature = Math.min(...days[i].temperature);

    if (minTemperature < -2) {
         iconWeather.src = "assets/img/snow.png";
    } else if (minTemperature >= -1 && minTemperature < 2) {
        iconWeather.src = "assets/img/cloudy.png";
    } else {
        iconWeather.src = "assets/img/sun.png";
    }


    // Заполнение таблицы
    const values = [
        days[i].temperature,
        days[i].feelsLike,
        days[i].pressure,
        days[i].humidity,
        days[i].windSpeed,
        days[i].precipitation
    ];

    const selectors = [
        `#temp${i + 1}`,
        `#feels${i + 1}`,
        `#pressure${i + 1}`,
        `#humidity${i + 1}`,
        `#wind${i + 1}`,
        `#precipitation${i + 1}`
    ];

    selectors.forEach((selector, index) => {
        const cells = document.querySelectorAll(selector);
        values[index].forEach((value, j) => {
            if (selector.includes('temp') || selector.includes('feels')) {
                cells[j].textContent = value + '°';
            } else {
                cells[j].textContent = value;
            }
        });
    });


    // Заполнение иконок в таблице
    const precipitations = days[i].precipitation; // Получаем массив температур для дня
    const table = document.getElementById(`weatherTable${i + 1}`);
    const icons = table.querySelectorAll('.iconWeather');

    icons.forEach((icon, index) => {
        const precipitation = precipitations[index]; // Получаем температуру для текущей ячейки

        if (precipitation > 80) {
            icon.src = "assets/img/snow.png";
        } else if (precipitation > 50 && precipitation < 80) {
            icon.src = "assets/img/cloudy.png";
        } else {
            icon.src = "assets/img/sun.png";
        }
    });
}
