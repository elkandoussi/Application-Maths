<template>
   <div>
       <b-row>
           <b-col>
               <h3>Les critéres de divisibilité</h3>
               <b-nav tabs align="center">
                   <b-nav-item to="/divisible/cours" active>Cours</b-nav-item>
                   <b-nav-item to="/divisible/exercices" link-classes="text-dark" >Exercices</b-nav-item>
               </b-nav>
           </b-col>
       </b-row>

       <b-row class=""> 
            <b-col class="text-left mt-2" lg="11">
                <span class="bg-dark text-white p-1">Définition</span> <br>
                <p class="border border-secondary p-1"><em>La divisibilité</em> est une propriété qui indique qu'un nombre peut être entièrement 
                divisé par un autre nombre, c'est-à-dire sans reste.</p>
                <p class="pl-2">
                    <b><u>Exemple:</u></b> <br>
                    <span v-katex="'54 \\div 6 = 9'"></span> reste 0, donc 54 est divisible par 6. <br>
                    <span v-katex="'22 \\div 5 = 4'"></span> reste 2, donc 22 n'est pas divisible par 2.
                </p>
                <p class="pl-2">
                    <b><u>Remarque:</u></b> si <em>b est divisble par a</em> , on note : <span v-katex="'a \\mid b'"></span>.
                     <em>(se prononce:  a divise b ou : a est un diviseur de b)</em>
                </p>
            </b-col>
        </b-row>

        <b-row class="">
            <b-col class="text-left" lg="8">
                <span class="bg-dark text-white p-1">Propriétes de divisibilités</span>
                <p class="border border-secondary p-1">
                    Soit a,b, et c des nombres entiers relatifs.
                    <ul>
                        <li>Si: <span v-katex="'\\mathbf{a \\mid b} \\;'"></span>  et <span v-katex="'\\; \\mathbf{b \\mid c}' "></span> ,alors: <span v-katex="'\\mathbf{a \\mid c}'"></span></li>
                        <li>Si: <span v-katex="'\\mathbf{a \\mid b} \\;'"></span>  et <span v-katex="'\\; \\mathbf{b \\mid a}'"></span> ,alors: (<span v-katex="'a=b'"></span> ou <span v-katex="'a=-b'"></span>)</li>
                        <li>Si! <span v-katex="'\\mathbf{a \\mid b} \\;' "></span> et <span v-katex="'\\; \\mathbf{a \\mid c}'"></span> ,alors: <span v-katex="'\\forall x,y \\in \\mathbb{Z} \\quad a \\mid bx+cy'"></span></li>
                    </ul>
                </p>
                <p class="pl-2">
                    <b><u>Exemple:</u></b> <br>
                    Le nombre 1734 est-il divisible par 17 ? <br>
                    En remarquent que :  1734 = 1700 + 34 , on voit que: 1734 est la somme de deux nombres divisibles par 17. <br>
                    1734 donc est divisible par 17.
                </p>
            </b-col>
        </b-row>
        
        <b-row>
            <b-col class="text-justify">
                <p class="p-lg-3">
                    <span class="bg-info text-white p-2 mr-2"><b-icon icon="info-circle"></b-icon></span>Il existe des critères qui permettent de déterminer rapidement si un nombre est divisible par un nombre donné.
                    On appelle ces critères <em>les critères de divisibilité</em>.
                </p>
            </b-col>
        </b-row>

        <b-row class="justify-content-lg-center">
            <b-col class="text-left" lg="10">
                
                 <b-list-group >
                        <b-list-group-item variant="secondary"> 
                            Un nombre entier est <em>divisible par 2</em> si son chiffre des unités est <em>0 ; 2 ; 4 ; 6 ou 8</em>. <br>
                            Exemple: 22 est divisible par 2. 
                        </b-list-group-item>

                        <b-list-group-item>
                            Un nombre entier est <em>divisible par 3</em> si la somme de ses chiffres est <em>un multiple de 3</em> ( 3,6,9,12...). <br>
                            Exemple: 534 est divisible par 3, car 5+3+4 = 12 et 12 est un multiple de 3.
                        </b-list-group-item>
                        <b-list-group-item variant="secondary">
                            Un nombre entier est <em>divisible par 4</em> si le nombre formé par ses deux derniers chiffres est <em>un multiple de 4</em>. <br>
                            Exemple: 1 028 est divisible par 4, car 28 est un multiple de 4 (28 = 4*7).
                        </b-list-group-item>
                        <b-list-group-item>
                            Un nombre entier est <em>divisible par 5</em> si son chiffre des unités est <em>0 ou 5</em>. <br>
                            Exemple: 175 est divisible par 5 car son chiffre des unités est 5.
                        </b-list-group-item>
                        <b-list-group-item variant="secondary">
                            Un nombre est <em>divisible par 6</em> s’il est <em>pair et divisible par 3</em>. <br>
                            Exemple : prenons 234. <br>C’est un nombre pair. La somme des chiffres est 9. Il est divisible par 3, d’où il est divisible par 6.
                        </b-list-group-item>
                        <b-list-group-item>
                           <p>
                                Un nombre est <em>divisible par 7</em> si la somme de son nombre de dizaines et de cinq fois de son chiffre des unités 
                                est un multiple de 7. 
                           </p>
                            <p>
                               Soit un nombre N. On effectue la division euclidienne de N par 10: <span v-katex="'N = 10a + b'"></span> <br>
                               Alors N est divisible par 7 si et seulement si <spanv- v-katex="'a+5b'"></spanv-> est divisible par 7  <br>
                            </p>
                            Exemple : 2492 est-il divisible par 7? <br>
                            On a : <span v-katex="'N_{0} = 2492 = 249 \\times 10 + 2'"></span>,on remarque : 
                           <span v-katex="'249 + 5 \\times 2 = 259 = N_{1}'"></span>, et <span v-katex="'N_{1}=251= 25 \\times 10 +9'"></span> <br>
                           Puisque : <span v-katex="'25 + 5 \\times 9 = 70'"></span> est divisible par 7. <br>
                           Alors: 2492 est divisible par 7.
                        
                        </b-list-group-item>
                        <b-list-group-item variant="secondary">
                            Un nombre entier est <em>divisible par 9</em> si la somme de ses chiffres est <em>un multiple de 9</em> (9 ; 18 ; 27 ; etc.). <br>
                            Exemple: 576 est divisible par 9 car 5 + 7 + 6 = 18 et 18 = 2 × 9 (multiple de 9).
                        </b-list-group-item>
                        <b-list-group-item>
                            Un nombre entier est <em>divisible par 10</em> si son chiffre des unités est 0.  <br>
                            Exemple: 780 est divisible par 10 car son chiffre des unités est 0.
                        </b-list-group-item>
                        <b-list-group-item variant="secondary">
                            Pour déterminer si un nombre entier N est <em>divisible par 11</em>, on calcule: <br>
                                - la somme A de ses chiffres en position impaire. <br>
                                - la somme B de ses chiffres en position paire. <br>
                            <em>N est divisible par 11</em> si et seulement si: la différence <span v-katex="'A-B (ou: B-A)'"></span>
                            est <em>nulle ou un multiple de 11</em>. <br>
                            Exemple : considérons le nombre <span v-katex="'19382'"></span>
                            <ul>
                                <li>la somme de ses chiffres en position impaire : <span v-katex="'A = 1+3+2 = 6'"></span></li>
                                <li>la somme de ses chiffres en position paire : <span v-katex="'B = 9+8 = 17'"></span></li>
                                <li>On a : <span v-katex="'B-A=17-6=11'"></span>, Alors:  <span v-katex="'19382'"></span> est divisible par 11.</li>
                            </ul>
                  
                        </b-list-group-item>
                    </b-list-group>
            </b-col>
        </b-row>
               
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>