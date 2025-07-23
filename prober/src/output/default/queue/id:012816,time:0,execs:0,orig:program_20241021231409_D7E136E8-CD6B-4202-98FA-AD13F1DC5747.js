function f0() {
    return f0;
}
function f1() {
    let [,v2] = f0;
    return f0;
}
f0[Symbol.iterator] = f1;
try { new Float64Array(f0); } catch (e) {}
gc();
