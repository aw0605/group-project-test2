import { useNavigate } from "react-router-dom";

export const useNavigationHandlers = () => {
  const navigate = useNavigate();

  const handleUserClick = (userId: string) => {
    navigate(`/feed/${userId}`);
  };

  const handleTagClick = (tag: string) => {
    navigate(`/feed/hashtags/${tag}`);
  };

  return { handleUserClick, handleTagClick };
};
