import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1';
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import DownloadLink from '@/components/DownloadLink';
import code from '@/public/json/code-module4.json';
import {getCode} from '@/components/Code';

export default function ContenuModule4() {
    return <>
        <Divider />
        {/* #region Affichage répété */}
        <Titre1 title='Affichage répété' index='0' />
        <Paragraphe
            contenu="En JavaScript, lorsque nous voulons appliquer une fonction donnée à chaque élément d'un tableau et obtenir un nouveau tableau avec les résultats. On pense directement à la méthode map(). Comment cette méthode fonctionne-t-elle?"
        />
        <Titre2 title='Fonctionnement de la méhode map()' />
        <Paragraphe
            contenu="Dans le code ci-dessous, la méthode map() est utliée pour prendre un tableau de nombres et calculer le carrée de chacun de ces nombres. Par la suite, le nouveau tableau retourné par map() est afeccté à une variable 'carres' et pour finir, le résulat est affiché dans la console :"
        />
        <CodeBlock chemin='Demo méthode map()' contenu={getCode(code, 'map_demo')} langage='jsx' />
        <CodeBlock chemin='Résultat dans la console' contenu="[1, 4, 9, 16, 25, 36, 49, 64, 81]" langage='jsx' />
        <Titre2 title="Usage de la méthode map() dans React" />
        <Paragraphe
            contenu="Pour illustrer l'usage de la méthode map() dans React, nous allons reprendre notre application du module3 et lui ajouter de nouveaux composants pour afficher des images."
        />
        <DownloadLink
            url='./code-source/biblio-app-module-3.zip'
            item='biblio-app-module-3'
        />
        <Item
            item="composant 'Galerie'"
            description=" : Dans le dossier 'components', créer le composant 'Galerie.jsx' qui va prendre en entrée un tableau d'images et les afficher en utilisant la méthode map()"
        />
        <CodeBlock chemin='/components/Galerie.jsx' contenu={getCode(code, 'galerie_code')} langage='jsx' />
        <Remarque
            type="Important"
            contenu="les clés (key) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Il est donc impératif d'attribuer une clé (key) à chaque élément et elle doit permettre d'identifer l'élément de façon unique. Dans notre cas, nous avons utilisé l'index mais il est recommandé d'utiliser l'index en dernier recours. Nous aurions pu utiliser l'URL comme clé malgré sa longueur."
        />
        <Item
            item="gallerie-pokemon.json"
            description=" : Les informations de nos images telles l'URL, la taille sont stockées dans un fichier json nommé 'gallerie-pokemon.json'. Vous devez donc le télécharger et le sauvegarder dans le dossier 'public' de votre application."
        />
        <DownloadLink
            url='./json/gallerie-pokemon.json'
            item='Télécharger gallerie-pokemon.json'
        />
        <Item
            item="Importer Gallerie et gellerie-pokemon"
            description=" : Ajouter le code suivant au debut du composant 'Documents.jsx'"
        />
        <CodeBlock chemin='/components/Documents.jsx' contenu={getCode(code, 'import_galerie')} langage='jsx' />

        <Item
            item="Appel du composant 'Galerie'"
            description=" : Ajouter le code suivant à la fin du composant 'Documents.jsx' pour appeler le composant 'Galerie' afin qu'il affiche les images"
        />
        <CodeBlock chemin='/components/Documents.jsx' contenu=" <Gallerie images={galleriePokemon} />" langage='jsx' />
        <Item
            item="Modifier 'next.config.mjs'"
            description=" : Remplacer le code de 'next.config.mjs' par le code suivant, pour indiquer à Next les paramètres des images."
        />
        <CodeBlock chemin='/next.config.mjs' contenu={getCode(code, 'next_config')} langage='jsx' />
        <LienExterne
            url='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
            description='En savoir plus sur la méthode map()'
        />
        {/* // #endregion Affichage répété*/}

        <Divider />
        {/* #region Le hook d'effet ou useEffect */}
        <Titre1 title="Le hook d'effet ou useEffect" index='1' />
        <Paragraphe
            contenu="Le hook d'effet ou useEffect dans React permet de gérer les effets secondaires, tels que les appels réseaux, les abonnements, ou la modification du DOM, dans un composant fonctionnel."
        />
        <Titre2 title="useEffect avec modification du DOM" />
        <Paragraphe
            contenu="Nous allons créer un composant 'Titre' pour modifier le titre de page suite à un clic sur un bouton"
        />
        <CodeBlock chemin='/component/Titre.jsx' contenu={getCode(code, 'titre_code')} langage='jsx' />
        <Remarque
            type="Important"
            contenu="Il ne reste plus qu'à importer notre nouveau composant dans le composant 'Accueil' pour le tester."
        />
        <Titre2 title="useEffect : Réalisation d'un compte à rebours" />
        <CodeBlock chemin='/component/Timer.jsx' contenu={getCode(code, 'timer')} langage='jsx' />
        <Remarque
            type="Bon à savoir"
            contenu="setInterval() est une méthode JavaScript permettant d'excuter un bloc de code avec répétiton après un delai fixé. Dans notre cas, le delai est 1 seconde." />
        {/* // #endregion Le hook d'effet ou useEffect*/}
        <Paragraphe
            contenu="Pour tester le composant 'Timer', vous pouvez l'importer dans 'Accueil' et l'appeler avec le code suivant:"
        />
        <CodeBlock chemin='/component/Accueil.jsx' contenu={getCode(code, 'timer_test')} langage='jsx' />
        <LienExterne
            url='https://fr.legacy.reactjs.org/docs/hooks-effect.html'
            description='En savoir plus sur useEffect()'
        />
        <Divider />
        {/* #region Code source */}
        <Titre1 title='Code source' index='2' />
        <DownloadLink
            url='./code-source/biblio-app-module-4.zip'
            item='Télécharger le projet créé'
        />
        <Remarque
            type="Important"
            contenu="Avant d'executer la commande 'npm run dev', bien vouloir exécuter la commande 'npm i'."
        />
        {/* // #endregion Code source*/}

        <Divider />
        {/* #region Travail à faire */}
        <Titre1 title='Travail à faire' index='3' />
        <DownloadLink
            url='./pdf/Semaine-4_.pdf'
            item='Télécharger le travail'
        />
        {/* // #endregion Travail à faire*/}
    </>
}