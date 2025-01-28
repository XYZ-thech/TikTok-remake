    //Selecting elements for dynamic updating or event listeners
    const navLinks = document.querySelectorAll('.sidebar-nav ul li a');

    // Simple Example of an Event Handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(event){
          //prevent default anchor action (going to url)
          event.preventDefault();
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          console.log(`Clicked ${this.textContent}`);
          //you could potentially update content based on what was clicked here

        })
    });

    //Basic example of manipulating the UI
    const arrowButtons = document.querySelectorAll('.actions button')

    arrowButtons.forEach(button =>{
      button.addEventListener('click', () => {
        console.log(`clicked arrow ${button.textContent}`)
        alert(`Clicked ${button.textContent} - This would typically scroll or interact in some way, but for demo is just an alert`)
      })
    });


    // Video Loading
    const videoFeedContainer = document.getElementById('video-feed');
    // Embed code (from tiktok "embed" option)
    const videoEmbeds = [
        '<iframe src="https://www.tiktok.com/embed/7329052913739117855" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe src="https://www.tiktok.com/embed/7328828916543999275" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe src="https://www.tiktok.com/embed/7328153350272636203" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe src="https://www.tiktok.com/embed/7328147967266385198" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe src="https://www.tiktok.com/embed/7328073952427708719" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',

    ]
    // Add videos to the video feed container
    videoEmbeds.forEach(embed =>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = embed;
        videoFeedContainer.appendChild(newDiv);
    })
