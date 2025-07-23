const o1 = {
    get h() {
        this.get = this;
        return this;
    },
};
const v3 = new Uint16Array();
const o4 = {
};
const v5 = o4.constructor;
try { v5.defineProperties(v3, o1); } catch (e) {}
gc();
