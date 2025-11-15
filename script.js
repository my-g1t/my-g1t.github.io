// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  
  if (!progressBar || !updatingBar) return; 
  
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

document.querySelectorAll('#island').forEach(viewer => {
  viewer.addEventListener('progress', onProgress);
});



/*from index*/
     <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

      
        let currentSlide = 1;
        const totalSlides = 6;

        function updateProgressBar() {
            const progress = (currentSlide / totalSlides) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }
        }
        
        function handleScroll() {
            const slides = document.querySelectorAll('.slide');
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            slides.forEach((slide, index) => {
                const slideTop = slide.offsetTop;
                const slideBottom = slideTop + slide.offsetHeight;
                
                if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
                    const slideNumber = index + 1;
                    if (slideNumber !== currentSlide) {
                        currentSlide = slideNumber;
                        updateProgressBar();
                    }
                }
            });
        }
        
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(handleScroll, 50);
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            updateProgressBar();
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { 
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.content-card').forEach((el) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(el);
            });
        
            setTimeout(handleScroll, 100);
   
            

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

/*the second script from index*/
window.addEventListener("DOMContentLoaded", () => {
  const viewer = document.querySelector('#island');
  if (!viewer) return;

  const bar = viewer.querySelector('.model-update-bar');

  viewer.addEventListener('progress', e => {
    if (bar) bar.style.width = `${e.detail.totalProgress * 100}%`;
  });

  viewer.querySelectorAll('.Hotspot').forEach(h => {
    h.addEventListener('click', () => {
      viewer.cameraOrbit = h.dataset.orbit;
      viewer.cameraTarget = h.dataset.target;
      viewer.fieldOfView = h.dataset.fov;
    });
  });
});
