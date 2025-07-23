const o2 = {
    "get": -9n,
};
const v4 = new Proxy(RegExp, o2);
try { v4(v4); } catch (e) {}
gc();
