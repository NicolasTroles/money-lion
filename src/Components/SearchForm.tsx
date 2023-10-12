import React, { useState } from "react";

import { Box, Button, TextField } from "@mui/material";

interface ISearchForm {
  submitForm: (text: string) => void;
}

function SearchForm({ submitForm }: ISearchForm) {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(search);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "0 0 2rem",
      }}
      autoComplete="off"
      onSubmit={handleSearchSubmit}
    >
      <TextField
        id="search"
        label="Search for the content"
        type="search"
        variant="filled"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" variant="contained" size="large">
        Search
      </Button>
    </Box>
  );
}

export default SearchForm;
