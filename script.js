document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const prenom = document.getElementById("prenom").value.trim();
            const nom = document.getElementById("nom").value.trim();
            const sujet = document.getElementById("sujet").value.trim();
            const message = document.getElementById("message").value.trim();

            if(!prenom || !nom || !sujet || !message ) {
                return;
            }
            if (message.length < 10) {
                alert("Votre message doit contenir au moins 10 caractères.");
                return;
            }

            alert("Message envoyé avec succès.");
            window.location.href="index.html";
        });
