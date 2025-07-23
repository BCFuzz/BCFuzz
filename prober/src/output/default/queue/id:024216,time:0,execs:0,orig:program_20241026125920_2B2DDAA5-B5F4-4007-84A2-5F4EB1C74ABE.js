function f1() {
    return -0.8429213529714694;
}
const v4 = new Float32Array(178);
const t4 = createGlobalObject().Float16Array;
const v9 = new t4(8);
const v10 = v9.toSorted(createGlobalObject, -0.8429213529714694, -0.8429213529714694, v9, v9);
v10[Symbol.toPrimitive] = f1;
v10[2] = v10;
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
const v23 = v10.toString();
v4.toLocaleString().indexOf(v23);
gc();
