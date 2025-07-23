const v1 = -1.0 + -1.0;
const v4 = new Float32Array(178);
const t2 = createGlobalObject().Float16Array;
const v9 = new t2(8);
const v10 = v9.toSorted();
function f11(a12) {
    return v1;
}
v10[Symbol.toPrimitive] = f11;
v10[2] = v10;
const v15 = v10.toString();
v4.toLocaleString().indexOf(v15);
gc();
