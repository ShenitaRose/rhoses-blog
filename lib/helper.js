


const baseURL = 'http://rhoses-blog.vercel.app/api/posts';

//endpoint:http://localhost:3000/api/posts
export default async function getPost(id){
    const res = await fetch(`${baseURL}`)
    const post = await res.json()

    if(id){
        return post.find(value => value.id==id)
    }

    return post;
}