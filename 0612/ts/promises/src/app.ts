document.addEventListener('DOMContentLoaded', () =>{
    const userDiv = document.getElementById('logo') as HTMLDivElement;
    async function getUsers(){
        let c = 0
        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response3 = await fetch('https://jsonplaceholder.typicode.com/comments')
        const comments = await response3.json()
        const posts = await response2.json()
        for (let post of posts){
            const div = document.createElement('div')
            div.innerHTML = `<div><img width="100px" height="100px"src=" https://api.dicebear.com/9.x/adventurer/svg?seed=${post.userId}"/></div><br>
                               <div>${post.title}</div><br>
                               <div>${post.body}</div><br>`
           userDiv.appendChild(div)
            for(let comment of comments){
                c += 1
                if(comment.postId == post.id){
                    const div = document.createElement('div')
                    div.innerHTML = `${comment.body} <br>`;
                    userDiv.appendChild(div)
                }
            }
            

            
        }        
        }

        getUsers()
    });