document.addEventListener('DOMContentLoaded', () => {
    const startContainer = document.getElementById('start-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const startBtn = document.getElementById('start-btn');
    const usernameInput = document.getElementById('username');
    const songSelect = document.getElementById('song-select');
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const nextBtn = document.getElementById('next-btn');
    const timerElement = document.getElementById('timer');
    const resultNameElement = document.getElementById('result-name');
    const finalScoreElement = document.getElementById('final-score');
    const correctCountElement = document.getElementById('correct-count');
    const wrongCountElement = document.getElementById('wrong-count');
    const timeTakenElement = document.getElementById('time-taken');
    const resultDetailsElement = document.getElementById('result-details');
    const restartBtn = document.getElementById('restart-btn');
    const printBtn = document.getElementById('print-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let shuffledQuestions = [];
    let startTime;
    let timerInterval;
    let audio = new Audio();
    let playlist = [];
    let currentSongIndex = 0;

    // Fungsi untuk mengacak array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Fungsi untuk memulai atau mengulang kuis
    function startQuiz() {
        const username = usernameInput.value.trim();
        if (username === '') {
            alert('Mohon masukkan nama kamu!');
            return;
        }

        startContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');

        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];

        // Acak semua soal terlebih dahulu, lalu ambil 50 soal pertama
        const allShuffledQuestions = shuffleArray([...questions]);
        shuffledQuestions = allShuffledQuestions.slice(0, 50);

        // Atur waktu mulai dan timer
        startTime = new Date();
        startTimer(25 * 60); // 25 menit dalam detik

        // Atur dan putar lagu
        setupAudio();

        nextBtn.textContent = 'Lanjut';
        showQuestion();
    }

    // Fungsi untuk timer
    function startTimer(duration) {
        let timer = duration;
        timerInterval = setInterval(() => {
            let minutes = parseInt(timer / 60, 10);
            let seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerElement.textContent = `Sisa Waktu: ${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(timerInterval);
                alert("Waktu habis! Kuis dihentikan.");
                showResult(true); // Kirim parameter waktu habis
            }
        }, 1000);
    }

    // Fungsi untuk memutar audio
    function setupAudio() {
        const selectedSong = songSelect.value;
        if (selectedSong === 'no-audio') {
            audio.src = '';
            audio.pause();
            playlist = [];
            return;
        }

        playlist = [selectedSong];
        const allSongs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
        const otherSongs = allSongs.filter(song => song !== selectedSong);
        playlist.push(...otherSongs);
        
        currentSongIndex = 0;
        audio.src = `audio/${playlist[currentSongIndex]}`;
        audio.play().catch(e => console.error("Error playing audio:", e));
        
        audio.onended = () => {
            currentSongIndex = (currentSongIndex + 1) % playlist.length;
            audio.src = `audio/${playlist[currentSongIndex]}`;
            audio.play().catch(e => console.error("Error playing audio:", e));
        };
    }

    // Fungsi untuk menampilkan pertanyaan
    function showQuestion() {
        resetState();
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

        const shuffledOptions = shuffleArray([...currentQuestion.options]);
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.dataset.answer = option;
            button.addEventListener('click', selectAnswer);
            optionsElement.appendChild(button);
        });
    }

    // Fungsi untuk mereset tampilan opsi jawaban
    function resetState() {
        while (optionsElement.firstChild) {
            optionsElement.removeChild(optionsElement.firstChild);
        }
        nextBtn.classList.add('hidden');
    }

    // Fungsi saat pengguna memilih jawaban (DIKOREKSI)
    function selectAnswer(e) {
        const selectedOption = e.target;
        const userAnswer = selectedOption.dataset.answer;
        const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;

        const isCorrect = (userAnswer === correctAnswer);
        userAnswers.push({
            question: shuffledQuestions[currentQuestionIndex].question,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        });

        // Kunci semua opsi jawaban untuk mencegah perubahan
        Array.from(optionsElement.children).forEach(button => {
            button.removeEventListener('click', selectAnswer);
        });

        nextBtn.classList.remove('hidden');
    }

    // Fungsi untuk menampilkan hasil kuis
    function showResult(isTimeUp = false) {
        clearInterval(timerInterval);
        audio.pause();
        
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        const endTime = new Date();
        const timeDiff = Math.round((endTime - startTime) / 1000); // Waktu dalam detik
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        const formattedTime = `${minutes} menit ${seconds} detik`;

        // Hitung skor di akhir kuis
        score = 0;
        const correctCount = userAnswers.filter(ans => {
            if (ans.isCorrect) {
                score += 2;
                return true;
            }
            return false;
        }).length;
        const wrongCount = userAnswers.length - correctCount;

        resultNameElement.textContent = usernameInput.value.trim();
        finalScoreElement.textContent = `${score} dari ${shuffledQuestions.length * 2}`;
        correctCountElement.textContent = correctCount;
        wrongCountElement.textContent = wrongCount;
        timeTakenElement.textContent = isTimeUp ? "Waktu Habis" : formattedTime;
        
        displayResultDetails();
    }

    // Fungsi untuk menampilkan detail hasil
    function displayResultDetails() {
        resultDetailsElement.innerHTML = '';
        userAnswers.forEach((answer, index) => {
            const detailItem = document.createElement('p');
            if (answer.isCorrect) {
                detailItem.classList.add('correct-result');
                detailItem.innerHTML = `✅ **Soal No. ${index + 1} (Benar)**: ${answer.question}<br> Jawaban kamu: ${answer.userAnswer}`;
            } else {
                detailItem.classList.add('wrong-result');
                detailItem.innerHTML = `❌ **Soal No. ${index + 1} (Salah)**: ${answer.question}<br> Jawaban kamu: ${answer.userAnswer}<br> Jawaban benar: ${answer.correctAnswer}`;
            }
            resultDetailsElement.appendChild(detailItem);
        });
    }

    // Event Listener untuk tombol
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
    restartBtn.addEventListener('click', () => {
        startContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        usernameInput.value = '';
        audio.pause();
        audio.currentTime = 0;
    });
    printBtn.addEventListener('click', () => {
        window.print();
    });
});