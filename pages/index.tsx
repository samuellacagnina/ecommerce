import { GetServerSideProps, NextPage } from 'next';
import Header from '../src/components/header/Header';
import Cards from '../src/components/Cards/Cards';
import { useState } from 'react';
import { openStdin } from 'process';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  data: PostProps[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [postData, setPostData] = useState<PostProps[]>(data);

  return (
    <div className="w-full">
      <Header />
      <div className="grid grid-cols-4">
        {postData.map((post) => (
          <Cards
          key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            subTitle={post.body}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostProps[] = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default Home;
