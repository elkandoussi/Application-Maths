<template>
  <b-row class="justify-content-center mt-2">
      <b-col lg="8" cols="10" class="text-left border border-info p-3">
           <span class="bg-info text-white p-1">Probléme: Partager un gâteau pour des invités</span>
           <p class="p-2">
               Pour son anniversaire, Salma a confectionné {{b}} gâteaux au chocolat identiques. <br>
               En combien de parts devra-t-elle couper chaque gâteau pour servir une part à chacun de ses {{a}} invités ?
           </p>
           <b-form @submit.prevent="isSubmit">

                <div class="form-group form-inline row">
                    <label for="nbrParts" class="col-6">Nombres des parts :</label>
                    <b-form-input type="number" id="nbrParts" v-model="nbrParts" class="col-3" :state="state1"></b-form-input>
                </div>

                <div class="form-group form-inline row">
                    <label for="reste" class="col-6">Combient reste-il des parts de gâteau ?</label>
                    <b-form-input type="number" id="reste" v-model="reste" class="col-3" :state="state2"></b-form-input>
                </div>
               
               <div class="text-center">
                   <b-button type="submit" variant="success" class="rounded-pill">Valider</b-button>
               </div>
           </b-form>
      </b-col>
  </b-row>
</template>

<script>
export default {
   name: 'DivisionExercice2',
   data(){
       return {
           a: '',
           b: '',
           nbrParts: '',
           reste: '',
           state1: null,
           state2: null
       }
   },
   methods: {
       isSubmit: function(){
            var nbrParts = this.b
                  
                
               while(nbrParts < this.a){
                     if(nbrParts >= this.a){
                         break;
                         }
                    nbrParts += this.b
               }
            
           
           const reste = nbrParts - this.a

           if(this.nbrParts == nbrParts ){
               this.state1 = true
           }else{
               this.state1 = false
           }

           if(this.reste == reste ){
               this.state2 = true
           }else{
               this.state2 = false
           }
       }
   },
   created(){
       
       this.b = parseInt(Math.random()*10) + 20
       this.a = this.b + 40
   }
}
</script>

<style>

</style>