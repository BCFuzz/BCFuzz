const v1 = new WeakSet();
const v3 = new Set();
const o4 = {
};
const v6 = new Proxy(v3, o4);
v1.__proto__ = v6;
gc();
