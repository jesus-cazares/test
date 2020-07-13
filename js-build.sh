#!/bin/sh -x
npm i
npm i -g @angular/cli@9.0.6
ng build --prod
mkdir docker/dist
cp -r dist/* docker/dist
