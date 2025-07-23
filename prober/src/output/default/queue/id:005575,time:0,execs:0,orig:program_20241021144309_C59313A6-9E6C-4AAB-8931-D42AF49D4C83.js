const o2 = {
    "maxByteLength": 2659,
};
const v4 = new SharedArrayBuffer(2659, o2);
function f5() {
    return 8;
}
v4[Symbol.toPrimitive] = f5;
const v10 = new Uint16Array(v4);
v10[v4];
gc();
