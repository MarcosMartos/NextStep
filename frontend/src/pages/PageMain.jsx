import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";

const articles = [
  { id: 1, title: "Artículo 1", content: "Contenido del artículo 1..." },
  { id: 2, title: "Artículo 2", content: "Contenido del artículo 2..." },
  { id: 3, title: "Artículo 3", content: "Contenido del artículo 3..." },
];

const PageMain = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Bienvenido a NextStep Blog
      </Typography>

      <Grid container spacing={2}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PageMain;
