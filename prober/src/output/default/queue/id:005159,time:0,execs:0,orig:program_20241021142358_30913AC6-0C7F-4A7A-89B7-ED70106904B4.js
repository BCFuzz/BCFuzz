function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F1();
}
Float32Array[Symbol.toPrimitive] = f0;
try { ("f").indexOf(Float32Array); } catch (e) {}
gc();
