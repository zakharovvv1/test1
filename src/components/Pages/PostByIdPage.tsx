import { Link, useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../Posts/api/postsApi";

const PostByIdPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetPostsByIdQuery(id);

  if (isLoading) {
    return <h1>Загрузка поста...</h1>;
  }
  return (
    <div>
      <p>Это пост под номером {id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
      <Link to={"/"}>
        <button>Назад</button>
      </Link>
    </div>
  );
};
export default PostByIdPage;
