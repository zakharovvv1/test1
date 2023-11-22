import { useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../Posts/api/postsApi";
import useCustomNavigate from "../Posts/Post/model/navigate";

const PostByIdPage = () => {
  const { navigate } = useCustomNavigate();
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
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
    </div>
  );
};
export default PostByIdPage;
