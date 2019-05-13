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
                colorName: "Degradado"
            },
            {
                colorID: 2,
                colorName: "Degradado 2"
            },
            {
                colorID: 3,
                colorName: "Negro"
            },
            {
                colorID: 4,
                colorName: "Rojo"
            },
            {
                colorID: 5,
                colorName: "Celeste"
            }
        ]
    }
})
