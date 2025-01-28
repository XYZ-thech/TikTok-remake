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
