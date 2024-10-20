SRC_DIR	:= src
FINAL_DIR	:= final
BUILD_DIR	:= build
RM	:= rm -f

all: build-all

build-all: install ${BUILD_DIR} ${FINAL_DIR}
	npx tsc
	npx babel ${BUILD_DIR} --out-dir ${FINAL_DIR} 

${BUILD_DIR}: 
	mkdir -p $@

${FINAL_DIR}: 
	mkdir -p $@

clean:
	${RM} -r ${BUILD_DIR} ${FINAL_DIR}

re: clean all

install:
	npm install

lint: install
	npx eslint ${SRC_DIR}

fmt: install
	npx prettier . --write

check: lint
	npx prettier . --check

.PHONY:	all build-all clean re install lint fmt

