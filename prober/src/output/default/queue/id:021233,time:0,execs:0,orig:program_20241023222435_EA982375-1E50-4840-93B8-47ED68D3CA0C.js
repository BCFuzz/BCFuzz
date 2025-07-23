const o1 = {
    "get": EvalError,
};
const v3 = new Proxy(EvalError, o1);
try { new v3(); } catch (e) {}
gc();
