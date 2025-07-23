function f0(a1, a2) {
    a2 >>> a2;
    const o4 = {
    };
    return o4;
}
const v5 = f0(f0, f0);
const o6 = {
    "get": f0,
};
const v8 = new Proxy(v5, o6);
const t11 = createGlobalObject().Float16Array;
const v12 = new t11();
const v13 = v12.constructor;
try { new v13(v8); } catch (e) {}
gc();
