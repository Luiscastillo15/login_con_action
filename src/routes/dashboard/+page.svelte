<script>
    export let data;
</script>

<div class="dashboard-container">
    <aside class="sidebar">
        <div class="user-profile">
            <div class="avatar">{data.user.email.charAt(0).toUpperCase()}</div>
            <h3 class="username">{data.user.email}</h3>
        </div>
        <nav class="side-nav">
            <a href="/logout" class="nav-item">Salir</a>
        </nav>
    </aside>
    
    <main class="main-content">
        <header class="content-header">
            <h2>Bienvenido, {data.user.email}!</h2>
        </header>
        
        <div class="content-grid">
            <div class="card">
                <h3>Resumen</h3>
                <p>Aquí puedes ver un resumen de tu actividad.</p>
            </div>
            <div class="card">
                <h3>Notificaciones</h3>
                <p>Tienes 3 notificaciones nuevas.</p>
            </div>
            <div class="card">
                <h3>Actividad reciente</h3>
                <p>Tu última sesión fue hoy.</p>
            </div>
        </div>
    </main>
</div>

<style>
    .dashboard-container {
        display: flex;
        min-height: calc(100vh - 72px);
    }

    .sidebar {
        width: 250px;
        background-color: white;
        box-shadow: var(--shadow);
        padding: 1.5rem;
    }

    .user-profile {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #eee;
    }

    .avatar {
        width: 70px;
        height: 70px;
        background-color: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 auto 1rem;
    }

    .username {
        font-size: 1rem;
        color: var(--dark);
    }

    .side-nav {
        display: flex;
        flex-direction: column;
    }

    .nav-item {
        padding: 0.75rem 1rem;
        text-decoration: none;
        color: var(--dark);
        border-radius: var(--border-radius);
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    }

    .nav-item:hover {
        background-color: rgba(67, 97, 238, 0.1);
        color: var(--primary);
    }

    .main-content {
        flex: 1;
        padding: 2rem;
        background-color: #f9fafc;
    }

    .content-header {
        margin-bottom: 2rem;
    }

    .content-header h2 {
        color: var(--dark);
    }

    .content-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .card {
        background-color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 1.5rem;
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
    }

    .card h3 {
        margin-bottom: 0.5rem;
        color: var(--primary);
    }

    .card p {
        color: #666;
        font-size: 0.9rem;
    }
</style>