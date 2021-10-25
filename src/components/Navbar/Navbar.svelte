<script>
  import { Link } from "svelte-navigator";
  import { isLogged } from "../../store/isLogged";
  import { useAuthUser } from "../../hooks/useAuthUser";

  useAuthUser();
  let isLoggedUser = false;
  isLogged.subscribe((data) => {
    isLoggedUser = data;
  });
</script>

<div>
  <nav>
    <Link to="/">Home</Link>
    {#if !isLoggedUser}
      <Link to="/register">Registrar</Link>
      <Link to="/login">Login</Link>
    {/if}
  </nav>
</div>
