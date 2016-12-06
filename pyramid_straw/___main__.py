from pyramid_straw.micro import PyramidMicro

if __name__ == '__main__':
    app = PyramidMicro()
    app.scan()
    app.run(8080)
