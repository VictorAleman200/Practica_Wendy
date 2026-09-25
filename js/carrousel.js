    document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carrousel");

    carousels.forEach((carousel) => 
    {
        const track = carousel.querySelector(".track");
        const slides = carousel.querySelectorAll(".slide");
        const prev = carousel.querySelector(".prev");
        const next = carousel.querySelector(".next");

        let index = 0; 
        const slideWidth = 100;
        
        function autoSlide()
        {
            const move = index * slideWidth;
            track.style.transform = `translateX(-${move}px)`;
        }

        if (next)
        {
            next.addEventListener("click", () => 
            {
                index++;
                if (index >= slides.length)
                {
                    index = 0;
                }
                autoSlide();
            })
        }

        if (prev) {
            prev.addEventListener("click", () => 
            {
                index--;
                if (index < 0) 
                {
                    index = slides.length - 1;
                }
                autoSlide();
            });
        }
    });
});