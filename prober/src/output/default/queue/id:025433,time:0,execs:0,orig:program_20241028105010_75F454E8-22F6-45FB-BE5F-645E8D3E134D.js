const o0 = {
};
const o1 = {
};
const v3 = new Proxy(o0, o1);
v3.__proto__ = v3;
try { JSON.stringify(v3); } catch (e) {}
gc();
