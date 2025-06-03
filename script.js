document.addEventListener('DOMContentLoaded', function() {
    const portfolioPage = document.getElementById('portfolio-page');
    const projectCatsKitPage = document.getElementById('project-2D-CatsKit');
    const btnAll = document.getElementById('btnAll');
    const backToPortfolioBtn = document.getElementById('back-to-portfolio');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    
    function showPage(pageToShow) {
        document.querySelectorAll('.page-section').forEach(page => {
            page.classList.remove('active');
            page.classList.add('hidden');
        });
        pageToShow.classList.remove('hidden');
        pageToShow.classList.add('active');
    }

    btnAll.addEventListener('click', function() {
        showPage(portfolioPage);
        btnAll.classList.add('active');
    });

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPageId = this.dataset.pageId;
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                showPage(targetPage);
                btnAll.classList.remove('active');
            }
        });
    });

    backToPortfolioBtn.addEventListener('click', function() {
        showPage(portfolioPage);
        btnAll.classList.add('active');
    });

    showPage(portfolioPage);

     const emailButton = document.querySelector('.email-contact');
    const emailTextSpan = document.getElementById('email-text');
    const myEmail = "raissasantos55@yahoo.com";

    if (emailButton && emailTextSpan) {
        emailButton.addEventListener('mouseenter', function() {
            emailTextSpan.textContent = myEmail;
        });

        emailButton.addEventListener('mouseleave', function() {
            emailTextSpan.textContent = "Email";
            emailButton.classList.remove('copied');
        });

        emailButton.addEventListener('click', function() {
            const tempInput = document.createElement('textarea');
            tempInput.value = myEmail;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            emailTextSpan.textContent = "Copiado!";
            emailButton.classList.add('copied');

            setTimeout(() => {
                if (!emailButton.matches(':hover')) { 
                    emailTextSpan.textContent = "Email";
                    emailButton.classList.remove('copied');
                }
            }, 1500);
        });
    }
});

