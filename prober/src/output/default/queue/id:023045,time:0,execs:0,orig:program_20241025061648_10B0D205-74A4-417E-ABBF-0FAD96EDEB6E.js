const o1 = {
    "get": Promise,
};
const v3 = new Proxy(Promise, o1);
try { new v3(Proxy); } catch (e) {}
gc();
