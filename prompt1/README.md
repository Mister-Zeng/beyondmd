## Running Docker Compose 
In the terminal, run the following command: 

The -t flag creates a pseudo-terminal that the shell can attach to.
```sh
docker build -t prompt1 . 
```

The -it flag allows interactive mode in Docker allows us to execute commands while the container is in a running state 

The -d flag means it is in detached mode and running in the background

The -p is the port number
```sh
docker run -itd --name myapp -p 8080:80 prompt1
```

Visit [Local Host](http://localhost:8080/) to view 