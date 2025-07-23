function f1(a2) {
    return a2;
}
const o3 = {
    "get": f1,
};
const v5 = new Proxy(ArrayBuffer, o3);
try { new v5(); } catch (e) {}
gc();
