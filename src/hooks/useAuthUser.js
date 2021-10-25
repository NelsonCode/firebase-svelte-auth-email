import { onMount } from "svelte";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, useLocation } from "svelte-navigator";
import { isLogged } from "../store/isLogged";
export const useAuthUser = () => {
  const navigate = useNavigate();
  const { subscribe } = useLocation();
  let pathname = "/";
  subscribe((info) => {
    pathname = info.pathname;
  });
  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user == null ? false : true;

      if (!userLogged) {
        navigate("/login");
        isLogged.set(false)
      } else {
        isLogged.set(true)
        if (pathname === "/login" || "/register") {
          navigate("/");
        }
      }
    });
  });
};
