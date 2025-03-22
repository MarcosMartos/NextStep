import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <Typography align="center">Cargando...</Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          width: "100%",
          boxShadow: 4,
          borderRadius: 3,
          overflow: "hidden", // Evita que la imagen sobresalga
        }}
      >
        {post.img && (
          <CardMedia
            component="img"
            image={post.img}
            alt={post.title}
            sx={{
              height: 400, // Altura fija para mantener consistencia
              objectFit: "cover",
            }}
          />
        )}

        <CardContent>
          {/* Título */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            {post.title}
          </Typography>

          {/* Separador */}
          <Divider sx={{ mb: 2 }} />

          {/* Contenido */}
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontSize: 18,
              lineHeight: 1.7,
              textAlign: "justify", // Justifica el contenido para mejor presentación
            }}
          >
            {post.content}
          </Typography>

          {/* Autor */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#999",
              marginTop: 3,
              textAlign: "right",
            }}
          >
            Escrito por: <strong>{post.author}</strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Post;
