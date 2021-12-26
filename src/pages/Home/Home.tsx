import React from 'react';
import IPage from '../../interfaces/page';
import PostsTable from '../../components/PostsTable/PostsTable';

const Home: React.FunctionComponent<IPage> = () => {
  return (
    <div>
      <PostsTable />
    </div>
  );
};

export default Home;
