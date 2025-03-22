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
    <Card sx={{ display: "flex", marginBottom: 2, padding: 2 }}>
      <CardActionArea
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: "row-reverse", // Imagen a la derecha, contenido a la izquierda
          alignItems: "center",
        }}
      >
        {/* Imagen */}
        {post.img && (
          <CardMedia
            component="img"
            sx={{
              width: 300,
              height: 150,
              objectFit: "cover",
              borderRadius: 2,
              marginLeft: 2,
            }}
            image={post.img}
            alt={post.title}
          />
        )}

        {/* Contenido */}
        <Box sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {truncatedContent}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ marginTop: 1, display: "block" }}
            >
              Escrito por: {post.author}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
