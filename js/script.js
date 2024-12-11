let menuIcon = document.querySelectorAll('.fa-bars'),
searchIcon = document.getElementById('search-icon'),
searchbar = document.getElementById('searchbar'),
searchCloseIcon = document.querySelector('.fa-times'),
overlay = document.getElementById('overlay'),
sidebar = document.getElementById('sidebar'),
container = document.getElementById('container'),
videoGallery = document.getElementById('video-gallery');

menuIcon[0].addEventListener('click', function(){
    if(window.innerWidth >= 1024){
        sidebar.classList.toggle('hidden');
        container.classList.toggle('md:left-60');
        container.classList.toggle('md:w-[calc(100%-15rem)]');
        videoGallery.classList.toggle('lg:grid-cols-3');
        videoGallery.classList.toggle('lg:grid-cols-4');
    }
    if(window.innerWidth >= 768 && window.innerWidth < 1024){
        sidebar.classList.toggle('hidden');
        container.classList.toggle('md:left-60');
        container.classList.toggle('md:w-[calc(100%-15rem)]');
        videoGallery.classList.toggle('md:grid-cols-3');
    }
    if(window.innerWidth < 768){
        overlay.classList.remove('hidden');
        sidebar.classList.remove('-left-full');
    }
});

menuIcon[1].addEventListener('click', function(){
    overlay.classList.add('hidden');
    sidebar.classList.add('-left-full');
});

searchIcon.addEventListener('click', function(){
    searchbar.classList.remove('hidden');
    searchbar.classList.add('flex');
    overlay.classList.remove('hidden');
});

searchCloseIcon.addEventListener('click', function(){
    searchbar.classList.add('hidden');
    searchbar.classList.remove('flex');
    overlay.classList.add('hidden');
});