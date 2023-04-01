## AWS S3 SDK exemple

<div align="center">

![AWS](./img/objetos.png)

</div>

### Descripción
Una aplicacion completa con un Front-end y un Back-end conectados con Axios que permite subir y descargar archivos/imagenes a Amazon Web Services (AWS) con su servicio S3 usando su SDK para NodeJS.
Para este ejemplo me base en la [documentación oficial de AWS](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html).

Este proyecto utilizo las siguientes tecnologias:

<div align="center">

<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="ReactJS" alt="React" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="Node" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express" alt="Express" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>
<img src="https://imgs.search.brave.com/y1BD5ONCxBiKkUp4W8rs6mdrqHqt5_7eOawXl1rNWrA/rs:fit:460:460:1/g:ce/aHR0cHM6Ly9hdmF0/YXJzLmdpdGh1YnVz/ZXJjb250ZW50LmNv/bS91LzMyMzcyMzMz/P3Y9NA" title="Axios" alt="Axios" width="40" height="40"/>

</div>

## Instrucciones

En este ejemplo solo se toma como tema principal el uso de AWS S3.

Los comandos se ejecutan por separado en cada proyecto.
Revisa cada uno por separado para su configuraión.


## Asignar Credenciales de usuario IAM de AWS

Debes asignar tus credenciales de AWS primero creando un archivo que contenga las variables de entorno dentro de la carpeta "server"

<div align="center">

![env](./img/env.png)

</div>

- Entra a la consola de adminstracion de AWS y entra a IAM.

<div align="center">

![iam](./img/iam.png)

</div>

- Ve a usuarios y agrega uno.

<div align="center">

![user](./img/crearusuario.png)

</div>

- Asignale una politica que solo permite que cree, actualice y elimine objetos en S3

<div align="center">

![politica](./img/politicas.png)

</div>

- Una vez creado el usuario y despues de asignarle las politicas tienes que crearle credenciales de acceso.

<div align="center">

![access](./img/clavesdeacceso.png)

</div>

- Las claves de acceso publicas y privadas las copias y pegas en tus variables de entorno.

<div align="center">

![keys](./img/keys.png)

</div>
