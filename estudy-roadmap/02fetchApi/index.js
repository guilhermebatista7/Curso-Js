const lat = -21.1239236;
const lon = -48.9515662;
const apiKey = '0768d631c0121e29c404c5c63ed97306';

async function getData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data = await resp.json();
        console.log(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

getData();
