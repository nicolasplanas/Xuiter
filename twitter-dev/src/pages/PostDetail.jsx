import { Card, CardContent } from "@mui/joy"
import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useLoaderData } from "react-router-dom"

const postLoader = async ({params}) => {
    const response = await fetch(`http://localhost:3000/posts/${params.id}`)
    const post = await response.json()

    return { post }
};

const PostDetail = () => {
    const { post } = useLoaderData()

    return (
        <Card variant="outlined" sx={{ overflow: 'auto', margin: 'auto', width: 940, marginTop: '6em' }}>
            <CardContent>
                <Typography component='div'>
                    <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1em', color: 'GrayText' }}>Publicado por {post.author}</Box>
                    <Box sx={{ fontWeight: 'light', color: grey[700], fontSize: 24 }}>{ post.content }</Box>
                </Typography>
            </CardContent>
        </Card>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { PostDetail, postLoader };