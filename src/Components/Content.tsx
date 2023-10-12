import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import type { SearchResult } from "../App";

import VideocamIcon from "@mui/icons-material/Videocam";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

interface IContent {
  content: SearchResult[];
}

const categoryIconAndTitle = {
  PLAYLISTS: {
    icon: <PlaylistPlayIcon />,
    title: "Playlist",
  },
  BLOG_POSTS: {
    icon: <ReceiptLongIcon />,
    title: "Blog Post",
  },
  VIDEOS: {
    icon: <VideocamIcon />,
    title: "Video",
  },
};

function Content({ content }: IContent) {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {content.map((item) => {
        return (
          <Grid item xs={12} md={6} key={item.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    {item.title}
                  </Link>
                  <Tooltip title={categoryIconAndTitle[item.category].title}>
                    <IconButton>
                      {categoryIconAndTitle[item.category].icon}
                    </IconButton>
                  </Tooltip>
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Content;
