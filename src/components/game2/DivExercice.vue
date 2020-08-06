<template>
    <b-row class="justify-content-center mt-2">
        <b-col class="text-left border border-secondary p-3" cols="8">
            <span class="bg-dark text-white p-1">Exercice {{index}}</span> <br>
            
            <p><b>le nombre {{number}} est (divisible par) :</b></p>
            <b-alert :show="showAlert" :variant="variant"> {{alert}}</b-alert>

            <b-form @submit.prevent="isSubmit">
                <div class="row justify-content-around">
                    <b-form-checkbox-group :options="options1"  stacked v-model="selected" :state="state"></b-form-checkbox-group>
                    <b-form-checkbox-group :options="options2" stacked v-model="selected" :state="state"></b-form-checkbox-group>
                </div>
                <div class="text-center p-1">
                    <b-button type="submit" variant="success" class="rounded-pill">valider</b-button>
                </div>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: "DivExercice",
  props: ['number', 'index'],
  data(){
      return {
          selected: [],
          state: null,
          alert: '',
          variant: '',
          showAlert: null,
          options1: [
              { text: 'divisible par 2', value: 2 },
              { text: 'divisible par 3', value: 3 },
              { text: 'divisible par 5', value: 5},
              { text: 'divisible par 6', value: 6},
          ],
          options2: [
              {text: 'divisible par 7', value: 7},
              {text: 'divisible par 9', value: 9},
              {text: 'divisible par 10', value: 10},
              {text: 'divisible par 11', value: 11}
          ]
      }
  },
  methods:{
        isSubmit: function(){
            if(this.selected.length == 0){
                this.state = null
                this.showAlert = false
            }else{
            for(const value of this.selected){
               if(this.number % value != 0){
                   this.state = false;   
                   this.alert = 'Erreur : '+value+' ne divise pas '+this.number;
                   this.variant = 'danger'
                   this.showAlert = true
                   return;
               }
            }

            
            for(const d of this.diviseurs(this.number)){
                if(!this.selected.includes(d)){
                    console.log('insuffit')
                    this.state = true;
                    this.alert = 'la réponse est insuffisante: '+d+' est un divisieur de '+this.number
                    this.variant = 'warning'
                    this.showAlert = true
                    return
                }
            }
            
            this.state = true;
            this.alert = 'Bravo, la réponse est correcte !'
            this.variant = 'success'
            this.showAlert = true
            return
   }
        },
        diviseurs: function(n){
            var diviseurs = [2,3,5,6,7,9,10,11];
             
                return   diviseurs.filter(function(d){
                           if(n%d == 0){ return d;  }  
                       })
        }
    }
}  

</script>

<style>

</style>