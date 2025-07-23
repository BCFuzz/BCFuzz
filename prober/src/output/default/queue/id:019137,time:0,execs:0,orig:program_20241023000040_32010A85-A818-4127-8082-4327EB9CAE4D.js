let v1;
try { v1 = Float32Array(Float32Array, Float32Array, Float32Array); } catch (e) {}
function f3() {
    function f5() {
        return f3;
    }
    const v6 = f5.apply(BigInt64Array, arguments);
    try { v6(v1); } catch (e) {}
}
f3();
gc();
