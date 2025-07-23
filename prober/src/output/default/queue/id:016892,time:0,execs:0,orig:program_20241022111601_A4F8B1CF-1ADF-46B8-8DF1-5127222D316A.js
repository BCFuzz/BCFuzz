const v0 = [129,5,62038];
function f1(a2) {
    return v0;
}
v0.toString = f1;
const t5 = createGlobalObject().Float16Array;
const v7 = new t5();
try { v7.subarray(Float64Array, v0); } catch (e) {}
gc();
