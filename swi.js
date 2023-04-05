function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

class Quiz {
    constructor(al, fr) {
      this.al = al;
      this.fr = fr;
    }
}

/*// Die Welt der Mädchen (Station 1)
var a = new Quiz("Er war einmal...","Il était une fois")
var b = new Quiz("das Märchen(-)","le conte")
var c = new Quiz("märchenhaft","féérique")
var d = new Quiz("die Märchenwelt","l'univers du conte")
var e = new Quiz("Märchen erzählen","raconter des histoires")
var f = new Quiz("Märchen sammeln","collecter des contes")
var g = new Quiz("mündlich überliefern","transmettre oralement")
var h = new Quiz("um/arbeiten","remanier, retravailler")

// Märchen und Moral (Station 1)
var i = new Quiz("eine Botschaft vermitteln","transmettre en message")
var j = new Quiz("eine Moral lehren","enseigner une morale")
var k = new Quiz("Werte weiter/geben","transmettre des valeurs")
var l = new Quiz("ein gutes/schlechtes Vorbild sein","être un bon/mauvais exemple")
var m = new Quiz("hinter (+D) stecken","se cacher derrière quelque chose")
var n = new Quiz("einen während Kern haben","avoir un fond de réalité")
var o = new Quiz("die Realität wider/spiegeln","refléter la réalité")
var p = new Quiz("grausam","cruel")

//Hilfe
var q = new Quiz("der Forscher","le chercheur")
var r = new Quiz("das Volksgut","le bien populaire")
var s = new Quiz("bewahren","garder, conserver")
var t = new Quiz("rau und roh","brut, cru")
var u = new Quiz("die Umarbeitung","le remaniement")

//Tableau
var v = new Quiz("im Hintergrund","à l'arrière-plan")
var w = new Quiz("im Vordergrund","au premier plan")
var x = new Quiz("rechts, links","droite, gauche")
var y = new Quiz("Rotkäppchen","le petit chaperon rouge")
var z = new Quiz("Schneewittchen","blanche neige")
var aa = new Quiz("Aschenputtel","Cendrillon")
var ab = new Quiz("Dornröschen","la belle au bois dormant")
var ac = new Quiz("fantasievoll","merveilleux")
var ad = new Quiz("zum Träumen bringen","faire rêver")
var ae = new Quiz("immer ein Happy End haben","avoir toujours une fin heureuse")
var af = new Quiz("die Handlung(en)","l'action")
var ag = new Quiz("fressen","manger, dévorer")
var ah = new Quiz("das Tier(e)","l'animal")
var ai = new Quiz("die Figur(en)","le personnage")
var aj = new Quiz("die Hauptfigur","le personnage principal")
var ak = new Quiz("die Entwicklung(en)","le développement")
var al = new Quiz("behandeln","traiter, évoquer")*/

//Flucht und Integration
var a = new Quiz("die Flucht","la fuite")
var b = new Quiz("aus seinem Land fliehen (o,o)","fuir son pays")
var c = new Quiz("aus politischen Gründen fliehen","fuir pour des raisons politiques")
var d = new Quiz("aus wirtschaftlichen Gründen fliehen","fuir pour des raisons économiques")
var e = new Quiz("der Flüchtling (e)","le réfugié")
var f = new Quiz("die Flüchtlingskrise","la crise des réfugiés")
var g = new Quiz("Flüchtlinge auf/nehmen (a,o,i)","accueillir des réfugiés")
var h = new Quiz("der Migrant (en)","le migrant")
var i = new Quiz("der Ausländer (-)","l'étranger")
var j = new Quiz("ein/wandern","immigrer")
var k = new Quiz("aus/wandern","émigrer")
var l = new Quiz("der Einwanderer","l'immigré")
var m = new Quiz("der Auswanderer","l'émigrant")
var n = new Quiz("die Heimat","la patrie")
var o = new Quiz("seine Heimat verlassen","quitter sa patrie")
var p = new Quiz("fremd","étranger")
var q = new Quiz("sich fremd fühlen","se sentir étranger")
var r = new Quiz("die Willkommenskultur","la culture de l'accueil")
var s = new Quiz("jemandem unterstützen","supporter quelqu'un")
var t = new Quiz("die Sprachbarriere überwinden","surmonter la barrière de la langue")
var u = new Quiz("Verantwortung (für etwas) tragen","prendre la responsabilité (de quelque chose)")
var v = new Quiz("fremdfeindlich, rassistisch","xénophobe, raciste")
var w = new Quiz("der Rassismus","le racisme")
var x = new Quiz("die Abschiebung","la déportation")
var y = new Quiz("abgeschoben werden","se faire expulser")


var allemand = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y];
shuffle(allemand);
var p = 0;
var ga = 0;


var fer = 0;
var frr = "";
var fff = "";
var faux = ["0", "px"];


var per = 0;
var prr = "";
var ppp = "";
var c_v = ["0", "px"]


var hy = 0;
var cli = 0;
var kr = "";


var x = document.getElementById("traduction");
if (x.type === 'password') {
  x.type = 'text';
}


var po = 0;
var gt = "";
gt = allemand[po];
fe = gt.al;
fi = gt.fr;
print1 = document.getElementById("print");
print1.innerHTML = fi;
po = 1;
document.addEventListener('keypress', function(event) {
  var entrer = event.key === 'Enter';
  for (var jh = 0; jh < 1 && entrer; jh++ && entrer<1) {
    if (event.key === 'Enter') {
      kr = document.getElementById("traduction").value;
      document.getElementById("traduction").value = "";
      cli = cli + 1;
    }
    if (cli <= allemand.length){
      if (kr === fe) {
        document.getElementById("trait").style.background = "green";
        timeout = setTimeout(function() {
          document.getElementById("trait").style.background = "rgb(177,177,177)";
        },800)
        per = per + 4;
        ppp = per.toString();
        c_v.splice(0, 1, ppp);
        prr = c_v.join('');
        com_vr = document.getElementById("vert").style.width = prr;
      } else {
        document.getElementById("trait").style.background = "red";
        setTimeout(function() {
          document.getElementById("trait").style.background = "rgb(177,177,177)";
        },800)
        fer = fer + 4;
        fff = fer.toString();
        faux.splice(0, 1, fff);
        frr = faux.join('');
        compteur_faux = document.getElementById("rouge").style.width = frr;
      }
    }
    correction1 = document.getElementById("mot");
    correction1.innerHTML = fe;
    gt = allemand[po];
    fe = gt.al;
    fi = gt.fr;
    print1 = document.getElementById("print");
    print1.innerHTML = fi;
    po = po + 1;
  }
})
