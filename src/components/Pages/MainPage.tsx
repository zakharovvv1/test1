import Post from "../Posts/Post/Post";
import { IPost } from "../Posts/Post/types/typesPost";
import { dataInStore, useGetPostsQuery } from "../Posts/api/postsApi";
import { useEffect } from "react";
import HandlerScroll from "./Model/HandlerScroll/HandlerScroll";

const MainPage = () => {
  const { scrollHandler, limit } = HandlerScroll();
  const { data, isLoading, isFetching } = useGetPostsQuery({
    page: 0,
    limit: limit,
  });

  console.log(dataInStore);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      removeEventListener("scroll", scrollHandler);
    };
  }, []);
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div>
      <ul>
        {data.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      {isFetching && <p>Загрузка</p>}
    </div>
  );
};

export default MainPage;
