
# para cargar el servidor
server.up:
	cd ./apiBooks/ApiRest/src && node ./apiRest.js

# para cargar la web
web.up:
	cd ./apiBooks/Angular && npm start

# para cargar el servidor y la web a la vez
up:
	$(MAKE) -j 2 server.up web.up