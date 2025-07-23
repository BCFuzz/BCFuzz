for (let i4 = 0, i5 = 7; i4 < i5; i5--) {
}
function f14() {
    return 72;
}
SharedArrayBuffer[Symbol.toPrimitive] = f14;
const v17 = new SharedArrayBuffer(SharedArrayBuffer);
const v18 = new Uint16Array(v17);
const v19 = new Uint8ClampedArray(v17);
v19.set(v18);
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
}
gc();
