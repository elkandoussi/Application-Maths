<template>
  <div>
      <b-row>
      <b-col>
            <h3>PGCD </h3>
            <b-nav tabs align="center">
                <b-nav-item to="/pgcd/cours" active>Cours</b-nav-item>
                <b-nav-item to="/pgcd/exercices" link-classes="text-dark">Exercices</b-nav-item> 
            </b-nav>
      </b-col>
  </b-row>

  <b-row>
      <b-col class="text-left mt-2">
          <span class="bg-dark text-white p-1">Définition</span> <br>
          <p class="border p-1">On apelle <em>PGCD de a et b</em> le plus grand commun diviseur de a et b, 
          et on note <em>PGCD(a,b)</em> ou <span v-katex="'a \\wedge b'"></span></p>
      </b-col>
  </b-row>

  <b-row>
      <b-col class="text-left">
          <span class="bg-dark text-white p-1">Proprités </span> <br>
          <p class="border p-1">
               soit a et b deux entiers naturels non nuls. <br>
              <ul>
                  <li>PGCD(a,0) = a</li>
                  <li>PGCD(a,1) = 1</li>
                  <li>si b divise a ,alors : PGCD(a,b) = b</li>
                  <li>si PGCD(a,b) = 1, alors <em> a et b sont premiers entre eux</em></li>
              </ul>
          </p>
      </b-col>
  </b-row>

  <b-row>
      <b-col class="text-left">
          <h4>Recherche du PGCD de deux nombres entiers</h4>
          <span class="bg-dark text-white p-1">Méthode 1 : la décomposition en facteurs premiers </span> <br>
          <p class="p-1">On peut déterminer le PGCD de deux nombres a et b en décomposant ces deux nombres en produit de facteurs
            premiers, puis en sélectionnant tous les nombres premiers communs aux deux nombres.
          </p>
          <p>
            <b><u>Exemple :</u></b> <br> 
            déterminer le PGCD de 1155 et de 3234.
          </p>

          <p> 
              <span class="bg-info text-white p-1">Etape 1 :</span> on décompose chacun des deux nombres en produit de facteurs premiers. <br>
              On Obtient:
              <ul>
                  <li><span v-katex="'1 155 = 3 \\times 5 \\times 7 \\times 11'"></span></li>
                  <li><span v-katex="'3 234 = 2 \\times 3 \\times 7^{2} \\times 11'"></span></li>
              </ul>

              <span class="bg-info text-white p-1">Etape 2 :</span> on séléction ls nombres premiers communs. <br>
              On remarque que le produit : <span v-katex="'3 \\times 7 \\times 11'"></span> est commun à la décomposition 
              des deux nombres. <br>
              Alors, on conclut que : <em> <span v-katex="'PGCD(1 155,3 234) = 3 \\times 7 \\times 11 = 231'"></span> </em>
          </p>
      </b-col>
  </b-row>

  <b-row>
      <b-col class="text-left"> 
          <span class="bg-dark text-white p-1">Méthode 2: l'algorithme d'Euclide</span> <br>
          <p class="p-1"><em>L'algorithme d'Euclide</em> permet de déterminer le PGCD par divisions euclidiennes successives. <br>
          Dans cette méthode <em>le PGCD est le dernier reste non nul</em>. <br>
          <b-link to="/division-euclidienne/cours">Savoir plus sur la division euclidienne</b-link>
          </p>
      </b-col>
  </b-row>
  </div>
</template>

<script>
export default {
  name: 'PgcdCourse',
}
</script>

<style>

</style>