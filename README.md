
## Teste DevOps Semantix
  
Este repositório possui o meu desenvolvimento no **Teste DevOps** da **Semantix**.  
  
Os recursos que envolvem este projeto são:
  
**[Aplicação em NodeJS (Search-Engine)](https://github.com/alvesoliveira17/semantix/blob/master/server.js)**  
- Aplicação em **NodeJS** para busca com base em keyword através do framework [FuseJS](http://fusejs.io/). 

Exemplo de utilização:

>     $ curl api.semantix.com.br:3000/s?search=Helped
>     [{"review_id":404979,"date":"September 3, 2016","message":"The staff were super lovely and accomodating for everyones needs! Helped lots and had a speedy entrance into the city!"},{"review_id":397707,"date":"August 23, 2016","message":"Well organised guide who explained everything well. Helped with purchase is shawls to cover shoulders and friendly attitude.\nSo glad we booked this as queues were huge and saved us valuable holiday time "}]

  

**[Pipeline CI/CD com Jenkins](https://github.com/alvesoliveira17/semantix/blob/master/build/Jenkinsfile)**  
- **Pipeline CI/CD** para build, versionamento e deploy da aplicação em container **Docker**. 

**Pré-requisitos:**
docker-plugin 1.1.4

**Instruções de uso:**


Este pipeline utiliza o plugin docker-plugin, que provisiona containers slaves para a execução do workload de build. 

O pipeline analisará a mensagem de commit no repositório configurado para tomar uma decisão de versionamento com base em "patch" ou "prerelease".

Para criar uma versão de patch, basta introduzir a tag "**#patch**" em sua mensagem de commit e o pipeline tratará o versionamento como um patch, seguindo o conceito de [Semantic Versioning](https://semver.org/).

Caso uma mensagem de commit não contenha a tag, o pipeline tratará a versão como um "prerelease".


**[Dockerfile (Imagem base)](https://github.com/alvesoliveira17/semantix/blob/master/base/Dockerfile)**  
  Este Dockerfile possui a estrutura base para imagens em NodeJS.
  Nele estão as instruções para instalação de packages comuns entre aplicações, com o objetivo de reduzir o tempo de build de aplicações.
  
  
**[Dockerfile (Aplicação NodeJS)](https://github.com/alvesoliveira17/semantix/blob/master/Dockerfile)**  
  Este Dockerfile possui a estrutura da aplicação.
  Nele estão as instruções para instalação de packages e execução da aplicação.
  
Caso seja necessário, fique à vontade para realizar um "pull request" neste projeto.
