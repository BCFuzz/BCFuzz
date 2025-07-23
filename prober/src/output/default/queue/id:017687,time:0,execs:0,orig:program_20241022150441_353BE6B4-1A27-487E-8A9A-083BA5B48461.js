let v0 = 16;
const v1 = v0++;
const o4 = {
    "maxByteLength": 1780,
};
const v6 = new ArrayBuffer(0, o4);
const v8 = new Uint16Array(v6);
const v10 = v8.fill(o4, 1780, v1).subarray(0, v1);
const v12 = new Int8Array();
function f13(a14, a15) {
    v10[16];
    return a14;
}
Object.defineProperty(v12, "valueOf", { enumerable: true, value: f13 });
v10[548211134] = v12;
gc();
