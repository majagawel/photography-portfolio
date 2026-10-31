const photos = {
    krajobrazy: [
        "zdjecia/krajobrazy/krajobrazy (1).JPG",
        "zdjecia/krajobrazy/krajobrazy (2).JPG",
        "zdjecia/krajobrazy/krajobrazy (3).JPG",
        "zdjecia/krajobrazy/krajobrazy (4).JPG",
        "zdjecia/krajobrazy/krajobrazy (5).JPG",
        "zdjecia/krajobrazy/krajobrazy (6).jpg",
        "zdjecia/krajobrazy/krajobrazy (7).jpg",
        "zdjecia/krajobrazy/krajobrazy (8).jpg",
        "zdjecia/krajobrazy/krajobrazy (9).jpg",
        "zdjecia/krajobrazy/krajobrazy (10).jpg",
        "zdjecia/krajobrazy/krajobrazy (11).JPG",
        "zdjecia/krajobrazy/krajobrazy (12).JPG",
        "zdjecia/krajobrazy/krajobrazy (13).JPG",
        "zdjecia/krajobrazy/krajobrazy (14).JPG",
        "zdjecia/krajobrazy/krajobrazy (15).JPG",
        "zdjecia/krajobrazy/krajobrazy (16).JPG",
        "zdjecia/krajobrazy/krajobrazy (17).JPG",
        "zdjecia/krajobrazy/krajobrazy (18).JPG",
        "zdjecia/krajobrazy/krajobrazy (19).JPG",
        "zdjecia/krajobrazy/krajobrazy (20).JPG"
    ],

    ludzie: [
        "zdjecia/ludzie/ludzie (0).JPG",
        "zdjecia/ludzie/ludzie (19).JPG",
        "zdjecia/ludzie/ludzie (2).JPG",

        "zdjecia/ludzie/ludzie (3).JPG",
        "zdjecia/ludzie/ludzie (4).JPG",
        "zdjecia/ludzie/ludzie (18).JPG",
        "zdjecia/ludzie/ludzie (5).JPG",
        "zdjecia/ludzie/ludzie (6).JPG",
        "zdjecia/ludzie/ludzie (7).JPG",
        "zdjecia/ludzie/ludzie (8).JPG",
        "zdjecia/ludzie/ludzie (9).JPG",
        "zdjecia/ludzie/ludzie (10).JPG",
        "zdjecia/ludzie/ludzie (11).JPG",
        "zdjecia/ludzie/ludzie (13).JPG",
        "zdjecia/ludzie/ludzie (14).jpg",
        "zdjecia/ludzie/ludzie (15).JPG",
        "zdjecia/ludzie/ludzie (16).JPG"
    ],

    natura: [
        "zdjecia/natura/natura (1).JPG",
        "zdjecia/natura/natura (2).JPG",
        "zdjecia/natura/natura (3).JPG",
        "zdjecia/natura/natura (4).JPG",
        "zdjecia/natura/natura (5).JPG",
        "zdjecia/natura/natura (6).JPG",
        "zdjecia/natura/natura (7).JPG",
        "zdjecia/natura/natura (8).JPG",
        "zdjecia/natura/natura (9).JPG",
        "zdjecia/natura/natura (10).JPG"
    ],

    wydarzenia: [
        "zdjecia/wydarzenia/wydarzenia (1).JPG",
        "zdjecia/wydarzenia/wydarzenia (2).JPG",
        "zdjecia/wydarzenia/wydarzenia (3).JPG",
        "zdjecia/wydarzenia/wydarzenia (4).JPG",
        "zdjecia/wydarzenia/wydarzenia (5).JPG",
        "zdjecia/wydarzenia/wydarzenia (6).JPG",
        "zdjecia/wydarzenia/wydarzenia (7).JPG",
        "zdjecia/wydarzenia/wydarzenia (8).JPG",
        "zdjecia/wydarzenia/wydarzenia (9).JPG",
        "zdjecia/wydarzenia/wydarzenia (10).JPG",
        "zdjecia/wydarzenia/wydarzenia (11).JPG",
        "zdjecia/wydarzenia/wydarzenia (12).JPG",
        "zdjecia/wydarzenia/wydarzenia (13).JPG",
        "zdjecia/wydarzenia/wydarzenia (14).JPG",
        "zdjecia/wydarzenia/wydarzenia (15).JPG",
        "zdjecia/wydarzenia/wydarzenia (16).JPG",
        "zdjecia/wydarzenia/wydarzenia (17).JPG",
        "zdjecia/wydarzenia/wydarzenia (18).JPG",
        "zdjecia/wydarzenia/wydarzenia (19).JPG",
        "zdjecia/wydarzenia/wydarzenia (20).JPG",
        "zdjecia/wydarzenia/wydarzenia (21).JPG",
        "zdjecia/wydarzenia/wydarzenia (22).JPG",
        "zdjecia/wydarzenia/wydarzenia (23).JPG",
        "zdjecia/wydarzenia/wydarzenia (24).JPG"
    ]
};

const gallery = document.getElementById("gallery");
let currentPhotos = [];
let currentIndex = 0;

// Pobieramy elementy z HTML
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showPhotos(category){
    gallery.innerHTML = "";
    console.log(category);
    

    currentPhotos=[];
     if (category === "all") {
        for (const categoryName in photos) {
            currentPhotos.push(...photos[categoryName]);
        }
    } else {
        currentPhotos = photos[category];
    }

    currentPhotos.forEach((photo, index) =>{

        const img = document.createElement("img");
        
        img.src = photo;
        img.alt = "Zdjęcie";
        img.style.cursor = "pointer";
        
        img.addEventListener("click", () => {
            currentIndex = index;
            lightboxImg.src = currentPhotos[currentIndex];
            lightbox.classList.add("active");
        });
        gallery.appendChild(img);
    });
}

function showNextPhoto(){
    currentIndex = (currentIndex + 1) % currentPhotos.length; 
    lightboxImg.src = currentPhotos[currentIndex];
}

function showPrevPhoto(){
    currentIndex = (currentIndex - 1) % currentPhotos.length; 
    lightboxImg.src = currentPhotos[currentIndex];
}

function closeLightbox(){
    lightbox.classList.remove("active");
}
showPhotos("all");

if (nextBtn) nextBtn.addEventListener("click", showNextPhoto);
if (prevBtn) prevBtn.addEventListener("click", showPrevPhoto);
if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);