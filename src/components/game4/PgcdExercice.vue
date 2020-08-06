<template>
        <b-row class="justify-content-center mt-2">
            <b-col cols="8" lg="6" class="text-left border border-secondary p-3">
                <span class="bg-dark text-white p-1">Exercice {{index}}</span> <br>
                <p>Déterminer le pgcd de {{a}} et de {{b}}.</p>
                
                <form @submit.prevent="isSubmit">
                    <div class="form-group form-inline">
                        <label for="pgcd"><em>PGCD({{a}},{{b}}) = </em> </label>
                        <b-input type="number" name="pgcd" id="pgcd" :state="state" > </b-input>
                    </div>
                    <p class="text-center mt-2">
                        <b-button type="submit" variant="success" class="rounded-pill">Valider</b-button>
                    </p>
                </form>  
            </b-col>     
       </b-row>
</template>

<script>
export default {
    name: 'PgcdExercice',
    props: ['a', 'b', 'index'],
    data(){
        return {
           state: null
        }
    },
    methods: {
        pgcd:  function(a,b){
            var r;
            while(r != 0){
                r = a%b;
                
                a = b;
                b = r;
            }

            return a;
        },
        isSubmit: function(e){
            if(parseInt(e.target.pgcd.value) == this.pgcd(this.a,this.b)){
                console.log(true);
                this.state = true;
            }else{
                console.log(false)
                this.state = false;
            }
            
        }
    }
}
</script>

<style>

</style>