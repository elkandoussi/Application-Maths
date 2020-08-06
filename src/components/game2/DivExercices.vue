<template>
  <div>
      <b-row>
         <b-col>
            <h3>Les critéres de divisibilité</h3>
               <b-nav tabs align="center">
                   <b-nav-item to="/divisible/cours" link-classes="text-dark">Cours</b-nav-item>
                   <b-nav-item to="/divisible/exercices"  active>Exercices</b-nav-item>
               </b-nav>
           </b-col>
      </b-row>

      <b-row>
         <b-col>
            <span class="text-secondary font-italic">Attention, plusieurs réponses sont possibles.</span>
         </b-col>
      </b-row>

      <div v-for="(number,index) in numbers" :key="number">
         <div-exercice :number="number" :index="index+1"></div-exercice>
      </div>
  </div>
   
</template>

<script>
import DivExercice from './DivExercice'

export default {
   name: 'DivExercices',
   components: {
      DivExercice
   },
   data(){
      return {
         numbers: [20,15,30]
      }
   },
   methods: {
      generer(){
         var values = []
         var i = 1
         do{
            const n = parseInt(Math.random()*1000*i)+50
           if(n%2 == 0 || n%3==0 || n%5==0 || n%6==0 || n%7==0 || n%9==0 || n%10==0 || n%11==0){
              values.push(n)
              i = i*5
           }
           console.log(values.length)

         }while(values.length != 5)
         
         return values
      }
   },
   created(){
      this.numbers = this.generer()
   }
}
</script>

<style>

</style>