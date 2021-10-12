# Worker Subscriber Process.

Simple nodejs application for the subscription of api.

## Description

Events which are sent from the race simulator that runs a new race with six horses every minute of every day.The goal was to build a "worker" that subscribes to these events and saves them in a MongoDB database.

## Getting Started

### Dependencies

* nodejs: latest (or) docker: latest

### Installing

** Two methods to Run the program
* Using Docker
  - Install docker
* Using NodeJs
  - Install npm.

### Executing program

 Clone the repo
   ```sh
   git clone https://github.com/vkrm-ethan/worker-subscriber.git
   ```

* Docker Setup
```
docker-compose up
```
  
  #### (or)
  
* Node Setup
```sh
   yarn install
```
then,
 ```sh
   yarn start
```

## Authors

Contributors names and contact info

Vikram Muthukumar

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the VIKRAM MUTHUKUMAR License 

## Acknowledgments

Inspiration, code snippets, etc.
* Axios
* Mongoose
* JEST
* ESLint
* Mongodb-Memory-Server
