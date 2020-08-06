<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h3>Nombres premiers</h3>
        <b-nav tabs align="center">
          <b-nav-item to="/nombre-premier/cours" active>Cours</b-nav-item>
          <b-nav-item to="/nombre-premier/exercices" link-classes="text-dark">Exercices</b-nav-item> 
        </b-nav>
      </b-col>
    </b-row>
    
    <b-row>
      <b-col lg="8" class="text-left mt-2 p-2">
        <span class="bg-dark text-white p-1">Définition</span>
        <p class="border border-secondary p-1">
          <em>Un nombre premier</em> est un entier naturel qui a exactement deux diviseurs : 1 et lui-même. <br>
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-left text-justify">
        <p class="p-2">
          <b><u>Exemple:</u></b> <br>
           <ul>
             <li>2, 3, 5, 7, 11, 13, 17, 19 … sont des nombres premiers. <u>Il en existe une infinité.</u> </li>
             <li><em>1 n'est pas un nombre premier</em> , car dans le cas du nombre 1, les deux diviseurs 1 et lui-même ne sont pas distincts : ce sont les mêmes. </li>
           </ul>
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-left">
        <span class="bg-dark text-white p-1">Une méthode pour reconnaître les nombres premiers</span>
        <p class="p-1">
          Pour montrer qu'un nombre entier est premier. il suffit de vérifier qu'il n'est divisible
          par aucun nombre premier inférieur à sa racine carrée.<br>
        </p>

        <p class="p-1">
          <b><u>Exemple:</u></b> <br>
          Le nombre 127 est-il premier ?<br>  
          comme <span v-katex="'\\sqrt{127}=11.27'" class="p-1"></span>, il nous suffit de vérifier que 127 n'est pas divisible par aucun des nombres
          2,3,5,7 et 11.
        </p>
      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
    name: 'PrimeNumberCourse',
    components:{
    }
    
};
</script>

<style>

</style>