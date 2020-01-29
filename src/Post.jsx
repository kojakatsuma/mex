import React from 'react';
import { Typography, Paper } from '@material-ui/core';
export const Post = ({ caption, date, summary, html }) => (<Paper square elevation={0}>
  <Typography variant="h3">{caption}</Typography>
  <Typography variant="body2">{date}</Typography>
  <Typography variant="body1" noWrap>{summary}</Typography>
  <div dangerouslySetInnerHTML={{
    __html: html
  }} />
</Paper>);
