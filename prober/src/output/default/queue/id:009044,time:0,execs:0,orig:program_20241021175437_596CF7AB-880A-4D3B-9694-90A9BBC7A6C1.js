const o1 = {
    get h() {
        return this;
    },
};
const v3 = new Uint16Array(o1);
const o4 = {
};
o4.constructor.defineProperties(v3, o1);
gc();
