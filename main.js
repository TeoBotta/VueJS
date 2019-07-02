Vue.component('caracteristicas',{
    template:`
    <div>
    <p>Caracteristicas:</p>
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    </div>
    `,
    data() {
        return {
            details: ["Tres pastillas de bobina simple con selector de cinco posiciones", "Puente con palanca de vibrato estilo vintage synchronized", "Numero de Frets: 21"]
        }
    }
})

Vue.component('product',{
    template:`
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image">
        </div>
        <div class="product-info">
            <h1>{{ prodtitle }}</h1>
            <h3>{{ description }}</h3>
            <a v-bind:href="url" target="_blank">Enlace a repositorio de la pagina</a>
            
<!--        COMENTADO POR INNECESIDAD DE USO, PERO PARA RECORDAR LA SINTAXIS
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock</p>
            <p v-else>Out of Stock</p>
 -->
            <p v-if="inStock">En Stock ({{inStock}})</p>
            <p v-else>Sin Stock</p>
<!--        CARACTERISTICAS COMENTADAS DADO QUE PASARON A UN COMPONENTE
            <p>Caracteristicas:</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
-->
            <caracteristicas></caracteristicas>
            <p>Variantes de color:</p>
            <div v-for="(color,index) in colors" :key ="color.colorID" class="color-box" :style="{backgroundImage: color.colorBox}" @click="cambiarImagen(index)">
                <!-- <p @mouseover="cambiarImagen(color.colorImagen)">{{color.colorName}}</p> -->
            </div>
        </div>

            <button v-on:click="agregarAlCarro" :disabled="!inStock" :class="{disabledButton: !inStock}">+</button>
            <button @click="restarDelCarro">-</button>

        <div>
            <h2>Reviews</h2>
            <p v-if="!resenias.length">No hay reviews sobre este producto</p>
            <ul>
                <li v-for="resenia in resenias">
                <p>Usuario: {{resenia.name}}</p>
                <p>Opinion: {{resenia.review}}</p>
                <p>Puntaje: {{resenia.rating}}</p>
                <p>Recomendaria: {{resenia.reco}}</p>
                </li>
            </ul>
        </div>
        <review @review-submitted="agregarReview"></review>
    </div>
    `,
    data(){
        return {
            product:'Squier Stratocaster',
            marca:'Fender',
            description: 'Cuerpo de caoba y mastil de arce',
            selectedColor: 0,
            url: 'https://github.com/TeoBotta/VueJS',
            inventory: 20,
            colors:[
                {
                    colorID: 0,
                    colorName: "Degradado",
                    colorImagen: "assets/strato_burn.jpg",
                    colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/brown-sunburst.png)",
                    colorCantidad:10
                },
                {
                    colorID: 1,
                    colorName: "Degradado 2",
                    colorImagen: "assets/strato_2color.jpg",
                    colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/2-color-sunburst.png)",
                    colorCantidad:7
                },
                {
                    colorID: 2,
                    colorName: "Negro",
                    colorImagen: "assets/strato_negra.jpg",
                    colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/black.png)",
                    colorCantidad:0
                },
                {
                    colorID: 3,
                    colorName: "Rojo",
                    colorImagen: "assets/strato_roja.jpg",
                    colorBox: "url(https://www.fmicassets.com/Damroot/Original/10002/race-red.png)",
                    colorCantidad:10
                },
                {
                    colorID: 4,
                    colorName: "Celeste",
                    colorImagen: "assets/strato_surfgreen.jpg",
                    colorBox: "url(https://www.fmicassets.com/Damroot/Original/10003/surf-green.png)",
                    colorCantidad:0
                }
            ],
            resenias:[]
        }
    },
    methods:{
        agregarAlCarro: function () {
            this.$emit('agregar-al-carro', this.colors[this.selectedColor].colorID)
        },
        restarDelCarro () {
            this.$emit('restar-al-carro', this.colors[this.selectedColor].colorID)
        },
        cambiarImagen: function (index) {
            this.selectedColor = index
            console.log(index)
        },
        agregarReview (productReview) {
            this.resenias.push(productReview)
        }
    },
    computed: {
        prodtitle() {
            return this.marca + ' ' +this.product
        },
        image() {
            return this.colors[this.selectedColor].colorImagen
        },
        inStock() {
            return this.colors[this.selectedColor].colorCantidad
        }
    }

})
 
Vue.component('review', {
    template:`
    <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors">
            <b>Falta completar los siguientes campos:</b>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p>
        <p>
            <label for="name">Nombre:</label>
            <input id="name" v-model="name" placeholder="name">
        </p>
        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
            <label for="rating">Puntaje:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
        <p>
            <label for="reco">Recomendaria el producto?</label>
            <select id="reco" v-model.number="reco">
                <option>Si</option>
                <option>No</option>
            </select>
        </p>
        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            reco: null,
            errors:[]
        }
    },
    methods:{
        onSubmit() {
            if(this.name && this.review && this.rating && this.reco){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    reco: this.reco,
                }
                this.$emit('review-submitted', productReview)
                this.name=null
                this.review=null
                this.rating=null
                this.reco=null
                this.errors=[]
            } else {
                this.errors=[]
                if(!this.name) this.errors.push("Se debe ingresar un nombre")
                if(!this.review) this.errors.push("Se debe ingresar una opinion")
                if(!this.rating) this.errors.push("Se debe ingresar un puntaje")
                if(!this.reco) this.errors.push("Se debe ingresar una opcion de recomendacion")
            }
        }
    }
})


var app = new Vue({
    el:'#app',
    data: {
        cart: []
    },
    methods: {
        actualizarCarroS (id){
            this.cart.push(id)
        },
        actualizarCarroR (id) {
            for(i=0; i<this.cart.length; i++){
                if(this.cart[i] == id){
                    this.cart.splice(i,1);
                    break;
                }
            }
        }
    }
})
