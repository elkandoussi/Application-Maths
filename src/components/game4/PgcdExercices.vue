<template>
  <div>
        <b-row>
            <b-col>
                <h3>PGCD </h3>
                    <b-nav tabs align="center">
                    <b-nav-item to="/pgcd/cours" link-classes="text-dark">Cours</b-nav-item>
                <b-nav-item to="/pgcd/exercices" active>Exercices</b-nav-item> 
                </b-nav>
            </b-col>
        </b-row>
        
         <div v-for="value in values" :key="value[0]">
        
             <pgcd-exercice :index="value[0]" :a="value[1]" :b="value[2]"></pgcd-exercice>
        </div>   
      
        
            
  </div>
</template>

<script>
import PgcdExercice from './PgcdExercice'

export default {
    name: 'PgcdExercices',
    components: {
        PgcdExercice
    },
    data(){
        return{
            values: ''
        }
    },
    methods: {
        generer: function(){
            var values = [];
         
            for(var i=1; i<=5; i++){
                const a = parseInt(Math.random()*i*1000) + 20;
                const b = parseInt(Math.random()*i*200) + 20;
                
                values.push([i, a, b])
            }
             
            return values
        },
    },
    
        created(){
            console.log(this.generer())
            this.values = this.generer()
        }
    
}
</script>

<style>

</style>