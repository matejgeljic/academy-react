import React, { useState, useEffect } from 'react';
import PostService from '../../services/PostService';
import IPost from '../../interfaces/post';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditPostDialog from '../EditPostDialog/EditPostDialog';

const PostsTable: React.FunctionComponent = () => {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [selectedPost, setSelectedPost] = useState<IPost>({});
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const fetchPosts = () => {
    PostService.getAllPosts()
      .then((response: any) => {
        setPosts(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const editPost = (post: IPost) => (event: any) => {
    setSelectedPost(post);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    fetchPosts();
  };

  const deletePost =
    (id: any): any =>
    (event: Event) => {
      event.stopPropagation();
      PostService.deletePost(id)
        .then((response: any) => {
          fetchPosts();
          console.log(response);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };

  return (
    <Container fixed>
      {!posts || posts.length < 1 ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color="primary" size={100} />
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">User Id</TableCell>
                <TableCell align="left">Post Id</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post: IPost) => (
                <TableRow
                  key={post.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{post.userId}</TableCell>
                  <TableCell align="left">{post.id}</TableCell>
                  <TableCell align="left">{post.title}</TableCell>
                  <TableCell align="left">
                    <Tooltip title="Delete">
                      <IconButton onClick={editPost(post)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton onClick={deletePost(post.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {
        <EditPostDialog
          open={dialogOpen}
          handleClose={handleClose}
          selectedPost={selectedPost}
        />
      }
    </Container>
  );
};

export default PostsTable;
