SRC_DIR	:= src
FINAL_DIR	:= final
BUILD_DIR	:= build
RM	:= rm -f

all: build

build: install ${FINAL_DIR}
	npx tsc 
	npx babel ${BUILD_DIR} --out-dir ${FINAL_DIR} 

${FINAL_DIR}: 
	@mkdir -p $(dir $@)

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

.PHONY:	all build clean re install lint fmt

