import React, { useState } from "react";

import { Box, CircularProgress, Container, Typography } from "@mui/material";
import SearchForm from "./Components/SearchForm";
import Content from "./Components/Content";

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

function App() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [content, setContent] = useState<SearchResult[]>([]);

  const handleSubmitForm = async (text: string) => {
    setLoading(true);
    setSearchedText(text);

    const response = await fetch(`/api/data?search=${text}`);
    const json = await response.json();

    setContent(json);
    setLoading(false);
  };

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <Typography variant="h4" component="h1" gutterBottom>
            Search UI Challenge
          </Typography>
          <SearchForm submitForm={handleSubmitForm} />
        </header>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : !content.length && searchedText ? (
          <Typography variant="h5" component="h2" gutterBottom>
            No results were found for the search:{" "}
            <strong>{searchedText}</strong>
          </Typography>
        ) : (
          <Content content={content} />
        )}
      </Container>
    </div>
  );
}

export default App;
