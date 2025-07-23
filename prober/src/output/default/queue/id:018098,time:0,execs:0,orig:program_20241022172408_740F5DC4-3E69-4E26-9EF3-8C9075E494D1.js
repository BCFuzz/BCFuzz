const v1 = new Int32Array();
const v3 = new Int32Array(28341);
function f4() {
    return -6.500221299607023e+307;
}
const v8 = [f4.bind()];
Reflect.apply(v1.toSorted, v3, v8);
gc();
