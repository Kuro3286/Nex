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

// Die Welt der Mädchen (Station 1)
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
var n = new Quiz("einen wahren Kern haben","avoir un fond de réalité")
var o = new Quiz("die Realität wider/spiegeln","refléter la réalité")
var p = new Quiz("grausam","cruel")

//Hilfe
var q = new Quiz("der Forscher","le chercheur")
var r = new Quiz("das Volksgut","le bien populaire")
var s = new Quiz("bewahren","garder, conserver")
var t = new Quiz("rau und roh","brut, cru")
var u = new Quiz("die Umarbeitung","le remaniement")


var allemand = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u];
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
print1.innerHTML = fe;
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
      if (kr === fi) {
        document.getElementById("trait").style.background = "green";
        timeout = setTimeout(function() {
          document.getElementById("trait").style.background = "rgb(177,177,177)";
        },800)
        per = per + 5;
        ppp = per.toString();
        c_v.splice(0, 1, ppp);
        prr = c_v.join('');
        com_vr = document.getElementById("vert").style.width = prr;
      } else {
        document.getElementById("trait").style.background = "red";
        setTimeout(function() {
          document.getElementById("trait").style.background = "rgb(177,177,177)";
        },800)
        fer = fer + 5;
        fff = fer.toString();
        faux.splice(0, 1, fff);
        frr = faux.join('');
        compteur_faux = document.getElementById("rouge").style.width = frr;
      }
    }
    correction1 = document.getElementById("mot");
    correction1.innerHTML = fi;
    gt = allemand[po];
    fe = gt.al;
    fi = gt.fr;
    print1 = document.getElementById("print");
    print1.innerHTML = fe;
    po = po + 1;
  }
})
