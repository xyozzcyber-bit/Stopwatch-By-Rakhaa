const display = document.getElementById("Jam");
let startTime;
let elapsedTime = 0;
let timerInterval;

// Fungsi untuk memformat total milidetik menjadi HH:MM:SS.mmm
function format(time) {
    const totalMS = time;
    const jam = Math.floor(totalMS / (1000 * 60 * 60));
    const menit = Math.floor((totalMS % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((totalMS % (1000 * 60)) / 1000);
    const milidetik = totalMS % 1000;
    
    // Fungsi untuk menambahkan nol di depan (padding)
    const pad = (num, size) => ('000' + num).slice(size * -1);
    
    return `${pad(jam, 2)}:${pad(menit, 2)}:${pad(detik, 2)}.${pad(milidetik, 3)}`;
}

// Fungsi untuk memperbarui tampilan waktu
function updatedisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = format(elapsedTime);
}

// Fungsi untuk memulai stopwatch
function mulai() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updatedisplay, 10);
    }
}

// Fungsi untuk menghentikan stopwatch
function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Fungsi untuk mengatur ulang stopwatch
function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.textContent = "00:00:00.000";
}
