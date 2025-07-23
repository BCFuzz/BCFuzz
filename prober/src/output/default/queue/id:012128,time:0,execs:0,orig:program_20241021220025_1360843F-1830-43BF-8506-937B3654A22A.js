const o1 = {
    get h() {
        this.writable = this;
        return this;
    },
};
const v3 = new Uint16Array();
const o4 = {
};
o4.constructor.defineProperties(v3, o1);
gc();
