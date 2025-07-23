const o1 = {
};
const v3 = new Proxy(o1, o1);
const v4 = new Uint16Array();
const v7 = this.constructor.defineProperties(v4, v3);
try { v7.toSorted(v3); } catch (e) {}
gc();
