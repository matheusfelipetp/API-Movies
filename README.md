# 🎞️ API Movies
> API criada em Node.js e TypeScript, com a funcionalidade de um CRUD para um sistema de registro de filmes.

## ⚙️ Tecnologias
* Node.js
* TypeScript
* Express
* Express Validator
* Dotenv
* MongoDB
* Mongoose
* Morgan
* Winston

## ➡️ Rotas do usuário
### Rotas sem necessidade de autorização

**1) Listar todos os filmes** </br>
Para listar todos os filmes, utilize o método *GET* no enpoint:
```
http://localhost:3000/movies
```

``
Exemplo de response - 200
``
```
[
	{
		"_id": "63822b4ea4ad24c4859b91a2",
		"title": "Star Wars",
		"rating": 10,
		"description": "Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.",
		"director": "George Lucas",
		"stars": [
			"Mark Hamill",
			"Harrison Ford",
			"Carrie Fisher",
			"Alec Guinness"
		],
		"poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg",
		"createdAt": "2022-11-26T15:05:50.495Z",
		"updatedAt": "2022-11-26T15:11:23.039Z",
		"__v": 0
	}
]
```


</br>

**2) Cadastrar um novo filme** </br>
Para criar um novo cadastro de filme, utilize o método *POST* no endpoint:
```
http://localhost:3000/movies
```

``
Exemplo de body
``
```
{
	"title": "Star Wars", 
	"rating": 10,
	"description": "Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.",
	"director": "George Lucas",
	"stars": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness" ],
	"poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg"
}
```

``
Exemplo de response - 201
``
```
{
	"title": "Star Wars",
	"rating": 10,
	"description": "Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.",
	"director": "George Lucas",
	"stars": [
		"Mark Hamill",
		"Harrison Ford",
		"Carrie Fisher",
		"Alec Guinness"
	],
	"poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg",
	"_id": "63889fd4659a142a06a63eb2",
	"createdAt": "2022-12-01T12:36:36.929Z",
	"updatedAt": "2022-12-01T12:36:36.929Z",
	"__v": 0
}
```

</br>

**3) Buscar um filme específico pelo ID** </br>
Para buscar um filme específico através do ID, utilize o método *GET* no endpoint:
```
http://localhost:3000/movies/id
```

``
Exemplo de response - 200
``
```
{
	"_id": "63822b4ea4ad24c4859b91a2",
	"title": "Star Wars",
	"rating": 10,
	"description": "Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.",
	"director": "George Lucas",
	"stars": [
		"Mark Hamill",
		"Harrison Ford",
		"Carrie Fisher",
		"Alec Guinness"
	],
	"poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg",
	"createdAt": "2022-11-26T15:05:50.495Z",
	"updatedAt": "2022-11-26T15:11:23.039Z",
	"__v": 0
}
```

</br> 

**4) Atualizar filmes** </br>
Para atualizar os dados de um filme, utilize o método *PATCH* no endpoint:
```
http://localhost:3000/movies/id
```

``
Exemplo de body
``
```
{
	"title": "Star Wars 2", 
	"rating": 8,
	"description": "Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.",
	"director": "George Lucas",
	"stars": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness" ],
	"poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg"
}
```

``
Exemplo de response - 200
``
```
{
	"title": "Star Wars 2",
	"rating": 8,
	"description": "Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.",
	"director": "George Lucas",
	"stars": [
		"Mark Hamill",
		"Harrison Ford",
		"Carrie Fisher",
		"Alec Guinness"
	],
	"poster": "https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg"
}
```

</br>

**4) Deletar filmes** </br>
Para deletar um filme, utilize o método *DELETE* no endpoint:
```
http://localhost:3000/movies/id
```

``
Retorna apenas um 204 sem conteúdo.
``
