import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: () => {
      navigate("/dashboard");
    },

    onError: (err) => {
      console.error(err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
