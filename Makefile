.PHONY:  setup dev build lint preview clean-build clean
setup:
	yarn

dev:
	yarn dev

build: clean-build
	yarn build

preview: build
	yarn preview

clean-build:
	rm -rf ./dist

clean: clean-build
	rm -rf node_modules
