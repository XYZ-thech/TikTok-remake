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
          scrollVideo(button.textContent === '^' ? -1 : 1)
      })
    });


    // Video Loading
    const videoFeedContainer = document.getElementById('video-feed');
    // Embed code (from tiktok "embed" option)
   const videoEmbeds = [
       '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7453655035877199150" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
       '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7459114605273517334" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
       '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7329052913739117855" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7328828916543999275" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7328153350272636203" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7328147967266385198" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',
        '<iframe allow="fullscreen" src="https://www.tiktok.com/embed/7328073952427708719" class="tiktok-embed" width="325" height="700" frameborder="0"></iframe>',

    ];


    let currentVideoIndex = 0;
    videoEmbeds.forEach(embed =>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = embed;
        videoFeedContainer.appendChild(newDiv);
    })


    const allVideos = document.querySelectorAll('#video-feed > div')

    const scrollVideo = (direction) =>{
        currentVideoIndex = (currentVideoIndex + direction + allVideos.length) % allVideos.length;
        videoFeedContainer.style.transform = `translateY(-${currentVideoIndex * 720}px)`
      }

    // Get the Profile button
   const profileButton = document.querySelector('.sidebar-nav ul li a:nth-child(9)'); // Select the correct link

    // Open the Profile page on click
    profileButton.addEventListener('click', function(event) {
        event.preventDefault();  //prevent default navigation
        window.open('profile.html', '_blank'); // Open profile.html in a new tab
    });
