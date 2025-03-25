<script>
    export let data;
</script>

<nav>
    {#if data.user}
        <a href="/dashboard">Dashboard</a>
        <a href="/logout">Cerrar Sesion</a>
    {:else}
        <a href="/login">iniciar Sesion</a>
    {/if}
</nav>

<slot />