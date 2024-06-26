let liked = false;
let likeCount = 0;

function toggleLike() {
    liked = !liked;
    const heart = document.getElementById('heart');
    const likeCountElement = document.getElementById('like-count');

    if (liked) {
        heart.classList.add('liked');
        likeCount++;
    } else {
        heart.classList.remove('liked');
        likeCount--;
    }

    likeCountElement.textContent = likeCount;
}
