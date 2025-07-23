("POSITIVE_INFINITY").concat(Float32Array);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
const v8 = new Float32Array(2);
v8.with(v7, "POSITIVE_INFINITY");
gc();
