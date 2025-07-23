const v0 = [];
function f1(a2) {
    return 4;
}
v0[Symbol.toPrimitive] = f1;
v0[1] = v0;
const t6 = createGlobalObject().Float16Array;
const v10 = new t6(v0);
const v12 = new Uint8ClampedArray(v10.buffer);
v12.set(v10);
gc();
