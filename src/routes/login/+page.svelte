<script>
    export let form;
</script>

<h1>Login</h1>

{#if form?.error}
    <p style="color: red">{form.error}</p>
{/if}

<form method="POST">
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Iniciar Sesion</button>
</form>