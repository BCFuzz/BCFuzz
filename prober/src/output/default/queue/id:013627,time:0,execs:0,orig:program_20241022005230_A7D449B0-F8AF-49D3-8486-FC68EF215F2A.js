const o1 = {
    get h() {
        this.__proto__ = this;
        return this;
    },
};
const v3 = new Uint16Array(o1, Uint16Array, o1);
const o4 = {
};
const v5 = o4.constructor;
try { v5.defineProperties(v3, o1); } catch (e) {}
gc();
