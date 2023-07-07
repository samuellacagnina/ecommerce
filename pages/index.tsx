import { GetServerSideProps, NextPage } from 'next';
import Header from '../src/components/header/Header';
import Cards from '../src/components/Cards/Cards';
import { useState } from 'react';
import { openStdin } from 'process';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  url: string;
}

interface HomeProps {
  data: PostProps[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [postData, setPostData] = useState<PostProps[]>(data);

  return (
    <div className="w-full">
      <Header />
      <div className="grid grid-cols-4 gap-9 pr-16 pl-16">
        {postData.map((post) => (
          <Cards
          key={post.id}
            id={post.id}
            title={post.title}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
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
