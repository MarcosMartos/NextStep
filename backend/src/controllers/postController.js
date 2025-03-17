import prisma from "../config/prisma.js";

export const createPost = async (req, res) => {
  const { title, content, category, userId } = req.body;

  const post = await prisma.post.create({
    data: { title, content, category, userId },
  });

  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
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
