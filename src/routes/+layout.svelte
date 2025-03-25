<script>
    export let data;
</script>

<nav class="navbar">
    <div class="container">
        <h1 class="logo">MiApp</h1>
        <div class="nav-links">
            {#if data.user}
                <a href="/dashboard" class="nav-link">Dashboard</a>
                <a href="/logout" class="nav-link button">Cerrar sesión</a>
            {:else}
                <a href="/login" class="nav-link button">Iniciar sesión</a>
            {/if}
        </div>
    </div>
</nav>

<main class="container">
    <slot />
</main>

<style>
    .navbar {
        background-color: white;
        box-shadow: var(--shadow);
        padding: 1rem 0;
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary);
        display: inline-block;
    }

    .nav-links {
        float: right;
    }

    .nav-link {
        display: inline-block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: black;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: var(--primary);
    }

    .button {
        background-color: var(--primary);
        color: orangered;
        border-radius: var(--border-radius);
        margin-left: 1rem;
    }

    .button:hover {
        background-color: var(--primary-light);
        color: white;
    }

    main {
        padding: 2rem 0;
        min-height: calc(100vh - 72px);
    }
</style>