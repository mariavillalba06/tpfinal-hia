FROM mongo:latest

# Copia el script de inicialización al contenedor
COPY init-replica.js /init-replica.js

# Comando por defecto para inicializar el replica set
CMD mongo --host mongo-primary:27017 /init-replica.js