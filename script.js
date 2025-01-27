 const likeContainers = document.querySelectorAll('.like-container');
 const favoriteContainers = document.querySelectorAll('.favorite-container');
const repostContainers = document.querySelectorAll('.repost-container');

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

  favoriteContainers.forEach(container => {
        const favoriteIcon = container.querySelector('.favorite-icon');


        favoriteIcon.addEventListener('click', () => {
             if (favoriteIcon.classList.contains('favorited')) {
                 favoriteIcon.classList.remove('favorited');

            }else{
                 favoriteIcon.classList.add('favorited');

            }
        });

         });


    repostContainers.forEach(container => {
        const repostIcon = container.querySelector('.repost-icon');


        repostIcon.addEventListener('click', () => {
             if (repostIcon.classList.contains('reposted')) {
                 repostIcon.classList.remove('reposted');

            }else{
                 repostIcon.classList.add('reposted');

            }
        });

         });
