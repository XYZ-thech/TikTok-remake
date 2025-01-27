document.addEventListener('DOMContentLoaded', function () {
    const videoFeed = document.querySelector('.video-feed');
    const videos = [
        'video1.mp4',
        'video2.mp4',
        'video3.mp4'
    ]; // Placeholder video URLs

    videos.forEach(videoUrl => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');
        const video = document.createElement('video');
        video.src = videoUrl;
        video.loop = true; // Loop the video
        video.controls = true; // Add basic controls
        videoContainer.appendChild(video);
        videoFeed.appendChild(videoContainer);
    });
});
