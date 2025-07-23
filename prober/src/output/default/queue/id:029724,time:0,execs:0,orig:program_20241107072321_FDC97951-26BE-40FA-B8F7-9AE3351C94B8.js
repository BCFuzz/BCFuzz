for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = [58233,-1717496220,-1073741824,129,9,32227];
function f13(a14, a15) {
    return 1000000.0;
}
const o19 = {
    "maxByteLength": 2147483647,
};
function f20(a21) {
    return 536870912;
}
o19.valueOf = f20;
const v22 = new ArrayBuffer(o19, o19);
v22[Symbol.toPrimitive] = f13;
const v25 = new Int8Array(v22, Int8Array, v22);
function f26(a27) {
    Object.defineProperty(v25, 0, { writable: true, enumerable: true, value: v10 });
    return v25;
}
f26.call();
gc();
