const v2 = new Uint16Array(2647);
v2[2483] = v2;
const v5 = new Float32Array(1024);
for (const v6 in v5) {
}
const o10 = {
    "maxByteLength": 416,
};
const v12 = new SharedArrayBuffer(116, o10);
const v13 = new Float64Array(v12);
function f14(a15, a16) {
}
function f17() {
    return v2;
}
f14[Symbol.species] = f17;
v13.constructor = f14;
v13.slice();
gc();
