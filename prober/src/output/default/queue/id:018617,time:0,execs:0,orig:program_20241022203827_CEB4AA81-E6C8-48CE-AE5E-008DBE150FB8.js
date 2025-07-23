const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const o4 = {
};
const v6 = o4.constructor.freeze(v3);
try { v6.pop(); } catch (e) {}
gc();
