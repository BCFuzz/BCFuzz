const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new Float32Array();
function f6() {
    const v8 = new Int8Array();
    return v8;
}
v5.constructor = f6;
const t10 = v5.constructor;
const v10 = t10();
try { v10.sort(v3); } catch (e) {}
gc();
