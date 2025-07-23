const o3 = {
    get h() {
        this.get = Date;
        return this;
    },
};
o3.value = 1n;
const v5 = new Uint16Array();
const o6 = {
};
const v7 = o6.constructor;
try { v7.defineProperties(v5, o3); } catch (e) {}
gc();
