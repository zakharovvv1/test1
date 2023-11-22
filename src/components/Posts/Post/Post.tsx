import { Link } from "react-router-dom";
import styles from "./styles/Post.module.scss";
import { PostProps } from "./types/typesPost";

const Post = ({ post }: PostProps) => {
  return (
    <div className={styles.postBody}>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p className={styles.body}>{post.body}</p>
      <Link to={`${post.id}`}>
        <button>Просмотр</button>
      </Link>
    </div>
  );
};
export default Post;
