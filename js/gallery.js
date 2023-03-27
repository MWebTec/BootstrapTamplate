const images = document.querySelectorAll('.image-container');

images.forEach(image => {
    image.addEventListener('click', () => {
        if (image.classList.contains('active')) {
            image.classList.remove('active');    
        } else {
            images.forEach(image => image.classList.remove('active'));
            image.classList.add('active');
        }
    });
});