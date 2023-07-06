import type { NextPage } from 'next';
import Header from '../src/components/header/Header';
import Cards from '../src/components/Cards/Cards';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchingData();
  });

  const fetchingData = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Header />
      <Cards
        title="Title"
        subTitle="subTitle"
      />
    </div>
  );
};

export default Home;
