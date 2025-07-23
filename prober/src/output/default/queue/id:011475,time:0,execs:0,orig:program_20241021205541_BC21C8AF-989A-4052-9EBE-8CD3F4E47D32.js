function f0() {
    return f0;
}
const o2 = {
    get h() {
        this.set = f0;
        return this;
    },
};
const v4 = new Uint16Array();
const o5 = {
};
o5.constructor.defineProperties(v4, o2);
gc();
