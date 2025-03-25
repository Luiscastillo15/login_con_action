<script>
    export let form;
</script>

<div class="login-container">
    <div class="login-card">
        <h1 class="login-title">Iniciar sesión</h1>
        
        {#if form?.error}
            <div class="alert error">{form.error}</div>
        {/if}

        <form method="POST" class="login-form">
            <div class="form-group">
                <label for="email" class="form-label">Correo electrónico</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    class="form-input"
                    placeholder="tu@email.com"
                />
            </div>
            
            <div class="form-group">
                <label for="password" class="form-label">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    class="form-input"
                    placeholder="••••••••"
                />
            </div>
            
            <button type="submit" class="submit-button">Acceder</button>
        </form>

    </div>
</div>

<style>
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 70vh;
    }

    .login-card {
        background-color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 2.5rem;
        width: 100%;
        max-width: 450px;
    }

    .login-title {
        color: var(--dark);
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.8rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--dark);
    }

    .form-input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        border-radius: var(--border-radius);
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .form-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    }

    .submit-button {
        width: 100%;
        padding: 0.75rem;
        background-color: var(--primary);
        color: rgb(88, 0, 240);
        border: none;
        border-radius: var(--border-radius);
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .submit-button:hover {
        background-color: var(--primary-light);
    }

    .alert {
        padding: 0.75rem 1rem;
        border-radius: var(--border-radius);
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }

    .error {
        background-color: rgba(247, 37, 133, 0.1);
        color: var(--danger);
        border-left: 3px solid var(--danger);
    }
</style>