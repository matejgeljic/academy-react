import IPost from './post';

export default interface IEditPostDialog {
  open: boolean;
  handleClose: () => void;
  selectedPost: IPost;
}
