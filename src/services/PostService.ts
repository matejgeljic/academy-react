import http from '../http-common';
import IPost from '../interfaces/post';

const getAllPosts = () => {
  return http.get<Array<IPost>>('/posts');
};

const getSinglePost = (id: number | undefined) => {
  return http.get<IPost>(`/posts/${id}`);
};

const createPost = (data: IPost) => {
  return http.post<IPost>('/posts', data);
};

const updatePost = (id: number | undefined, data: IPost) => {
  return http.put<any>(`/posts/${id}`, data);
};

const deletePost = (id: number | undefined) => {
  return http.delete<any>(`/posts/${id}`);
};

const PostService = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};

export default PostService;
