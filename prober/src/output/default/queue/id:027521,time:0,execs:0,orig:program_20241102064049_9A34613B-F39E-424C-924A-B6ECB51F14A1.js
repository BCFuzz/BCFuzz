const o1 = {
    "get": RegExp,
};
const v3 = new Proxy(RegExp, o1);
const v6 = Symbol.match.description;
try { v6.startsWith(v3); } catch (e) {}
gc();
