const o2 = {
    "get": 3,
};
const v4 = new Proxy(RegExp, o2);
try { new Uint16Array(v4); } catch (e) {}
gc();
