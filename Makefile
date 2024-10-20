SRC_DIR	:= src
DIST_DIR	:= dist
BUILD_DIR	:= build
RM	:= rm -f

all: install ${DIST_DIR}
	npx babel ${SRC_DIR} --out-dir ${DIST_DIR} --extensions ".ts"

build:
	npx tsc 

${DIST_DIR}: 
	@mkdir -p $(dir $@)

clean:
	${RM} -r ${DIST_DIR}

re: clean all

install:
	npm install

lint: install
	npx eslint ${SRC_DIR}

fmt: install
	npx prettier . --write

check: lint
	npx prettier . --check

.PHONY:	all build clean re install lint fmt

