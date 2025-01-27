document.addEventListener('DOMContentLoaded', function () {
    const videoFeed = document.querySelector('.video-feed');
    const videos = [
        'assets/video1.mp4',
        'assets/video2.mp4',
        'assets/video3.mp4'
    ]; // Placeholder video URLs

    videos.forEach(videoUrl => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');
        const video = document.createElement('video');
        video.src = videoUrl;
        video.loop = true; // Loop the video
        video.controls = false; // Remove native controls
        video.autoplay = true;
        video.muted = true; //Mute by default
        videoContainer.appendChild(video);

        video.addEventListener('click', function () {
            if (video.paused) {
                 video.play();
            } else {
                 video.pause();
            }
        });

        videoFeed.appendChild(videoContainer);
    });
});
