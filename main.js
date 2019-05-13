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
                colorImagen: "assets/strato_burn.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/brown-sunburst.png)"
            },
            {
                colorID: 2,
                colorName: "Degradado 2",
                colorImagen: "assets/strato_2color.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/2-color-sunburst.png)"
            },
            {
                colorID: 3,
                colorName: "Negro",
                colorImagen: "assets/strato_negra.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10001/black.png)"
            },
            {
                colorID: 4,
                colorName: "Rojo",
                colorImagen: "assets/strato_roja.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10002/race-red.png)"
            },
            {
                colorID: 5,
                colorName: "Celeste",
                colorImagen: "assets/strato_surfgreen.jpg",
                colorBox: "url(https://www.fmicassets.com/Damroot/Original/10003/surf-green.png)"
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
