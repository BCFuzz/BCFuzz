const v0 = [64];
function f1() {
    return f1;
}
const o4 = {
    "maxByteLength": 257,
};
const v6 = new ArrayBuffer(256, o4);
const v8 = new Float64Array(v6, v0, f1);
delete v8[4];
gc();
