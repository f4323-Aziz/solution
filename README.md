

In this repo, when "docker-compose up" is done under the nginx folder, the application broadcasts minio over localhost:8000 and broadcasts frontend over localhost:80.

Once the docker-compose up command is executed, when BUCKET, ACCESS_KEY_ID, SECRET_ACCESS_KEY are obtained by connecting to the minio application from localhost:8000 and data entry is made in the .env file in the backend folder and when http://public-ip:9000 is entered instead of localhost in ***ENDPOINT***, the upload feature works from localhost:80 via frontend. 



*** In the docker-compose.yaml file, the services are run with images, and if the images are removed, the docker-compose file can be rebuilt by updating the 
IP addresses in the env files.
