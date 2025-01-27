
  const likeContainers = document.querySelectorAll('.like-container');

    likeContainers.forEach(container => {
        const likeIcon = container.querySelector('.like-icon');
        const likeCount = container.querySelector('.like-count');
        let count = parseInt(likeCount.textContent, 10);

        likeIcon.addEventListener('click', () => {
             if (likeIcon.classList.contains('liked')) {
                 likeIcon.classList.remove('liked');
                count--;
            }else{
                 likeIcon.classList.add('liked');
                count++;
            }
            likeCount.textContent = count;
        });

         });        
