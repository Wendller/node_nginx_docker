# Proxy reverso com Nginx

## Dockerizando um ambiente Node.js & MySQL usando NGINX

### Para subir a aplicação:

Clone o repositório

```
git clone git@github.com:Wendller/node_nginx_docker.git
```

Acesse a pasta

```
cd node_nginx_docker
```

Acione os containers:

```
docker compose up -d
```

Aguarde todos os containers serem criados e executados, por fim acesse em seu navegador:

```
http://localhost:8080
```

Basicamente o que fizemos aqui foi construir uma imagem Node.js que depende de uma conexão com MYSQL.
Executamos um script simples para adiconar uma linha no banco e retornar o dado quando acessarmos a rota principal na porta 3000.
Porém o adicional é que utilizamos o NGINX para receber a requisição inicialmente, configurando um proxy reverso para quando acessarmos o nginx na porta 8080, ele direcionar para o serviço do Node na porta 3000 e devolver o conteúdo.
