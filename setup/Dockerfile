FROM mongo

# Create App Directory
WORKDIR /usr/src/configs

# Install App Dependencies
COPY rsconf.js .
COPY setup.sh .

CMD ["./setup.sh"]