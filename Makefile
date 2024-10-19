SRC_DIR	:= src
DIST_DIR	:= dist
BUILD_DIR	:= build
RM	:= rm -f

all: init ${DIST_DIR}
	npx babel ${SRC_DIR} --out-dir ${DIST_DIR} --extensions ".ts"

build:
	npx tsc 

${DIST_DIR}: 
	@mkdir -p $(dir $@)

clean:
	${RM} -r ${DIST_DIR}

re: clean all

init:
	npm install

lint: init
	npx eslint ${SRC_DIR}

fmt: init
	npx prettier . --write

check: lint
	npx prettier . --check

.PHONY:	all build clean re init lint fmt

