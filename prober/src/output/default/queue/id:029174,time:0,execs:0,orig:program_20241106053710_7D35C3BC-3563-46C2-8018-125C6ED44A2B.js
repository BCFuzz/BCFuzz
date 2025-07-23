const v0 = [0];
function f1() {
    return v0;
}
const v7 = createGlobalObject().Float16Array;
const o9 = {
    "maxByteLength": 80,
};
const v11 = new ArrayBuffer(6, o9);
const v12 = new v7(v11, v0, f1);
try { v12.__defineGetter__(257, BigInt64Array); } catch (e) {}
gc();
