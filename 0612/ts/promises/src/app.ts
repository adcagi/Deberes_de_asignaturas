document.addEventListener('DOMContentLoaded', () => {

    const userDiv = document.getElementById('logo') as HTMLDivElement;

    interface Post {
        userId: number
        id: number
        title: string
        body: string
    }

    interface Comment {
        postId: number
        id: number
        name: string
        email: string
        body: string
    }

    async function getUsers(): Promise<void> {

        const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments');

        const posts: Post[] = await responsePosts.json();
        const comments: Comment[] = await responseComments.json();

        for (const post of posts) {

            const div = document.createElement('div');

            const count = comments.filter(comment => comment.postId === post.id).length;

            div.innerHTML = `
                <div>
                    <img width="100px" height="100px"
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=${post.userId}"/>
                </div>
                <br>
                <div><strong>${post.title}</strong></div>
                <br>
                <div>${post.body}</div>
                <br>
                <div>Comments: ${count}</div>
                <hr>
            `;

            userDiv.appendChild(div);
        }
    }

    getUsers();
});