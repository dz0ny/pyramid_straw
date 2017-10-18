test:
	py.test tests

dist:
	python setup.py sdist
	python setup.py bdist_wheel --universal

lint:
	flake8 pyramid_straw
	flake8 tests

sort:
	isort -rc pyramid_straw
	isort -rc tests
	isort setup.py

all: lint test

.PHONY: all dist
