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
// ✅ Obtener la URL desde las variables de entorno
import { API_URL } from "../config.js";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <Typography align="center">Cargando...</Typography>;

  // Divide el contenido en párrafos usando saltos de línea
  const paragraphs = post.content.split("\n").filter((p) => p.trim() !== "");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: { xs: 2, sm: 4 }, // ✅ Padding responsive para móviles
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 600, md: 800 }, // ✅ Ancho adaptable a pantallas más pequeñas
          width: "100%",
          boxShadow: 4,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {post.img && (
          <CardMedia
            component="img"
            image={post.img}
            alt={post.title}
            sx={{
              height: { xs: 200, sm: 300, md: 400 }, // ✅ Altura responsive para la imagen
              objectFit: "cover",
            }}
          />
        )}

        <CardContent>
          {/* Título */}
          <Typography
            variant="h5" // ✅ Tamaño de fuente más pequeño para móviles
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              marginBottom: 2,
              fontSize: { xs: 24, sm: 28, md: 32 }, // ✅ Tamaño responsive
            }}
          >
            {post.title}
          </Typography>

          {/* Separador */}
          <Divider sx={{ mb: 2 }} />

          {/* Contenido separado en párrafos */}
          {paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                color: "#555",
                fontSize: { xs: 14, sm: 16, md: 18 }, // ✅ Tamaño de texto responsive
                lineHeight: 1.8,
                textAlign: "justify",
                marginBottom: 2,
                letterSpacing: "0.4px",
                "&::first-letter": {
                  fontSize: "20px", // ✅ Sin negrita y tamaño ajustado
                  fontWeight: "regular",
                  color: "#555",
                  marginRight: "4px",
                },
              }}
            >
              {paragraph}
            </Typography>
          ))}

          {/* Autor */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#999",
              marginTop: 3,
              textAlign: "right",
              fontSize: { xs: 12, sm: 14 }, // ✅ Tamaño del texto para el autor responsive
            }}
          >
            Escrito por: <strong>{post.author || "Anónimo"}</strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Post;
