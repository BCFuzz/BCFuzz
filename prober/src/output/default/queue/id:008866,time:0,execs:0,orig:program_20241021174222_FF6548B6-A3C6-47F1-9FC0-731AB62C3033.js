const v0 = [];
function f1() {
    return v0;
}
const o3 = {
};
o3[Symbol.toPrimitive] = f1;
const v6 = new ArrayBuffer();
try { new Float32Array(v6, o3); } catch (e) {}
gc();
