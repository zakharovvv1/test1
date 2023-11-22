import useCustomNavigate from "./model/navigate";
import styles from "./styles/Post.module.scss";
import { PostProps } from "./types/typesPost";

const Post = ({ post }: PostProps) => {
  const { navigate } = useCustomNavigate();
  return (
    <div className={styles.postBody}>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p className={styles.body}>{post.body}</p>
      <button onClick={() => navigate(`${post.id}`)}>Просмотр</button>
    </div>
  );
};
export default Post;
