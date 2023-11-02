//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page'); 
        const pageTurn = document.getElementById(pageTurnId);
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
});


//contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelectorAll('.btn.contact-me');

contactMeBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        setTimeout(() => {
            pages.forEach((page, pageIndex) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    setTimeout(() => {
                        page.style.zIndex = 20 + pageIndex;
                    }, 500);
                }, (pageIndex + 1) * 200 + 100);
            });
        }, (index + 1) * 200); // Délai d'attente avant de commencer l'animation
    });
});

//create reverse index function

let totalPage = pages.length;
let pageNumber = 0;

function reverseIndex () {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPage -1;
    }
}

//back profile button when click
const backProfilBtn = document.querySelector('.back-profile');

backProfilBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                pages[pageNumber].style.zIndex = 10 + index;
            })
        }, (index + 1) * 200 + 100)
    })
}
//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)