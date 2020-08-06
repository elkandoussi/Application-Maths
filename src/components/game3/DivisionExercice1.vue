<template>
  <b-row class="justify-content-center mt-2">
      <b-col class="text-left border border-secondary p-3" cols='10' lg="8">
          <span class="bg-dark text-white p-1">Exercice {{index}}</span>
          <p class="p-2">
             Dans une  division euclidienne de {{a}} par {{b}}, <em>déterminer</em>  : 
            <b-form @submit.prevent="isSubmit">
                
                <div class="form-group form-inline row">
                   <label for="quotient" class="col-3"> quotient <span v-katex="'\\; (q)'"></span>: </label>
                   <b-form-input type="number" id="quotient" class="col-3" v-model="quotient" :state="quotientState"></b-form-input>
                </div>
                
                <div class="form-group form-inline row">
                    <label for="reste" class="col-3"> reste <span v-katex="'\\; (r)'"></span>: </label>
                    <b-form-input type="number" id="reste" class="col-3" v-model="reste" :state="resteState"></b-form-input>
                </div>

                <div class="text-center">
                    <b-button type="submit" variant="success" class="rounded-pill">Valider</b-button>
                </div>
            </b-form>
          </p>

      </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'DivisionExercice1',
  props: ['index'],
  data(){
      return {
          a: 15,
          b: 6,
          quotient: '',
          reste: '',
          quotientState: null,
          resteState: null,
          alert : ''
      }
  },
  methods: {
      isSubmit: function(){
          const r = this.a % this.b
          const q = (this.a - r)/this.b

          if(this.quotient == q && this.reste == r){
               this.quotientState = true
               this.resteState = true
          }else if(this.quotient == q && this.reste != r){
              this.quotientState = true
              this.resteState = false
          }else if(this.quotient != q && this.reste == r){
              this.quotientState = false
              this.resteState = true
          }else{
              this.quotientState = false
              this.resteState = false
          }

          console.log('quotient :'+q)
          console.log('reste: '+r)
      }
  },
  created(){
      do{
          this.a = parseInt(Math.random()*1200) + 100
          this.b = parseInt(Math.random()*200) + 100
      }while(this.a <= this.b)
  }
}
</script>

<style>

</style>