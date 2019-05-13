var app = new Vue({
    el:'#app',
    data:{
        product:'Squier Stratocaster',
        marca:'Fender',
        description: 'Cuerpo de caoba y mastil de arce',
        selectedColor: 0,
        url: 'https://github.com/TeoBotta/VueJS',
        inventory: 20,
        /* inStock: true, */
        details: ["Tres pastillas de bobina simple con selector de cinco posiciones", "Puente con palanca de vibrato estilo vintage synchronized", "Numero de Frets: 21"],
        colors:[
            {
                colorID: 1,
                colorName: "Degradado",
                colorImagen: "assets/strato_burn.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/brown-sunburst.png)",
                colorCantidad:10
            },
            {
                colorID: 2,
                colorName: "Degradado 2",
                colorImagen: "assets/strato_2color.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/2-color-sunburst.png)",
                colorCantidad:10
            },
            {
                colorID: 3,
                colorName: "Negro",
                colorImagen: "assets/strato_negra.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/black.png)",
                colorCantidad:0
            },
            {
                colorID: 4,
                colorName: "Rojo",
                colorImagen: "assets/strato_roja.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10002/race-red.png)",
                colorCantidad:10
            },
            {
                colorID: 5,
                colorName: "Celeste",
                colorImagen: "assets/strato_surfgreen.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10003/surf-green.png)",
                colorCantidad:0
            }
        ],
        cart: 0
    },
    methods:{
        agregarAlCarro: function () {
            this.cart += 1
        },
        restarDelCarro () {
            this.cart -= 1
        },
        cambiarImagen: function (index) {
            this.selectedColor = index
            console.log(index)
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
