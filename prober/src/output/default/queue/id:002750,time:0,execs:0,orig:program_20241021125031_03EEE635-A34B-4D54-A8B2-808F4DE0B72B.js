const v1 = new Int32Array(Int32Array);
const v3 = new Int32Array(209);
function f4() {
    return v3;
}
const v6 = [f4];
Reflect.apply(v1.toSorted, v3, v6);
gc();
