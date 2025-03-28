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
        const res = await axios.get(`${API_URL}/api/posts`);
        setPosts(res.data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* <Typography variant="h3" gutterBottom align="center">
        Posts
      </Typography> */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default PageMain;
