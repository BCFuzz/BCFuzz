const v1 = [64];
function f2() {
    return v1;
}
const o5 = {
    "maxByteLength": 257,
};
const v7 = new ArrayBuffer(256, o5);
const v8 = new Uint8ClampedArray(v7, v1, f2);
delete v8[4];
gc();
