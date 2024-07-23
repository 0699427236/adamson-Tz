<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advertising Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Our Advertising Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h2>Home</h2>
        <p>This is the homepage of our advertising website. Discover our services and how we can help you grow your business.</p>
    </section>

    <section id="about">
        <h2>About</h2>
        <p>We are a leading advertising agency with years of experience in helping businesses reach their full potential.</p>
    </section>

    <section id="services">
        <h2>Services</h2>
        <ul>
            <li>Social Media Marketing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Content Creation</li>
            <li>Pay-Per-Click Advertising (PPC)</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Advertising Website. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>


