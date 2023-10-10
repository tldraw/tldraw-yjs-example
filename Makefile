TLDRAW_NGINX = /home/alexey/Desktop/test2w

build:
	rm -rf node_modules && yarn install --frozen-lockfile
	rm -rf dist && yarn build

update-nginx:
	mkdir -p ${TLDRAW_NGINX}
	rm -rf ${TLDRAW_NGINX}/*
	cp -rp ./dist/* ${TLDRAW_NGINX}

deploy: build update-nginx