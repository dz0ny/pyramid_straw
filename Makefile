test:
	py.test tests

lint:
	flake8 pyramid_straw
	flake8 tests

sort:
	isort -rc pyramid_straw
	isort -rc tests
	isort setup.py

all: lint test

.PHONY: all
