const v1 = new Float64Array();
function f2() {
    return v1;
}
const v4 = new Uint16Array(v1);
v4.constructor = f2;
const v5 = v4.constructor;
const v8 = createGlobalObject().Float16Array;
const v9 = v5();
const v11 = new v8(v9.buffer);
v11.set(v9);
for (let i14 = 10, i15 = 10; i15--;) {
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
