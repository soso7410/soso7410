document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var score = 0; 

    var questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        var selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            if (index === 0 && selectedAnswer.value === "3") {
                score++; 
            }
            if (index === 1 && selectedAnswer.value === "1") {
                score++; 
            }
            if (index === 2 && selectedAnswer.value === "2") {
                score++; 
            }
            if (index === 3 && selectedAnswer.value === "4") {
                score++;
            }
            if (index === 4 && selectedAnswer.value === "1") {
                score++; 
            }
        }
    });


    alert("Votre score est de : " + score + " sur 5.");
    document.title = "Score : " + score + " sur 5";

         return false; // Empêche l'envoi du formulaire et évite l'ajout de caractères inattendus à l'URL
    });
