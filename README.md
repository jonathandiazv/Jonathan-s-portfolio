# Portfolio — Jonathan Díaz-Vreys

Site personnel statique (HTML/CSS/JS, aucune dépendance), trilingue FR/EN/ES.

## Mettre à jour le contenu

Tout le texte du site est dans **`js/content.js`** : expériences, formation, projets, compétences, langues, e-mail.
Modifier ce fichier suffit, la mise en page s'adapte automatiquement.

- Ajouter un projet : copier un bloc dans `projects: [...]`, changer les textes et l'image (`assets/img/`).
- Tags multilingues : écrire `"Texte FR / Text EN / Texto ES"`.

## Voir le site en local

```bash
python -m http.server 5500
```

Puis ouvrir http://localhost:5500.

## Structure

```
index.html          structure de la page
css/styles.css      design (thème espace)
js/content.js       CONTENU — le seul fichier à éditer au quotidien
js/main.js          rendu, langue, animations
assets/             images, vidéo du hero, favicon
```

## Mise en ligne

Site 100 % statique : déployable tel quel sur GitHub Pages, Netlify ou Vercel.
