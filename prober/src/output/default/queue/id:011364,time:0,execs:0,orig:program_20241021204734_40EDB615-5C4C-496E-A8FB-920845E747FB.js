const o1 = {
    "get": RegExp,
};
const v3 = new Proxy(RegExp, o1);
try { v3(Proxy, v3); } catch (e) {}
gc();
