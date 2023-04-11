function remplacer_bleu() {
    // Récupérer toutes les feuilles de style de la page
    var styleSheets = document.styleSheets;
  
    // Boucler sur chaque feuille de style
    for (var i = 0; i < styleSheets.length; i++) {
      var styleSheet = styleSheets[i];
  
      // Récupérer toutes les règles CSS de la feuille de style
      var cssRules = styleSheet.cssRules || styleSheet.rules;
      for (var j = 0; j < cssRules.length; j++) {
        var cssRule = cssRules[j];
  
        // Vérifier si la règle contient la couleur RGB (34, 34, 34)
        if (cssRule.cssText.includes("rgb(34, 34, 34)")) {
  
          // Remplacer la couleur RGB (34, 34, 34) par la couleur bleue (0, 0, 255)
          var newRule = cssRule.cssText.replace(/rgb\(34,\s*34,\s*34\)/g, "rgb(0, 0, 255)");
          styleSheet.deleteRule(j);
          styleSheet.insertRule(newRule, j);
        }
      }
    }
}

function remplacer_vert() {
    // Récupérer toutes les feuilles de style de la page
    var styleSheets = document.styleSheets;
  
    // Boucler sur chaque feuille de style
    for (var i = 0; i < styleSheets.length; i++) {
      var styleSheet = styleSheets[i];
  
      // Récupérer toutes les règles CSS de la feuille de style
      var cssRules = styleSheet.cssRules || styleSheet.rules;
      for (var j = 0; j < cssRules.length; j++) {
        var cssRule = cssRules[j];
  
        // Vérifier si la règle contient la couleur noir (#000) ou la couleur RGB (0, 0, 0)
        if (cssRule.cssText.includes("rgb(0, 0, 0)")) {
  
          // Remplacer la couleur noire (#000) ou la couleur RGB (0, 0, 0) par la couleur verte (#00FF00)
          var newRule = cssRule.cssText.replace(/rgb\(0,\s*0,\s*0\)/g, "rgb(0, 255, 255)");
          styleSheet.deleteRule(j);
          styleSheet.insertRule(newRule, j);
        }
      }
    }
}

function remplacer_violet() {
    // Récupérer toutes les feuilles de style de la page
    var styleSheets = document.styleSheets;
  
    // Boucler sur chaque feuille de style
    for (var i = 0; i < styleSheets.length; i++) {
      var styleSheet = styleSheets[i];
  
      // Récupérer toutes les règles CSS de la feuille de style
      var cssRules = styleSheet.cssRules || styleSheet.rules;
      for (var j = 0; j < cssRules.length; j++) {
        var cssRule = cssRules[j];
  
        // Vérifier si la règle contient la couleur noir (#000) ou la couleur RGB (0, 0, 0)
        if (cssRule.cssText.includes("rgb(51, 51, 51)")) {
  
          // Remplacer la couleur noire (#000) ou la couleur RGB (0, 0, 0) par la couleur verte (#00FF00)
          var newRule = cssRule.cssText.replace(/rgb\(51,\s*51,\s*51\)/g, "rgb(127, 0, 255)");
          styleSheet.deleteRule(j);
          styleSheet.insertRule(newRule, j);
        }
      }
    }
}

function remplacer_rose() {
    // Récupérer toutes les feuilles de style de la page
    var styleSheets = document.styleSheets;
  
    // Boucler sur chaque feuille de style
    for (var i = 0; i < styleSheets.length; i++) {
      var styleSheet = styleSheets[i];
  
      // Récupérer toutes les règles CSS de la feuille de style
      var cssRules = styleSheet.cssRules || styleSheet.rules;
      for (var j = 0; j < cssRules.length; j++) {
        var cssRule = cssRules[j];
  
        // Vérifier si la règle contient la couleur noir (#000) ou la couleur RGB (0, 0, 0)
        if (cssRule.cssText.includes("rgb(177, 177, 177)")) {
  
          // Remplacer la couleur noire (#000) ou la couleur RGB (0, 0, 0) par la couleur verte (#00FF00)
          var newRule = cssRule.cssText.replace(/rgb\(177,\s*177,\s*177\)/g, "rgb(255, 0, 178)");
          styleSheet.deleteRule(j);
          styleSheet.insertRule(newRule, j);
        }
      }
    }
}

function remplacer_rouge() {
    // Récupérer toutes les feuilles de style de la page
    var styleSheets = document.styleSheets;
  
    // Boucler sur chaque feuille de style
    for (var i = 0; i < styleSheets.length; i++) {
      var styleSheet = styleSheets[i];
  
      // Récupérer toutes les règles CSS de la feuille de style
      var cssRules = styleSheet.cssRules || styleSheet.rules;
      for (var j = 0; j < cssRules.length; j++) {
        var cssRule = cssRules[j];
  
        // Vérifier si la règle contient la couleur noir (#000) ou la couleur RGB (0, 0, 0)
        if (cssRule.cssText.includes("rgb(114, 114, 114)")) {
  
          // Remplacer la couleur noire (#000) ou la couleur RGB (0, 0, 0) par la couleur verte (#00FF00)
          var newRule = cssRule.cssText.replace(/rgb\(114,\s*114,\s*114\)/g, "rgb(255, 255, 0)");
          styleSheet.deleteRule(j);
          styleSheet.insertRule(newRule, j);
        }
      }
    }
}

function cool() {
    document.getElementById('coul').style.background = 'linear-gradient(135deg,rgb(0, 0, 0),20%,rgb(34, 34, 34),80%,rgb(177, 177, 177))';
}

function addHoverStyle(element, property, value, target, targetProperty, targetValue) {
  element.addEventListener("mouseenter", function() {
    element.style[property] = value;
    if (target) {
      target.style[targetProperty] = targetValue;
    }
  });
  element.addEventListener("mouseleave", function() {
    element.style[property] = "";
    if (target) {
      target.style[targetProperty] = "";
    }
  });
}



var myEl = document.getElementById("uni");
var thisEl = document.getElementById("dis");
var theEl = document.getElementById("tris");
var leEl = document.getElementById("coul");
var targetEl = document.getElementById("coul_b");


//Coul_bou
addHoverStyle(targetEl, "", "", leEl, "transform", "none");
addHoverStyle(targetEl, "", "", leEl, "opacity", "1");

//Uno
addHoverStyle(targetEl, "", "", myEl, "transform", "translateX(109px)");

//Dos
addHoverStyle(targetEl, "", "", thisEl, "transform", "translateX(74px)");

//Tres
addHoverStyle(targetEl, "", "", theEl, "transform", "translateX(39px)");





function switch_(element) {
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    if (window.getComputedStyle(elements[i]).getPropertyValue("z-index") == "3") {
      var el = elements[i];
      break;
    }
  }
  
  var monElement = document.getElementById(element);
  var myEl = document.getElementById(el.id);
  var deuxElement = document.getElementById("coul_b");
  var width_ = window.getComputedStyle(monElement).getPropertyValue("width");
  var height_ = window.getComputedStyle(monElement).getPropertyValue("height");
  var left_ = window.getComputedStyle(monElement).getPropertyValue("left");
  var zIndex_ = window.getComputedStyle(monElement).getPropertyValue("z-index");
  var transition_ = window.getComputedStyle(monElement).getPropertyValue("transition");
  var transform_ = window.getComputedStyle(monElement).getPropertyValue("transform");

  monElement.style.width = window.getComputedStyle(myEl).getPropertyValue("width");
  monElement.style.height = window.getComputedStyle(myEl).getPropertyValue("height");
  monElement.style.left = window.getComputedStyle(myEl).getPropertyValue("left");
  monElement.style.zIndex = window.getComputedStyle(myEl).getPropertyValue("z-index");
  monElement.style.transition = window.getComputedStyle(myEl).getPropertyValue("transition");
  monElement.style.transform = "none";

  myEl.style.transition = transition_;
  myEl.style.zIndex = zIndex_;
  myEl.style.width = width_;
  myEl.style.height = height_;
  myEl.style.left = left_;
  myEl.style.transform = transform_;

  addHoverStyle(deuxElement, "", "", myEl, "transform", transform_);
  addHoverStyle(deuxElement, "", "", monElement, "transform", "none");

}




// Maintenant pour le thème sombre


function remplacer_gris() {
  // Récupérer toutes les feuilles de style de la page
  var styleSheets = document.styleSheets;

  // Boucler sur chaque feuille de style
  for (var i = 0; i < styleSheets.length; i++) {
    var styleSheet = styleSheets[i];

    // Récupérer toutes les règles CSS de la feuille de style
    var cssRules = styleSheet.cssRules || styleSheet.rules;
    for (var j = 0; j < cssRules.length; j++) {
      var cssRule = cssRules[j];

      // Vérifier si la règle contient la couleur RGB (34, 34, 34)
      if (cssRule.cssText.includes("rgb(0, 0, 255)")) {

        // Remplacer la couleur RGB (34, 34, 34) par la couleur bleue (0, 0, 255)
        var newRule = cssRule.cssText.replace(/rgb\(0,\s*0,\s*255\)/g, "rgb(34, 34, 34)");
        styleSheet.deleteRule(j);
        styleSheet.insertRule(newRule, j);
      }
    }
  }
}
