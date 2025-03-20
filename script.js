document.addEventListener('DOMContentLoaded', () => {
    console.log('Chrono Synapse Codebase Initialized...');
    
    const loadingElements = document.querySelectorAll('.loading p');
    
    loadingElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 1000);
    });
});
