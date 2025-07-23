const o2 = {
    get h() {
        this.get = 1n;
        return this;
    },
};
const v4 = new Uint16Array();
const o5 = {
};
const v6 = o5.constructor;
try { v6.defineProperties(v4, o2); } catch (e) {}
gc();
