const v1 = new Int32Array();
const v3 = new Int32Array(209);
function f4() {
    return 1000000000000.0;
}
const v8 = [f4.bind(Int32Array, v1)];
Reflect.apply(v1.toSorted, v3, v8);
gc();
