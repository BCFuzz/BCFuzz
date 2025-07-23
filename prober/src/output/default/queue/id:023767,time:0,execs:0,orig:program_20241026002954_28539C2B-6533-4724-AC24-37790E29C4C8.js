const o1 = {
    "get": RangeError,
};
const v3 = new Proxy(RangeError, o1);
try { new v3(); } catch (e) {}
gc();
