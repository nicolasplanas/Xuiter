import { createContext, useEffect, useState } from "react";

const PostContext = createContext()

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3000/posts')
        const posts = await response.json()
        setPosts(posts)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = async (content) => {
        console.log('Seinding event', content)

        const payload = {
            author: 'Nicolas Planas',
            content
        }

        console.log(payload)

        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json()
        
        setPosts([data, ...posts])
    }

    return(
        <PostContext.Provider value={{ posts, createPost }}>
            { children }
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }