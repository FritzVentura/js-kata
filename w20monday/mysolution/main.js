"use strict";

// Find ID'et og integrér i klikfunktion
document.getElementById('cookie').addEventListener('click', function () {

// registrer nuværende class og pak ind i if

    if (this.classList.contains('bounceInLeft')) {
// fjern class - gør plads til ny klasse
     this.classList.remove('bounceInLeft');

// tilføj class - slide ud
     this.classList.add('bounceOutRight');

// angiv succes!
     alert("Now you've got milk and cookies! Yum!");
    }

  });