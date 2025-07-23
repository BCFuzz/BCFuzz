const v2 = new Uint16Array(1024);
const o16 = {
    o(a4, a5, a6, a7) {
        ~this;
        return a7;
    },
    toString(a10, a11, a12, a13) {
        for (let v14 = 0; v14 < 5; v14++) {
            v2.indexOf(v14);
        }
    },
};
o16.o(v2, o16, 1024, o16, v2);
gc();
