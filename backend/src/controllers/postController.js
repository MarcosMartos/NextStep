import prisma from "../config/prisma.js";

export const createPost = async (req, res) => {
  const { title, content, category, img, userId } = req.body;

  const post = await prisma.post.create({
    data: { title, content, category, img, userId },
  });

  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const { category } = req.query;

  const posts = await prisma.post.findMany({
    where: category ? { category } : {},
  });

  res.json(posts);
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
    });
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el post" });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, category } = req.body;

  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { title, content, category },
  });

  res.json(post);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  await prisma.post.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Post deleted" });
};
