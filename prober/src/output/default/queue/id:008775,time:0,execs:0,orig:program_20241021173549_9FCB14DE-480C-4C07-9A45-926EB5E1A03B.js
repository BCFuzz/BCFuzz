const o1 = {
    get h() {
        return this;
    },
};
o1[-2] = o1;
const v3 = new Uint16Array(o1, Uint16Array, Uint16Array);
const o4 = {
};
const v5 = o4.constructor;
try { v5.defineProperties(v3, o1); } catch (e) {}
gc();
