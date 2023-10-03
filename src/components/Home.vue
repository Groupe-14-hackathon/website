<template>
   <header>
        <h1 class="titre" >YFestival 2023</h1>
        <nav>
            <ul class="menu">
                <li><a href="home">Home</a></li>
                <li><a href="artistes">Artist</a></li>
                <li><a href="#">Map</a></li>
                <li><a href="#">Billetterie</a></li>
                <li><a href="#"><img class ="imgCompte" src="../assets/imgCompte.png"></a></li>
            </ul>
        </nav>
    </header>

    <footer>
        <p>&copy; 2023 YFestival</p>
    </footer> 

  
</template>

<style scoped>
.imgCompte{
    width:25px;
}
.titre {
  color: #e26363;
}

/* Style pour le menu horizontal */
.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex; /* Utilisation de flexbox pour aligner les éléments horizontalement */
}

.menu li {
    margin-right: 20px; /* Espace entre chaque élément du menu (peut être ajusté selon vos préférences) */
}

.menu li:last-child {
    margin-right: 0; /* Supprimer la marge à droite du dernier élément */
}

.menu a {
    text-decoration: none;
    color: #333; /* Couleur du texte du lien */
    font-weight: bold;
    font-size: 16px;
}

.menu a:hover {
    color: #ff6600; /* Couleur du texte du lien au survol */
}

</style>

