<template>
 <div>
  <b-row>
    <b-col>
      <h3>La division euclidienne</h3>
        <b-nav tabs align="center">
          <b-nav-item to="/division-euclidienne/cours" link-classes="text-dark">Cours</b-nav-item>
          <b-nav-item to="/division-euclidienne/exercices" active>Exercices</b-nav-item>
       </b-nav>
    </b-col>
    </b-row>

    <div>
      <division-exercice-1 :index="1"></division-exercice-1>
      <division-exercice-1 :index="2"></division-exercice-1>
      <division-exercice-1 :index="3"></division-exercice-1>
      <division-exercice-2></division-exercice-2>
    </div>
  </div>
</template>

<script>
import DivisionExercice1 from './DivisionExercice1'
import DivisionExercice2 from './DivisionExercice2'

export default {
   name: 'DivisionExercices',
   components: {
     'division-exercice-1' :DivisionExercice1,
     'division-exercice-2' :DivisionExercice2
   }
}
</script>

<style>

</style>