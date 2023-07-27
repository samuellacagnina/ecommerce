import { GetServerSideProps, NextPage } from "next"
import { ArrowUp } from "../src/components/ArrowUp/ArrowUp"
import Cards from "../src/components/Cards/Cards"
import { useState } from "react"
import { Footer } from "../src/components/Footer/Footer"
import { LoadMoreButton } from "../src/components/LoadMoreButton/LoadMoreButton"
import { ButtonPopular } from "../src/components/ButtonPopular/ButtonPopular"

interface PostProps {
  userId: number
  id: number
  title: string
  url: string
  view:any
}

interface HomeProps {
  data: PostProps[]
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [postData, setPostData] = useState<PostProps[]>(data)
  const [view, setView] = useState(0)
  const [isAscending, setIsAscending] = useState(true);

  const handleView = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${postData.length}&_limit=10`
      )
      const newData: PostProps[] = await response.json()
      setPostData([...postData, ...newData])
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="relative min-h-full">
      <ButtonPopular />
      <div className="grid gap-9 pr-16 pl-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {postData.map((post) => (
          <Cards
            key={post.id}
            id={post.id}
            title={post.title}
            url={post.url}
            view={view}
            handleView={handleView}
          />
        ))}
      </div>
      <LoadMoreButton handleView={handleView} />
      <ArrowUp />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=28`
    )
    const data: PostProps[] = await response.json()
    return {
      props: {
        data: data.slice(0, 5),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        data: [],
      },
    }
  }
}

export default Home
