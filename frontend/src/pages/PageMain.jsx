import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import PostCard from "./PostCard";
import { API_URL } from "../config.js";

const PageMain = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/posts`, {
          withCredentials: true, // necesario si usás autenticación con cookies
        });

        console.log("API_URL en PageMain:", API_URL);

        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          console.warn("La respuesta no es un array:", res.data);
          setPosts([]); // fallback para evitar errores en el render
        }
      } catch (error) {
        console.error(
          "Error al obtener los posts:",
          error.response?.data || error
        );
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* <Typography variant="h3" gutterBottom align="center">
        Posts
      </Typography> */}
      {Array.isArray(posts) &&
        posts.map((post) => <PostCard key={post.id || post._id} post={post} />)}
    </Container>
  );
};

export default PageMain;
