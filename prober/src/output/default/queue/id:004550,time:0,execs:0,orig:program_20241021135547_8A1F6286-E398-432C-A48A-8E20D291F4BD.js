const o1 = {
    "get": RegExp,
};
const v3 = new Proxy(RegExp, o1);
const v5 = new Set();
try { v5.isSubsetOf(v3); } catch (e) {}
gc();
