const o1 = {
    "get": RegExp,
};
const v3 = new Proxy(RegExp, o1);
try { new v3(Proxy); } catch (e) {}
gc();
