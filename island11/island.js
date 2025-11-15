const viewer = document.querySelector('#island');
const progress = viewer.querySelector('.model-update-bar');

viewer.addEventListener('progress', (event) => {
    const value = event.detail.totalProgress;
    progress.style.width = `${value * 100}%`;
});

viewer.addEventListener('load', () => {
    progress.style.width = '100%';
    setTimeout(() => {
        viewer.querySelector('.model-progress-bar').style.display = 'none';
    }, 400);
});
