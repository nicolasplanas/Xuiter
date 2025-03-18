import { useContext } from "react"
import { PostContext } from "../contexts/PostContext"
import { Box } from "@mui/joy"
import Post from "./Post"

export default function PostList() {
    const { posts } = useContext(PostContext)

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {posts.map(post => {
            return <Post key={post.id} post={post} />
        })}
    </Box>
    )
}