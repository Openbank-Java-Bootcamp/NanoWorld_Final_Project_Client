# NanoWorld

La idea del presente proyecto es crear una herramienta destinada a instituciones universitarias y cientificas con el objetivo de unir y divulgar conociemiento sobre nanociencia. En especial enfocado al analisis de datos de simulaciones realizadas sobre nanoparticulas. Como prueba piloto se desarrolla la herramienta para analizar y relacionar la metodologia de calculo y simulación sobre nanoclusters y nanoparticulas. La pricipal funcion de la aplicacion es permitir a profesores e investigadores cargar las caracteristicas importantes de los calculos realizado y sus respectivos resultados  y da la posibilidad a alumnos de visualizar, analizar y estudiar la informacion disponible.  

## User Stories: 

* Como profesor y investigador es posible registarse en NanoWorld. Una vez realizado el registro es posible ver la informacion de todos los proyectos disponibles. Tanto los propios como los de otros creadores. En el repositorio de proyectos se encuentra la información de la configuración de la calculadora utilizada para la relajacion de las nanoestructuras y las caracteristicas obtenidas de estas úlitmas. 
  
* Como estudiante es posible crear una cuenta y unirse al NanoWorld para obtener información relevante sobre calculos realizados en importantes grupos de investigaciones.  Se puede obtener informacion de esta aplicacion para trabajos teoricos de analisis de datos y predicciones teoricas de configuraciones finales de las nanoestructuras.
  
* Con el rol  de profesor es posible crear nuevas calculadoras personalizadas, y adjuntarselas futuros projectos. o crear nuevos projectos vacios para que sus alumnos adjunten los resultados de los calculos asignados como tarea de estudio.
  
## Technologies Used
   
* SpingBootInizializer
* SpingBootSecurity
* JAVA
* SQL
* MySQL
* IntelliJ

## Models
    1. User
    2. Role
    3. Project
    4. Calculator
    5. Cluster
    6. Nanoparticles
        
        ![Captura de Pantalla 2022-06-16 a la(s) 14.38.25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5acf3666-7cf8-4337-8291-1d18c6ebf791/Captura_de_Pantalla_2022-06-16_a_la(s)_14.38.25.png)
        
## Server routes table

[http://localhost:5005/swagger-ui.html#/auth-controller](http://localhost:5005/swagger-ui.html#/auth-controller)

| Method | URL | Request header | Request Body | notes |
| --- | --- | --- | --- | --- |
| POST | /auth/signup | — | {name, email,password} |  |
| POST | /auth/login | — | {email, password} |  |
| GET  | /auth/verify | Authorization: Bearer < JWT > | — |  |
| GET | /api/projects | — | — |  |
| GET | /api/projects/{id} | {projectId} | — |  |
| POST | /api/projects | — | {title, description, calculator} |  |
| PUT | /api/projects/{id} | {projectId} | {title, description} |  |
| DELETE | /api/projects/{id} | {projectId} | — |  |
| GET | /api/calculators | — | — |  |
| GET | /api/calculators/{id} | {calculatorId} | — |  |
| POST | /api/calculators | — | {xc,lreal,kpts,ibrion,encut,ediffg,nsw,ispin,ncore,command} |  |
| POST | /api/calculators/toproject | — | {calculatorId} |  |
| DELETE | /api/calculators/{id} | {calculatorId} | — |  |
| GET | /api/clusters | — | — | para el clustersPAge |
| POST | /api/clusters | — | {formula, natoms, energy, forces, magmon, projectId} | Agregar otros atributos terminar |
| DELETE | /api/clusters/{id} | {clusterId} | — | en cada cluster card, poner botoncito de cesto |
|  |  |  |  |  |


# Future Work

* El trabajo posee muchos coming soon features entre ellos los buscadores de projectos y calcualdores por distintos atirbutos como ids, titles, creadores.
    
* Ademas cada usuario deberia contar con sus paginas donde posean acceso directo a los datos que proporcionaron.
    
* Los profesoren contarian con su lista de proyectos, calculadores y ademas de sus alumnos y sus respectivos proyectos realizados. 
    
* Y los alumnos podrian contar con la lista de sus proyectos realizados y los de sus superiores. 
    
* Ademas podria contar con datos de otros nanomateriales. No solo de Nano oro. Tambien es extensa la información de calculos sobre nanoclusters o nanoparticulas de plata, platino, cobre, entre otros
    
* Por ultimo seria interesante lograr que en el mismo grafico se plotten distintos proyectos seleccionados con el fin de comparar la eficiencia de sus calculadores. 
    
## Resources
  * [VASP](https://www.vasp.at/wiki/index.php/Main_page)

