const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainerEl = document.getElementById("post-container")

for (let i = 0; i < posts.length; i++){
    postContainerEl.innerHTML += `
                <article class="post">
                    <header class="post-header">
                        <img class="pic-post-author" src="${posts[i].avatar}" alt="Portrait of ${posts[i].name}">
                        <div class="post-author">
                            <p class="name">${posts[i].name}</p>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </header>
                    <figure class="post-image-container">
                        <img class="post-image" src="${posts[i].post}" alt="Self-portrait of ${posts[i].name}">
                    </figure>
                    <div class="bottom-container">
                        <footer class="post-footer">
                            <img id="heart-btn" class="btn" src="images/icon-heart.png" alt="Like Button">
                            <img class="btn" src="images/icon-comment.png" alt="Comment Button">
                            <img class="btn" src="images/icon-dm.png" alt="DM Button">
                        </footer>
                        <div class="post-stats">
                            <p id="likes" class="likes">${posts[i].likes} likes</p>
                            <div class="post-author-comments-container">
                                <p class="comment-author">${posts[i].username}</p>
                                <p class="post-comments">${posts[i].comment}</p>
                            </div>
                        </div>
                    </div>
                </article>
                `
}


const heartBtn = document.getElementById("heart-btn");

heartBtn.addEventListener("dblclick", function() {
    let likesEl = document.getElementById("likes");
    likesEl.textContent = `${Number(likesEl.textContent) + 1} likes`;
});
