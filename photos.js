const photos = {
    krajobrazy: [
        "zdjecia/krajobrazy/krajobrazy (1).webp",
        "zdjecia/krajobrazy/krajobrazy (2).webp",
        "zdjecia/krajobrazy/krajobrazy (3).webp",
        "zdjecia/krajobrazy/krajobrazy (4).webp",
        "zdjecia/krajobrazy/krajobrazy (5).webp",
        "zdjecia/krajobrazy/krajobrazy (6).webp",
        "zdjecia/krajobrazy/krajobrazy (7).webp",
        "zdjecia/krajobrazy/krajobrazy (8).webp",
        "zdjecia/krajobrazy/krajobrazy (9).webp",
        "zdjecia/krajobrazy/krajobrazy (10).webp",
        "zdjecia/krajobrazy/krajobrazy (11).webp",
        "zdjecia/krajobrazy/krajobrazy (12).webp",
        "zdjecia/krajobrazy/krajobrazy (13).webp",
        "zdjecia/krajobrazy/krajobrazy (14).webp",
        "zdjecia/krajobrazy/krajobrazy (15).webp",
        "zdjecia/krajobrazy/krajobrazy (16).webp",
        "zdjecia/krajobrazy/krajobrazy (17).webp",
        "zdjecia/krajobrazy/krajobrazy (18).webp",
        "zdjecia/krajobrazy/krajobrazy (19).webp",
        "zdjecia/krajobrazy/krajobrazy (20).webp"
    ],

    ludzie: [
        "zdjecia/ludzie/ludzie (0).webp",
        "zdjecia/ludzie/ludzie (19).webp",
        "zdjecia/ludzie/ludzie (2).webp",

        "zdjecia/ludzie/ludzie (3).webp",
        "zdjecia/ludzie/ludzie (4).webp",
        "zdjecia/ludzie/ludzie (18).webp",
        "zdjecia/ludzie/ludzie (5).webp",
        "zdjecia/ludzie/ludzie (6).webp",
        "zdjecia/ludzie/ludzie (7).webp",
        "zdjecia/ludzie/ludzie (8).webp",
        "zdjecia/ludzie/ludzie (9).webp",
        "zdjecia/ludzie/ludzie (10).webp",
        "zdjecia/ludzie/ludzie (11).webp",
        "zdjecia/ludzie/ludzie (13).webp",
        "zdjecia/ludzie/ludzie (14).webp",
        "zdjecia/ludzie/ludzie (15).webp",
        "zdjecia/ludzie/ludzie (16).webp"
    ],

    natura: [
        "zdjecia/natura/natura (1).webp",
        "zdjecia/natura/natura (2).webp",
        "zdjecia/natura/natura (3).webp",
        "zdjecia/natura/natura (4).webp",
        "zdjecia/natura/natura (5).webp",
        "zdjecia/natura/natura (6).webp",
        "zdjecia/natura/natura (7).webp",
        "zdjecia/natura/natura (8).webp",
        "zdjecia/natura/natura (9).webp",
        "zdjecia/natura/natura (10).webp"
    ],

    wydarzenia: [
        "zdjecia/wydarzenia/wydarzenia (1).webp",
        "zdjecia/wydarzenia/wydarzenia (2).webp",
        "zdjecia/wydarzenia/wydarzenia (3).webp",
        "zdjecia/wydarzenia/wydarzenia (4).webp",
        "zdjecia/wydarzenia/wydarzenia (5).webp",
        "zdjecia/wydarzenia/wydarzenia (6).webp",
        "zdjecia/wydarzenia/wydarzenia (7).webp",
        "zdjecia/wydarzenia/wydarzenia (8).webp",
        "zdjecia/wydarzenia/wydarzenia (9).webp",
        "zdjecia/wydarzenia/wydarzenia (10).webp",
        "zdjecia/wydarzenia/wydarzenia (11).webp",
        "zdjecia/wydarzenia/wydarzenia (12).webp",
        "zdjecia/wydarzenia/wydarzenia (13).webp",
        "zdjecia/wydarzenia/wydarzenia (14).webp",
        "zdjecia/wydarzenia/wydarzenia (15).webp",
        "zdjecia/wydarzenia/wydarzenia (16).webp",
        "zdjecia/wydarzenia/wydarzenia (17).webp",
        "zdjecia/wydarzenia/wydarzenia (18).webp",
        "zdjecia/wydarzenia/wydarzenia (19).webp",
        "zdjecia/wydarzenia/wydarzenia (20).webp",
        "zdjecia/wydarzenia/wydarzenia (21).webp",
        "zdjecia/wydarzenia/wydarzenia (22).webp",
        "zdjecia/wydarzenia/wydarzenia (23).webp",
        "zdjecia/wydarzenia/wydarzenia (24).webp"
    ]
};

const gallery = document.getElementById("gallery");
let currentPhotos = [];
let currentIndex = 0;


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showPhotos(category){
    gallery.innerHTML = "";

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