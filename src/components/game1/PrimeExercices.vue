<template>

<div>
  <div>
    <b-row>
      <b-col cols="12">
        <h3>Nombres premiers</h3>
        <b-nav tabs align="center">
          <b-nav-item to="/nombre-premier/cours" link-classes="text-dark">Cours</b-nav-item>
          <b-nav-item to="/nombre-premier/exercices" active>Exercices</b-nav-item> 
        </b-nav>
      </b-col>
    </b-row>

    <div v-for="(number,index) in numbers" :key="number" class="m-2">
      <prime-exercice :number="number" :index="index+1"> </prime-exercice>
    </div>
  </div>
</div>
  
</template>

<script>
import PrimeExercice from './PrimeExercice.vue'

export default {
  name: 'PrimeExercices',
  components: {
    PrimeExercice
  },
  data: function(){
      return {
        numbers: '',
      }
  },
  methods: {
    generer: function(){
      var values = []

      do{
        const number = parseInt(Math.random()*300) + 100
        if(!values.includes(number)){
            values.push(number)       
        }
      }while(values.length != 5)
        
      return values
    },
    isPrime: function(number){
      for(var i=2; i < number; i++){
        
        if(number % i == 0){
          return 'false';
        }
      }
      return 'true';
    }
  },
  created(){
    this.numbers = this.generer()
  }

}
</script>

<style>

</style>