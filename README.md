# Subir App Ionic a GitPage

Documentación del Paquete NPM **"angular-cli-ghpages":**

[[https://www.npmjs.com/package/angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)](https://www.notion.so/https-www-npmjs-com-package-angular-cli-ghpages-82d660584061421594357daca71abf37)

Una vez que se tenga todo el proyecto en GitHub (Sin las dependencias) se deberá seguir los siguientes pasos:

1. Sincronizar el repositorio local con el remoto:

`git remote add origin URL_REPOSITORY`

Ejemplo real:
`git remote add origin [https://github.com/FabriJuncal/ionic-introduccion](https://github.com/FabriJuncal/ionic-introduccion)`

2. Subir los cambios al repositorio local

`git push -f origin BRANCH-NAME`

Ejemplo real:
`git push -f origin main`

3. Agregar **angular-cli-ghpages** al proyecto:

`ng add angular-cli-ghpages`

4. Implementar el proyecto en GitHub con todas las configuraciones predeterminadas. 
El proyecto se construirá automáticamente en modo de producción y lo publicará en la rama **"gh-pages"** en la ruta que se le haya pasado como parámetro al campo "`--base-href`":

`ionic build --prod -- --base-href https://YOUR_GITHUB_USERNAME.github.io/iYOUR_PROJECT_NAME/ && npx angular-cli-ghpages --branch=BRANCH-NAME --dir=www`

Ejemplo real:
`ionic build --prod -- --base-href [https://fabrijuncal.github.io/ionic-introduccion/](https://fabrijuncal.github.io/ionic-introduccion/) && npx angular-cli-ghpages --branch=gh-pages --dir=www`

5. Para actualizar el proyecto en la rama **"gh-pages"**, volver a ejecutar el comando:

`ionic build --prod -- --base-href https://YOUR_GITHUB_USERNAME.github.io/iYOUR_PROJECT_NAME/ && npx angular-cli-ghpages --branch=BRANCH-NAME --dir=www`