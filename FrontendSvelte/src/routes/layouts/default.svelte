<!-- src/layouts/default.svelte -->

<script>
    import { slot } from "svelte/internal";

    // Define any script logic or variables needed for the layout here
</script>

<main>
    <!-- Header -->
    <header>
        <h1>Welcome to My Svelte App</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <!-- Add other navigation links as needed -->
            </ul>
        </nav>
    </header>

    <!-- Page content -->
    <section>
        <slot></slot>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Your Company</p>
    </footer>
</main>

<style>
    /* Add CSS styles for the layout here */
    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    header {
        background-color: #333;
        color: #fff;
        padding: 10px 0;
        text-align: center;
    }

    nav ul {
        list-style: none;
        padding: 0;
    }

    nav ul li {
        display: inline-block;
        margin-right: 10px;
    }

    nav ul li a {
        color: #fff;
        text-decoration: none;
    }

    footer {
        margin-top: 20px;
        text-align: center;
    }
</style>
