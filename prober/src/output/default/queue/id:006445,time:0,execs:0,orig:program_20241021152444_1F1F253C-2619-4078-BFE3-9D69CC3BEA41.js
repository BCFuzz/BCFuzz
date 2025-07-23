const v2 = new Int32Array(209);
const v3 = [209,209];
function f4() {
    return v3;
}
const v6 = [f4];
Reflect.apply(v3.toSorted, v2, v6);
gc();
