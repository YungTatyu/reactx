SRC_DIR	:= src
DIST_DIR	:= dist
RM	:= rm -f

all: ${DIST_DIR}
	npx babel ${SRC_DIR} --out-dir ${DIST_DIR} --extensions ".ts"

${DIST_DIR}: 
	@mkdir -p $(dir $@)

clean:
	${RM} -r ${DIST_DIR}

re: clean all


.PHONY:	all clean re

