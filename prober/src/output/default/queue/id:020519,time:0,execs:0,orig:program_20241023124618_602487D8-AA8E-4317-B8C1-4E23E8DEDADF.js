const o1 = {
    "get": Date,
};
const v3 = new Proxy(Date, o1);
try { new v3(); } catch (e) {}
gc();
