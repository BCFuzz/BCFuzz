const o1 = {
    "get": SyntaxError,
};
const v3 = new Proxy(SyntaxError, o1);
try { new v3(); } catch (e) {}
gc();
