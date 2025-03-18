import { Box, Typography } from "@mui/material";
import NewPostForm from "../components/NewPostForm";
import { PostProvider } from "../contexts/PostContext";
import PostList from "../components/PostList";

export default function Feed() {
    return(
        <Box sx={{ margin: 'auto', width: 860, paddingTop: '6em' }}>
            <Typography sx={{ marginBottom: '1em' }} component='div'>
                <Box sx={{ fontSize: 'h3.fontSize', fontWeight: 'light', color: '#2196f3' }}>Aqui estão suas publicações mais recentes</Box>
            </Typography>

            <PostProvider>
                <NewPostForm />
                <PostList />
            </PostProvider>
            
        </Box>
    )
}