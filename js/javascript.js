// logo
  // Cambio logo ogni 20 secondi
  (function() {
    const logo = document.getElementById('logo-mambo');
    if (!logo) {
      console.error('Logo non trovato!');
      return;
    }
    
    const logoGiallo = 'img/logo-giallo.webp';
    const logoRosa = 'img/logo-rosa.webp';
    let isGiallo = true;

    setInterval(function() {
      if (isGiallo) {
        logo.src = logoRosa;
        isGiallo = false;
      } else {
        logo.src = logoGiallo;
        isGiallo = true;
      }
    }, 20000); // 20 secondi
  })();



// Menu a tendina
const menuItems = document.querySelectorAll('[data-dropdown]');
const dropdownBar = document.getElementById('dropdownBar');
let currentDropdown = null;

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownId = item.getAttribute('data-dropdown');
    const dropdownContent = document.getElementById(dropdownId);

    if (currentDropdown === dropdownContent && dropdownBar.classList.contains('show')) {
      dropdownBar.classList.remove('show');
      document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('active'));
      currentDropdown = null;
    } else {
      document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('active'));
      dropdownContent.classList.add('active');
      dropdownBar.classList.add('show');
      currentDropdown = dropdownContent;
    }
  });
});

// Chiudi dropdown quando si clicca su un link interno
document.querySelectorAll('.dropdown-column a').forEach(link => {
  link.addEventListener('click', () => {
    dropdownBar.classList.remove('show');
    document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('active'));
    currentDropdown = null;
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.site-header')) {
    dropdownBar.classList.remove('show');
    document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('active'));
    currentDropdown = null;
  }
});


    // Modal functions
    function openTicketsModal() {
      document.getElementById('ticketsModal').classList.add('show');
    }


    function closeTicketsModal() {
      document.getElementById('ticketsModal').classList.remove('show');
    }


    function openCollaboraModal() {
      document.getElementById('collaboraModal').classList.add('show');
    }


    function closeCollaboraModal() {
      document.getElementById('collaboraModal').classList.remove('show');
    }


    function submitTickets(e) {
      e.preventDefault();
      alert('Richiesta biglietti inviata con successo!');
      closeTicketsModal();
    }


    function submitCollabora(e) {
      e.preventDefault();
      alert('Richiesta di collaborazione inviata con successo!');
      closeCollaboraModal();
    }


    // Chiudi modal cliccando fuori
    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
      }
    }



    // Calendario interattivo
  // Dati degli eventi
const eventi = {
  
    16: {
        data: "16 GENNAIO",
        descrizione: [
            "In occasione di Arte Fiera | Art City 2026 a Casa Morandi vengono esposte alcune opere di Concetto Pozzati (Vo', 1935 - Bologna, 2017) dedicate a Giorgio Morandi.",
            "Il percorso espositivo inizia con il dipinto Da e per Giorgio Morandi realizzato nel 1964 che coincide con l'anno della scomparsa dell'artista bolognese e con la partecipazione di Pozzati alla Biennale di Venezia e a Documenta di Kassel. Il quadro segna il passaggio dall'informale organico a una pittura più oggettuale, con gli oggetti definiti in modo potente sulla tela e la composizione divisa in due parti secondo un'idea di matrice pubblicitaria, particolarmente cara all'artista.",
            "La mostra si conclude con le carte del ciclo A casa mia (2007/2008), intime e malinconiche, in cui gli oggetti della vita quotidiana di Pozzati, pur senza riferimento diretto a Morandi, diventano simboli di memoria e vicinanza personale."
        ],
        immagine: "img/16-gennaio.webp",
        titolo: "Concetto Pozzati. Da e per Morandi a cura di Maura Pozzati Casa Morandi",
        periodo: "17 gennaio - 15 marzo 2026",
        opening: "OPENING: venerdì 16 gennaio dalle h18.00 alle 20.00"
    },
    19: {
        data: "12 FEBBRAIO",
        descrizione: [
            "Quali sono i motivi che portano un progetto sviluppato da un artista a fallire? É possibile parlarne nei termini di un'opera d'arte non realizzata? Ha senso studiare e conservare idee che non sono arrivate a compimento, che si sono – o sono state – interrotte in un determinato momento del loro sviluppo? Questi sono solo alcuni dei tanti interrogativi che il volume L'opera che non c'è. Arte e progetti non realizzati tra XX e XXI secolo (postmediabooks 2025) si pone di fronte a un insieme eterogeneo e perlopiù sommerso di progetti che sono stati pensati e spesso parzialmente sviluppati, ma che non hanno mai trovato un esito definitivo. Rimasti a vari stadi sulla carta, nei cassetti o negli hard disk degli artisti, nascosti in scambi epistolari o in documenti prodotti per candidature a bandi e concorsi, questi progetti racchiudono un enorme potenziale inespresso e altrettante idee di futuro."
        ],
        immagine: "img/12-febbraio.webp",
        titolo: "L'opera che non c'è. Arte e progetti non realizzati tra XX e XXI secolo",
        periodo: "12 febbraio",
        opening: "OPENING: giovedì 12 febbraio dalle h18:00"
    },
    17: {
        data: "24 GENNAIO",
        descrizione: [
           "Una visita alla Collezione Permanente MAMbo e un laboratorio per parlare di cambiamento e trasformazione e cercare di tradurle in immagini. Gli elaborati prodotti, saranno il punto di partenza per un allestimento speciale del Dipartimento trasformativo in occasione di ART CITY BOLOGNA 2026."

        ],
        immagine: "img/24-gennaio.webp",
        titolo: "Art City Bologna",
        periodo: "24 gennaio 2026",
        opening: "OPENING: dalle h16.00 alle 18.00, prenotazione obbligatoria"
    },
    18: {
        data: "1 FEBBRAIO",
        descrizione: [
            "Avete voglia di familiarizzare con le collezioni del MAMbo e non avete prenotato una visita guidata? Nessun problema, se venite a trovarci nei giorni di sabato e di domenica, dalle h 14.30 alle 18.30, trovate attivo un servizio gratuito di mediazione a rotazione in diverse sale del museo e all'interno delle mostre temporanee. Per usufruire del servizio basta rivolversi allo staff museale specializzato riconoscibile dalla spilletta con su scritto \"CHIEDIMI!\"."
        ],
        immagine: "img/1-febbraio.webp",
        titolo: "Chiedimi! Ask me!",
        periodo: "06 dicembre 2025 - 01 febbraio 2026",
        opening: "OPENING: sabato e domenica dalle h14.30 alle 18.30"
    }
};

// Giorno corrente
let giornoCorrente = 16;

// Funzione per aggiornare il contenuto
function aggiornaContenuto() {
    const evento = eventi[giornoCorrente];
    
    // Aggiorna la data nell'header
    document.getElementById('date').textContent = evento.data;
    
    // Aggiorna la descrizione
    const descriptionDiv = document.getElementById('description');
    descriptionDiv.innerHTML = '';
    evento.descrizione.forEach(paragrafo => {
        const p = document.createElement('p');
        p.textContent = paragrafo;
        descriptionDiv.appendChild(p);
    });
    
    // Aggiorna l'immagine e i dettagli
    document.getElementById('image').src = evento.immagine;
    
    // Aggiorna i paragrafi dell'image-box
    const imageBox = document.querySelector('.image-box');
    imageBox.innerHTML = `
        <img id="image" src="${evento.immagine}" alt="${evento.titolo}">
        <p><strong>${evento.titolo}</strong></p>
        <p>${evento.periodo}</p>
        <p>${evento.opening}</p>
    `;
}

// Funzione per andare al giorno precedente
function giornoPrecedente() {
    const giorni = Object.keys(eventi).map(Number).sort((a, b) => a - b);
    const indiceCorrente = giorni.indexOf(giornoCorrente);
    
    if (indiceCorrente > 0) {
        giornoCorrente = giorni[indiceCorrente - 1];
        aggiornaContenuto();
    }
}

// Funzione per andare al giorno successivo
function giornoSuccessivo() {
    const giorni = Object.keys(eventi).map(Number).sort((a, b) => a - b);
    const indiceCorrente = giorni.indexOf(giornoCorrente);
    
    if (indiceCorrente < giorni.length - 1) {
        giornoCorrente = giorni[indiceCorrente + 1];
        aggiornaContenuto();
    }
}

document.addEventListener('DOMContentLoaded', function () {

  // =========================
  // CALENDARIO (solo se esiste)
  // =========================
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const dateEl = document.getElementById('date');
  const descriptionEl = document.getElementById('description');
  const imageBoxEl = document.querySelector('.image-box');

  const calendarioPresente =
    prevBtn && nextBtn && dateEl && descriptionEl && imageBoxEl;

  if (calendarioPresente) {
    prevBtn.addEventListener('click', giornoPrecedente);
    nextBtn.addEventListener('click', giornoSuccessivo);
    aggiornaContenuto();
  }




// =========================
// MAPPA 
// =========================
const mapDiv = document.getElementById('map');
if (mapDiv && typeof L !== 'undefined') {
  const map = L.map('map').setView([44.5025, 11.3369], 16);

  // Tile layer con filtro colore applicato
  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    className: 'map-tiles-pink' // Classe CSS per applicare il filtro
  }).addTo(map);

  L.marker([44.5025, 11.3369])
    .addTo(map)
    .bindPopup('MAMbo – Via Don Minzoni, 14');
}



  // =========================
  // BOOKSHOP
  // =========================

// GESTIONE SLIDER IMMAGINI
const images = [
  {
    src: 'img/edizionimambo.webp',
    caption: 'Bookshop: Nome Libro, Edizione, Data, Autore, Prezzo'
  },
  {
    src: 'img/antoniomasotti.webp',
    caption: 'Antonio Masotti - Collezione Speciale'
  },
  {
    src: 'img/autoritratti.webp',
    caption: 'Autoritratti - Mostra Permanente'
  },
  {
    src: 'img/cataloghi.webp',
    caption: 'Cataloghi - Pubblicazioni MAMbo'
  },
  {
    src: 'img/collectedwriters.webp',
    caption: 'Collected Writers - Edizioni Speciali'
  }
];


let currentImageIndex = 0;


function updateSlider() {
  const sliderImage = document.getElementById('sliderImage');
  const sliderCaption = document.getElementById('sliderCaption');
 
  sliderImage.src = images[currentImageIndex].src;
  sliderCaption.textContent = images[currentImageIndex].caption;
}


function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateSlider();
}


function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateSlider();
}


// Auto-play slider (opzionale)
setInterval(nextImage, 5000);


// GESTIONE MODAL TICKETS
function openTicketsModal() {
  document.getElementById('ticketsModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}


function closeTicketsModal() {
  document.getElementById('ticketsModal').classList.remove('show');
  document.body.style.overflow = 'auto';
}


function submitTickets(event) {
  event.preventDefault();
 
  const name = document.getElementById('ticket-name').value;
  const email = document.getElementById('ticket-email').value;
  const phone = document.getElementById('ticket-phone').value;
  const date = document.getElementById('ticket-date').value;
  const quantity = document.getElementById('ticket-quantity').value;
 
  alert(`Richiesta inviata!\n\nNome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nData: ${date}\nBiglietti: ${quantity}`);
 
  closeTicketsModal();
  event.target.reset();
}









  // =========================
  // MUSEO
  // =========================
// FUNZIONE SEE MORE - Mostra il testo nascosto
function toggleText(element, expand) {
  const hiddenText = expand ? element.previousElementSibling : element.previousElementSibling.previousElementSibling;
  const seeMore = expand ? element : element.previousElementSibling;
  const seeLess = expand ? element.nextElementSibling : element;


  if (expand) {
    hiddenText.style.display = 'inline';
    seeMore.style.display = 'none';
    seeLess.style.display = 'inline';
  } else {
    hiddenText.style.display = 'none';
    seeMore.style.display = 'inline';
    seeLess.style.display = 'none';
  }
}

// MUSEO ARCHIVIO
// FUNZIONE SEE MORE - Mostra il testo nascosto
function toggleText(element, expand) {
  const hiddenText = expand ? element.previousElementSibling : element.previousElementSibling.previousElementSibling;
  const seeMore = expand ? element : element.previousElementSibling;
  const seeLess = expand ? element.nextElementSibling : element;


  if (expand) {
    hiddenText.style.display = 'inline';
    seeMore.style.display = 'none';
    seeLess.style.display = 'inline';
  } else {
    hiddenText.style.display = 'none';
    seeMore.style.display = 'inline';
    seeLess.style.display = 'none';
  }
}


// Added functions to open and close modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}


function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}









  // =========================
  // SERVIZI
  // =========================
      let isPrivacyAccepted = false;


    function openTicketsModal() {
        document.getElementById('ticketsModal').classList.add('show');
    }


    function closeTicketsModal() {
        document.getElementById('ticketsModal').classList.remove('show');
        document.getElementById('ticketsForm').reset();
        isPrivacyAccepted = false;
        document.getElementById('privacyCheckbox').classList.remove('checked');
        document.getElementById('submitBtn').disabled = true;
    }


    function toggleCheckbox() {
        const checkbox = document.getElementById('privacyCheckbox');
        const submitBtn = document.getElementById('submitBtn');
       
        isPrivacyAccepted = !isPrivacyAccepted;
       
        if (isPrivacyAccepted) {
            checkbox.classList.add('checked');
            submitBtn.disabled = false;
        } else {
            checkbox.classList.remove('checked');
            submitBtn.disabled = true;
        }
    }


    function submitTickets(e) {
        e.preventDefault();
       
        if (!isPrivacyAccepted) {
            alert('Devi accettare l\'informativa sulla privacy per continuare.');
            return;
        }
       
        // Chiudi il modal della prenotazione e apri quello del pagamento
        closeTicketsModal();
        setTimeout(() => {
            openPaymentModal();
        }, 300);
    }


    // Chiudi modal cliccando fuori
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            if (event.target.id === 'ticketsModal') {
                closeTicketsModal();
            } else if (event.target.id === 'paymentModal') {
                closePaymentModal();
            }
        }
    }


    // Funzioni per il modal del pagamento
    function openPaymentModal() {
        // Calcola il prezzo totale
        const numTickets = document.getElementById('ticket-quantity').value || 1;
        const prezzoUnitario = 8;
        const totale = numTickets * prezzoUnitario;
       
        // Aggiorna il modal con i dati
        document.getElementById('numBiglietti').textContent = numTickets;
        document.getElementById('prezzoTotale').textContent = '€ ' + totale.toFixed(2).replace('.', ',');
       
        // Apri il modal
        document.getElementById('paymentModal').classList.add('show');
    }


    function closePaymentModal() {
        document.getElementById('paymentModal').classList.remove('show');
        document.getElementById('paymentForm').reset();
        hideAllPaymentDetails();
    }


    // Gestione cambio metodo di pagamento
    document.addEventListener('DOMContentLoaded', function() {
        const paymentMethod = document.getElementById('payment-method');
       
        paymentMethod.addEventListener('change', function() {
            hideAllPaymentDetails();
           
            const selectedMethod = this.value;
           
            if (selectedMethod === 'carta-credito' || selectedMethod === 'carta-debito') {
                document.getElementById('card-details').style.display = 'block';
                makeCardFieldsRequired(true);
            } else if (selectedMethod === 'paypal') {
                document.getElementById('paypal-details').style.display = 'block';
                document.getElementById('paypal-email').required = true;
            } else if (selectedMethod === 'bonifico') {
                document.getElementById('bonifico-details').style.display = 'block';
            } else if (selectedMethod === 'contanti') {
                document.getElementById('contanti-details').style.display = 'block';
            }
        });
    });


    function hideAllPaymentDetails() {
        document.getElementById('card-details').style.display = 'none';
        document.getElementById('paypal-details').style.display = 'none';
        document.getElementById('bonifico-details').style.display = 'none';
        document.getElementById('contanti-details').style.display = 'none';
       
        // Rimuovi required
        makeCardFieldsRequired(false);
        document.getElementById('paypal-email').required = false;
    }


    function makeCardFieldsRequired(isRequired) {
        document.getElementById('card-number').required = isRequired;
        document.getElementById('card-name').required = isRequired;
        document.getElementById('card-expiry').required = isRequired;
        document.getElementById('card-cvv').required = isRequired;
    }


    function submitPayment(e) {
        e.preventDefault();
        alert('FUNZIONE CHIAMATA!'); // PER VEDERE SE ARRIVA QUI
       
        closePaymentModal();
       
       
}


function closeConfirmationModal() {
    document.getElementById('confirmationModal').classList.remove('show');
}


function submitPayment(e) {
    e.preventDefault();


    // Chiude il modal di pagamento
    closePaymentModal();


    // Mostra direttamente il box di conferma
    setTimeout(() => {
        document.getElementById('boxConferma').style.display = 'block';
        document.getElementById('overlayConferma').style.display = 'block';
    }, 300);
}


function chiudiConferma() {
    document.getElementById('boxConferma').style.display = 'none';
    document.getElementById('overlayConferma').style.display = 'none';
}





   // ==================== INVIO RECENSIONE ====================
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.submit-review-btn');
    const textarea = document.querySelector('.review-textarea');
   
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
       
        // Cambia il testo del bottone e aggiungi classe
        submitBtn.textContent = 'INVIATA!';
        submitBtn.classList.add('submitted');
        submitBtn.disabled = true;
       
        // Resetta dopo 3 secondi
        setTimeout(function() {
            submitBtn.textContent = 'INVIA';
            submitBtn.classList.remove('submitted');
            submitBtn.disabled = false;
            textarea.disabled = false;
            textarea.value = '';
        }, 3000);
    });
});
















// Funzione per aprire il modal pagamento confermato
function openPaymentConfirmedModal() {
    const modal = document.getElementById('paymentConfirmedModal');
    if (modal) {
        modal.classList.add('show');
    }
}

// Funzione per chiudere il modal pagamento confermato
function closePaymentConfirmedModal() {
    const modal = document.getElementById('paymentConfirmedModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Modifica la funzione submitPayment esistente
function submitPayment(e) {
    e.preventDefault();
    
    // Chiudi il modal di pagamento
    closePaymentModal();
    
    // Mostra il pop-up di conferma dopo un breve delay
    setTimeout(() => {
        openPaymentConfirmedModal();
    }, 300);
}

















       function toggleMenu() {
            const menu = document.querySelector('.menu-container');
            const overlay = document.querySelector('.overlay');
            const hamburger = document.querySelector('.hamburger');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        function toggleSubmenu(header) {
            const submenu = header.nextElementSibling;
            const isActive = submenu.classList.contains('active');
            
            // Chiudi tutti i submenu
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
            });
            document.querySelectorAll('.menu-header').forEach(h => {
                h.classList.remove('active');
            });
            
            // Apri il submenu cliccato se non era già aperto
            if (!isActive) {
                submenu.classList.add('active');
                header.classList.add('active');
            }
          }
});
