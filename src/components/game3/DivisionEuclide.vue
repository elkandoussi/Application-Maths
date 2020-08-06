<template>
  <div>
    <b-row>
        <b-col>
            <h3>La division euclidienne</h3>
            <b-nav tabs align="center">
                <b-nav-item to="/division-euclidienne/cours" active>Cours</b-nav-item>
                <b-nav-item to="/division-euclidienne/exercices" link-classes="text-dark">Exercices</b-nav-item>
            </b-nav>
        </b-col>
    </b-row>

    <b-row>
        <b-col class="text-left">
            <span class="bg-dark text-white p-1">Théoréme</span>
            <p class="border border-secondary p-1">
                Quels que soient <span v-katex="'a \\in \\mathbb{N}'"></span> et <span v-katex="'b \\in \\mathbb{N}^{*}'"></span>
                <span v-katex="'\\mathbf{( b \\; entier \\geq 1)}'"></span>,il existe un couple unique d'entiers naturels <span v-katex="'(q,r)'"></span> tel que: 
                <span v-katex="'\\quad a = bq + r'"></span> avec  <span v-katex="'0 \\leq r < b'"></span> <br>
                Cette expression s'appelle <em>la division euclidienne de a par b</em>.
                <ul>
                    <li><span v-katex="'q'"></span>: est <em>le quotient euclidien</em> de a par b</li>
                    <li><span v-katex="'r'"></span>: est <em>le reste</em> dans la division euclidienne de a par b</li>
                </ul>
            </p>
            <p class="pl-2">
                <b><u>Exemple:</u></b> <br>
                la division euclidienne de 3618 par 278 : <br>
                <span colorIsTextColor="true" v-katex="'3618= 278 \\textcolor{red}{ \\times 13 +4}'"></span>, 13 est le quotient 
                et 4 c'est le reste.
            </p>
            <p class="pl-2">
                <b><u>Remarque:</u></b> <br>
                <span v-katex="'r=0'"></span> est équivalent à dire que <em>b divise a</em> <span v-katex="'(a=bq)'"></span>
            </p>
        </b-col>
    </b-row>

    <b-row>
        <b-col class="text-left">
            <span class="bg-dark text-white p-1">Propriété (égalité de pgcd)</span> <br>
            <p class="border border-secondary p-1">
                Pour tous les entiers a et b strictement positifs, <em>pgcd(a,b) = pgcd(b,r)</em> où r est le reste
                de la division euclidienne de a par b.
            </p>
            <p>
                Ceci permet de trouver le pgcd entre deux nombres entiers strictement positifs, en utilisant <em>l'algorithme d'Euclide</em>
            </p>
        </b-col>
    </b-row>

    <b-row>
        <b-col class="text-left">
            <span class="bg-dark text-white p-1">Calcul du pgcd: l'agorithme d'Euclide</span>
            <p class="p-2">
                Nous souhaitons calculer le pgcd de <span v-katex="'a \\; et \\; b \\in \\mathbb{N}^{*}'"></span> .<br>
                Nous suppossons que <span v-katex="'a \\geq b'"></span> (sinon nous faisons la permutation : jouer le role de a à b) .<br>
                Nous calculons les divisions euclidiennes successives . <br>
                <em>le pgcd sera le dernier reste non nul.</em> <br>
                Voici comment nous procédons: <br>
            </p>

            <b-list-group>
                <b-list-group-item variant="warning" class="text-dark" >
                    la division de a par b nous donne l'existence de <span v-katex="'q_{1}'"></span> et <span v-katex="'r_{1}'"></span> tels que: 
                    <span v-katex="' a = bq_{1} + r_{1}'" output="html"></span> <br>
                     Nous avons alors: <em> <span v-katex="'pgcd(a,b) = pgcd(b,r_{1})'" output="html"></span> </em> <br>
                           (a) Si : <span v-katex="'r_{1} = 0'"></span> ,alors : <span v-katex="'pgcd(a,b) = b'"></span>. <br>
                           (b) Sinon on continue à l'étape suivante.
                </b-list-group-item>
                <b-list-group-item>
                    la division de b par <span v-katex="'r_{1}'"></span> nous donne l'existence de <span v-katex="'q_{2}'"></span> et <span v-katex="'r_{2}'"></span> tels que: 
                    <span v-katex="' b =  r_{1}q_{2} + r_{2}'"></span> <br>
                    Nous avons alors: <em> <span v-katex="'pgcd(b,r_{1})=pgcd(r_{1},r_{2})'" output="html"></span> </em> <br>
                        (a) Si : <span v-katex="'r_{2} = 0'"></span> ,alors : <span v-katex="'pgcd(b,r_{1}) = r_{1}'"></span>. <br>
                        (b) Sinon on continue à l'étape suivante.
                </b-list-group-item>
                <b-list-group-item variant="warning" class="text-dark">
                    la division de <span v-katex="'r_{1}'"></span> par <span v-katex="'r_{2}'"></span> nous donne l'existence de <span v-katex="'q_{3}'"></span> et <span v-katex="'r_{3}'"></span> tels que: 
                    <span v-katex="' r{1} = r_{2}q_{3} + r_{3}'" output="html"></span> <br>
                    Nous avons alors: <em> <span v-katex="'pgcd(r_{1},r_{2})=pgcd(r_{2},r_{3})'" output="html"></span> </em> <br>
                        (a) Si : <span v-katex="'r_{3} = 0'"></span> ,alors : <span v-katex="'pgcd(r_{1},r_{2}) = r_{2}'"></span>. <br>
                        (b) Sinon on continue à l'étape suivante.
                </b-list-group-item>
                <b-list-group-item class="text-center">
                        ................................................ <br>
                          
                        <em>nous continuons jusqu'à arriver au reste nul, c'est à dire :</em>
                </b-list-group-item>
                <b-list-group-item variant="warning" class="text-dark">
                    la division de <span v-katex="'r_{n-1}'"></span> par <span v-katex="'r_{n-2}'"></span> nous donne l'existence de <span v-katex="'q_{n}'"></span> et <span v-katex="'r_{n} = 0'"></span> . <br>
                    tels que: <span v-katex="' \\textcolor{red}{r_{n-1} = r_{n-2}q_{b} + 0}'" output="html" colorIsTextColor="true"></span>, nous avons alors : <br>
                    <span
                        v-katex="'pgcd(a,b) = pgcd(b,r_{1}) = pgcd(r_{1},r_{2}) = .... = pgcd(r_{n-1},r_{n-2}) = pgcd(r_{n-2},0) = \\textcolor{red}{r_{n-2}}'" colorIsTextColor="true">
                    </span>
                </b-list-group-item>
            </b-list-group>
        </b-col>
    </b-row>
    <b-row>
        <b-col class="text-left">
            <p class="p-4">
                <b><u>Exemple:</u></b> Calculer le <span v-katex="'pgcd(243,198)'"></span> <br>
            </p>
            <p class="text-center">
                <span v-katex="' 248 = 198 \\times 1 + 45'" output="html"></span> <br>
                <span v-katex="' 198 = 45 \\times 4 + 18'" output="html"></span> <br>
                <span v-katex="' 45 = 18 \\times 2 + 9'" output="html"></span> <br>
                <span v-katex="' 18 = 9 \\times 2 + 0'" output="html"></span>
            </p>
            <p class="text-center ">
                <em>
                   Donc:  <span v-katex="'\\quad pgcd(248,198) = 9'" output="html"></span> (le dernier reste non nul).
                </em>
            </p>
            
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: 'DivisionEuclide'
}
</script>

<style>

</style>