import React, { useState, useEffect } from 'react';
import './EditPostDialog.scss';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IEditPostDialog from '../../interfaces/editPostDialog';
import IPost from '../../interfaces/post';
import PostService from '../../services/PostService';

const EditPostDialog: React.FunctionComponent<IEditPostDialog> = (
  props: IEditPostDialog
) => {
  const { open, handleClose, selectedPost } = props;

  const [post, setPost] = useState<IPost>({});

  useEffect(() => {
    const newPost = {
      id: selectedPost.id,
      userId: selectedPost.userId,
      title: selectedPost.title,
      body: selectedPost.body,
    };
    setPost(newPost);
  }, [selectedPost]);

  const handleChange = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    PostService.updatePost(post.id, post)
      .then((response: any) => {
        console.log(response);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Post info</DialogTitle>
      <DialogContent classes={{ root: 'dialog-content' }}>
        <TextField
          id="userId"
          label="User Id"
          name="userId"
          variant="outlined"
          value={post.userId}
          onChange={handleChange}
          style={{ marginTop: 16 }}
        />
        <TextField
          id="title"
          label="Title"
          name="title"
          variant="outlined"
          value={post.title}
          onChange={handleChange}
        />
        <TextField
          id="body"
          label="Body"
          name="body"
          variant="outlined"
          value={post.body}
          onChange={handleChange}
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPostDialog;
