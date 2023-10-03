<template>
    <header>
        <nav>
            <div class="logo-container">
                <img class="imgLogo" src="../assets/imgYFest.png">
            </div>
            <ul class="menu">
                <li><a href="home">>Home</a></li>
                <li><a href="artistes">>Artist</a></li>
                <li><a href="map">>Map</a></li>
                <div class="billeterie">
                    <li><a href="billeterie">TICKETING</a></li>
                </div>
                <li><a href="Login"><img class="imgCompte" src="../assets/imgCompte.png"></a></li>
            </ul>
        </nav>
    </header>

    <main>
        COMPILATION <br>
        DE<br>
        VIDEOS<br>
        DE<br>
        FESTIVAL<br>
        TROP<br>
        COOL<br>
    </main>

    <footer>
        <p>&copy; 2023 YFestival</p>
    </footer>
</template>


<style scoped>
.imgCompte {
    width: 25px;
}

.imgLogo {
    width: 250px;
}

main {
    background-color: #E86252;
    height: 50%;
}

.billeterie {
    background-color: #ee2677;
    padding: 2px;
    margin-right: 5px;
}

/* Style for the menu horizontal */
.logo-container {
    flex: 1;
    /* This makes the logo container take up all available space to push the menu to the right */
}

.menu {
    list-style-type: none;
    padding: 0;
    margin: 5px;
    display: flex;
    /* Use flexbox to align items horizontally */
    align-items: center;
    /* Vertically center items within the flex container */
    justify-content: flex-end;
}

.menu li {
    margin-right: 20px;
    /* Space between menu items (adjust as needed) */
}

.menu li:last-child {
    margin-right: 0;
    /* Remove margin from the last item */
}

.menu a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;

}

.menu a:hover {
    color: #ff6600;
}

footer {
    color: black;
}
</style>
