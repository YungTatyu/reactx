SRC_DIR	:= src
DIST_DIR	:= dist
RM	:= rm -f

all: init ${DIST_DIR}
	npx babel ${SRC_DIR} --out-dir ${DIST_DIR} --extensions ".ts"

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

.PHONY:	all clean re init lint fmt

