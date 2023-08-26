import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.user);

  return { email, token, id };
};
