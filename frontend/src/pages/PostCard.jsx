import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  // Limitar la descripción a un máximo de 20 palabras
  const truncatedContent =
    post.content.split(" ").slice(0, 10).join(" ") +
    (post.content.split(" ").length > 10 ? "..." : "");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row-reverse" }, // ✅ Dirección de columna en móviles
        marginBottom: 2,
        padding: { xs: 1, sm: 2 }, // ✅ Padding responsive
        boxShadow: 4,
        borderRadius: 3,
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row-reverse" }, // ✅ Imagen arriba en móviles
          alignItems: "center",
        }}
      >
        {/* Imagen */}
        {post.img && (
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: 300 }, // ✅ Ancho completo en móviles
              height: { xs: 200, sm: 150, md: 180 }, // ✅ Altura adaptativa
              objectFit: "cover",
              borderRadius: 2,
              marginLeft: { xs: 0, sm: 2 }, // ✅ Sin margen en móviles
              marginBottom: { xs: 1, sm: 0 }, // ✅ Margen inferior en móviles
            }}
            image={post.img}
            alt={post.title}
          />
        )}

        {/* Contenido */}
        <Box sx={{ flex: 1 }}>
          <CardContent>
            {/* Título */}
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{
                fontSize: { xs: 18, sm: 20 }, // ✅ Tamaño de fuente responsive
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {post.title}
            </Typography>

            {/* Contenido */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: 14, sm: 16 }, // ✅ Tamaño adaptativo
                lineHeight: 1.5,
              }}
            >
              {truncatedContent}
            </Typography>

            {/* Autor */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                marginTop: 1,
                display: "block",
                fontSize: { xs: 12, sm: 14 }, // ✅ Tamaño adaptativo para el autor
              }}
            >
              Escrito por: {post.author || "Anónimo"}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
