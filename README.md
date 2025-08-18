
# Starter moderne — Minimal Mistakes (GitHub Pages)

Ce kit installe un blog **moderne** avec le thème *Minimal Mistakes*.

## Installation
1. Copiez ces fichiers dans votre dépôt **Allal_blog**.
2. Vérifiez dans *Settings → Pages* : *Deploy from a branch* sur `main`.
3. Ouvrez **https://elfilalimed23-jpg.github.io/Allal_blog/**.

> **Important** : Dans `_config.yml`, `baseurl` est `/Allal_blog`. Si vous transformez ce site en **site utilisateur** (dépôt `elfilalimed23-jpg.github.io`), mettez `baseurl: ""`.

## Publier un article
Créez un fichier dans `_posts/` au format `YYYY-MM-DD-titre.md` avec :
```markdown
---
title: "Titre"
categories: [Souvenirs]
tags: [mémoire]
---

Texte...
```
