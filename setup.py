"""
Pyramid Straw
"""
from setuptools import find_packages
from setuptools import setup

import codecs
import os
import re

with codecs.open(os.path.join(os.path.abspath(os.path.dirname(
        __file__)), 'pyramid_straw', '__init__.py'), 'r', 'latin1') as fp:
    try:
        version = re.findall(r"^__version__ = '([^']+)'\r?$",
                             fp.read(), re.M)[0]
    except IndexError:
        raise RuntimeError('Unable to determine version.')

setup(
    name='pyramid_straw',
    version=version,
    url='http://github.com/dz0ny/pyramid_straw/',
    license='MIT',
    author='dz0ny',
    author_email='dz0ny@ubuntu.si',
    description='SQLAlchemy profiler for Pyramid Framework',
    packages=find_packages(exclude=['tests']),
    platforms='any',
    package_data={
        'static': ['*'],
        'templates': ['*'],
    },
    install_requires=[
        'pyramid',
        'SQLAlchemy',
        'pyramid_debugtoolbar',
    ],
    extras_require={
        'dev': ['pytest'],
    },
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Environment :: Web Environment',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.5',
    ],
)
