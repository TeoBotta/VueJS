var app = new Vue({
    el:'#app',
    data:{
        product:'Fender Squier Stratocaster',
        description: 'Cuerpo de caoba y mastil de arce',
        image: 'assets/strato_burn.jpg',
        url: 'https://github.com/TeoBotta',
        inventory: 20,
        inStock: true,
        details: ["Tres pastillas de bobina simple con selector de cinco posiciones", "Puente con palanca de vibrato estilo vintage synchronized", "Numero de Frets: 21"],
        colors:[
            {
                colorID: 1,
                colorName: "Degradado",
                colorImagen: "assets/strato_burn.jpg"
            },
            {
                colorID: 2,
                colorName: "Degradado 2",
                colorImagen: "assets/strato_2color.jpg"
            },
            {
                colorID: 3,
                colorName: "Negro",
                colorImagen: "assets/strato_negra.jpg"
            },
            {
                colorID: 4,
                colorName: "Rojo",
                colorImagen: "assets/strato_roja.jpg"
            },
            {
                colorID: 5,
                colorName: "Celeste",
                colorImagen: "assets/strato_surfgreen.jpg"
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
        cambiarImagen: function (colorImagen) {
            this.image = colorImagen
        }
    }
})
