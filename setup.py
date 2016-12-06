"""
Pyramid Straw
"""
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
    name='Pramid-Straw',
    version=version,
    url='http://github.com/dz0ny/pyramid_straw/',
    license='MIT',
    author='dz0ny',
    author_email='dz0ny@ubuntu.si',
    description='SQLAlchemy profiler for Pyramid Framework',
    packages=['pyramid_straw'],
    platforms='any',
    install_requires=[
        'pyramid',
        'pyramid_jinja2',
        'requests',
    ],
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Environment :: Web Environment',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.5',
    ],
)
