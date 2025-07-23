const o2 = {
    "get": 5,
};
const v4 = new Proxy(RegExp, o2);
const v6 = new Set();
try { v6.isSubsetOf(v4); } catch (e) {}
gc();
