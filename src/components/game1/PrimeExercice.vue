<template>
  <b-row align-h="center">
      <b-col cols="8" lg="6" class="text-left border border-secondary p-3">
          <span class="bg-dark text-white p-1">Exercice {{index}}</span>
          
          <b-alert show variant="success" v-if="isValid" v-show="alert">Bravo, la réponse est correcte </b-alert>
          <b-alert show variant="danger" v-else v-show="alert">Votre réponse est incorrecte, essayer une autre foix</b-alert>

          <p class="">Le nombre {{number}} est-il premier ?</p>

          <form @submit.prevent="isSubmit" >
            <input type="radio" name="radios" id="radio1"  value="true">
            <label for="radio1">Oui</label> <br>
 
            <input type="radio" name="radios" id="radio2" value="false">
            <label for="radio2">Non</label>  <br>
          
            <p class="text-center">
              <b-button type="submit" variant="success" class="rounded-pill">Valider</b-button>
            </p>
          </form>         
      </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Exercice',
  props: ['number', 'index'],
  data: function(){
    return {
      isValid: false,
      alert: false
    }
  },
  methods: {
    isSubmit: function(e){
       if(e.target.radios.value == this.isPrime(this.number)){
         this.isValid = true;
         this.alert = true;
       }else{
         this.isValid = false;
         this.alert = true;
       }
      
    },
    isPrime: function(number){
      for(var i=2; i < number; i++){
        
        if(number % i == 0){
          return 'false';
        }
      }
      return 'true';
    }
  }
  
}
</script>

<style>

</style>