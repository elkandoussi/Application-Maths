<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h1>L'Arithmétique dans <span v-katex="'\\mathbb{N}'" output="html"></span></h1>
        <hr class="w-50 border-dark">
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" lg="4" class="mt-2">
        <b-card title="Nombres premiers" class="shadow border border-info">
          <b-card-text>
            Déterminer si un nombre entier est
            <em>premier</em>,
          </b-card-text>

          <b-link to="/nombre-premier/cours" class="card-link">Résumer</b-link>
          <b-link to="/nombre-premier/exercices" class="card-link">Exercices</b-link>
        </b-card>
      </b-col>

      <b-col cols="6" lg="4" class="mt-2">
        <b-card title="Critéres de divisibilité" class="shadow border border-info">
          <b-card-text>
            Appliquer <em>les critéres de divisibilité</em> par 2,3,4,5,6,7,9,10,et 11.
          </b-card-text>

          <b-link to="/divisible/cours" class="card-link">Résumer</b-link>
          <b-link to="/divisible/exercices" class="card-link">Exercices</b-link>
        </b-card>
      </b-col>
      
      <b-col cols="6" lg="4" class="mt-2">
        <b-card title="Division euclidienne" class="shadow border border-info">
          <b-card-text>
            Découvrir <em>la division euclidienne</em> entre deux nombres entiers positifs.
          </b-card-text>

          <b-link to="/division-euclidienne/cours" class="card-link">Résumer</b-link>
          <b-link to="/division-euclidienne/exercices" class="card-link">Exercices</b-link>
        </b-card>
      </b-col>
      
      
      <b-col cols="6" lg="4" class="mt-2">
        <b-card title="PGCD" class="shadow border border-info">
          <b-card-text>
            Déterminer
            <em>le plus grand commun diviseur</em> entre deux nombres entiers,
          </b-card-text>

          <b-link to="/pgcd/cours" class="card-link">Résumer</b-link>
          <b-link to="/pgcd/exercices" class="card-link">Exercices</b-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
