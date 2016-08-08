all: main

main: libhttp_server.a
	gcc ./src/main.c -I./include -L./lib -lhttp_server -o ./bin/main

libhttp_server.a: http_server.o
	ar rc ./lib/libhttp_server.a ./build/http_server.o

http_server.o:
	gcc -c -I./include ./src/http_server.c -o ./build/http_server.o

clean:
	rm ./build/*.*
