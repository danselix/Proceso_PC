//          Creacion de personaje con capacidad de daño y cura para probar funciones en objectos en js

let persona = {
        positivos : {
            humildad: 100,
            generosidad: 100,
            castidad: 100,
            paciencia: 100,
            diligencia: 100,
            alegria: 100,
            templanza: 100
        },
        negativos : {

            soberbia: 100,
            avaricia: 100,
            lujuria: 100,
            ira: 100,
            pereza: 100,
            envidia: 100,
            gula: 100
        }

}

console.log(persona)
 
var daño = {

    //Soberbia
    //Falta de humildad y respeto hacia los demás
    soberbia: function(){
        persona.negativos.soberbia += 50;
        console.log("soberbia aumento 50")
    },

    //Avaricia
    // Falta de generosidad y preocupación exclusiva por uno mismo
    avaricia: function(){
        persona.negativos.avaricia += 50;
        console.log("avaricia aumento 50")
    },

    //Lujuria
    // Falta de castidad y búsqueda de gratificación sexual egoísta.
    lujuria: function(){
        persona.negativos.lujuria += 50;
        console.log("lujuria aumento 50")
    },

    // Ira
    // Falta de paciencia y propensión a la violencia emocional o física.
    ira: function(){
        persona.negativos.ira += 50;
        console.log("ira aumento 50")
    },

    // Pereza
    // Falta de diligencia y falta de compromiso con las responsabilidades
    pereza: function(){
        persona.negativos.pereza += 50;
        console.log("pereza aumento 50")
    },

    // Envidia
    // Falta de generosidad y alegría por el bienestar y éxito de los demás.
    envidia: function(){
        persona.negativos.envidia += 50;
        console.log("envidia aumento 50")
    },

    // Gula
    // Falta de templanza y autodisciplina en el placer y la indulgencia.
    gula: function(){
        persona.negativos.gula += 50;
        console.log("gula aumento 50")
    },
    
    
 }
var curar = {

    // Humildad 
    // Sencillez, respeto y apertura hacia los demás.
    humildad: function(){
        persona.positivos.humildad += 50;
        console.log("humildad aumento 50")
    },
    // Generosidad 
    // Dar y ayudar a los demás sin esperar nada a cambio.
    generosidad: function(){
        persona.positivos.generosidad += 50;
        console.log("generosidad aumento 50")
    },
    // Castidad 
    // Vivir de manera virtuosa y respetuosa en las relaciones.
    castidad: function(){
        persona.positivos.castidad += 50;
        console.log("castidad aumento 50")
    },
    // Paciencia 
    // Tolerancia, serenidad y capacidad para resolver problemas.
    paciencia: function(){
        persona.positivos.paciencia += 50;
        console.log("paciencia aumento 50")
    },
    
    // Diligencia 
    // Persistencia, disciplina y logro de resultados satisfactorios.
    diligencia: function(){
        persona.positivos.diligencia += 50;
        console.log("diligencia aumento 50")
    },
    
    // Alegria 
    // Gozo por el bienestar y éxito de los demás.
    alegria: function(){
        persona.positivos.alegria += 50;
        console.log("alegria aumento 50")
    },

    // Templanza
    // Equilibrio, autodisciplina y bienestar en todas las áreas de la vida..
    templanza: function(){
        persona.positivos.templanza += 50;
        console.log("templanza aumento 50")
    },
    

 }

 //  ////////////////////////////////////////////////////////////////////////////////////////


daño.avaricia();
curar.humildad();
daño.lujuria();
curar.generosidad();

console.log(persona)

