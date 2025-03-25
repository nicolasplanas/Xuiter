import { Box, CardContent, Typography, IconButton } from "@mui/material";
import { Card } from '@mui/joy';
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

export default function Post({ post }) {
    const [stars, setStars] = useState(post.starsCount);
    const [favorited, setFavorited] = useState(false);

    const handleFavorite = async () => {
        try {
            const newStarsCount = favorited ? stars - 1 : stars + 1;
            const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...post, starsCount: newStarsCount })
            });

            if (!response.ok) throw new Error("Erro ao atualizar favorito");

            setStars(newStarsCount);
            setFavorited(!favorited); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card sx={{ marginBottom: '1em', width: '100%' }}>
            <Link to={`/posts/${post.id}`}>
                <CardContent>
                    {post && (
                        <Typography component="div">
                            <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1rem', color: 'GrayText' }}>Publicado por { post.author }</Box>
                            <Box sx={{ fontWeight: 'regular', color: grey[700] }}>{ post.content }</Box>
                        </Typography>
                    )}
                </CardContent>
            </Link>
            <CardContent>
                <IconButton onClick={handleFavorite} color={stars > 0 ? "primary" : "default"}>
                    <StarIcon />
                </IconButton>
                <span>{stars}</span>
            </CardContent>
        </Card>
    )
}