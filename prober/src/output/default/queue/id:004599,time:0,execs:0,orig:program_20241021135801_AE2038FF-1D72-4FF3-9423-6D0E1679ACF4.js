function f0(a1, a2) {
    const o3 = {
    };
    return o3;
}
const v4 = [-2147483647,1,-11956];
v4[Symbol.toPrimitive] = f0;
const o9 = {
    "maxByteLength": 1073741824,
};
const v11 = new SharedArrayBuffer(492, o9);
try { v11.grow(v4); } catch (e) {}
gc();
