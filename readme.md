# CURSO BACKEND CODERHOUSE

Este proyecto está desarrollado para el backend de un eCommerce de cualquier rubro comercial. 

###### Para poner en funcionamiento el proyecto deben ejecutarse los siguientes comandos:
```
npm install
npm run build
npm start
```

###### Para la utilización de los módulos Forever y PM2 se utilzan los siguientes comandos 
##### para ejecutarse en la terminal:

FOREVER
Para ejecutar la aplicación indicando el puerto:
```
forever start dist/server.js 8081
```

Habilitar modo escucha:
```
forever start dist/server.js 8081 --watch
```

Para listar los procesos ejecutados:
```
forever list
```

PM2
Para ejecutar la aplicación en modo FORK:
```
pm2 start dist/server.js
```

Modo escucha de FORK:
```
pm2 start dist/server.js --watch
```

Para ejecutar la aplicación en modo CLUSTER:
```
pm2 start dist/server.js -i max
```

Modo escucha de CLUSTER:
```
pm2 start dist/server.js -i max --watch
```
