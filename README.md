# Meet Canvas Animation

> Base exercise to discover animation with canvas.

* * *

**meet-canvas-animation** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte de l'animation avec la balise `<canvas>`.

Le cours est réparti en X exercices distincts, dans leurs dossiers propres. Le dossier `_shared` contient les éléments communs à chaque exercices (feuilles de styles, images…). Un workflow Grunt basique est inclus, pour vérifier les fichiers javascript avec **eslint**.

## Détail des exercices

### `exo-one`

Premier exercice : à l'instar de notre tout premier exercice sur canvas, nous allons d'abord dessiner 4 carrés de couleur. Nous allons ensuite les animer pour que, chaque seconde, chaque carré change de couleur. Nous en profiterons pour encoder les couleurs sous forme d'un tableau de séquences.

### `exo-two`

Second exercice : en utilisant une [spritesheet](./_shared/ramonaflowers.png) tirée du jeu **Scott Pilgrim vs the World** par [Ubisoft](https://www.ubisoft.com), nous allons animer un cycle de marche d'un personnage.

### `exo-three`

Troisième exercice : nous allons créer une bulle, qui va monter vers le haut de l'écran, et qui, une fois hors des limites du _canvas_, reviendra par le dessous, en boucle.

### `exo-four`

Quatrième exercice : sur base de l'exerice précédent, nous allons maintenant créer un canvas rempli de bulles qui tournent en boucle. Nous en profiterons pour créer une classe dédiée, et générerons des bulles aléatoirement.
