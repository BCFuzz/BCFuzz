for (let v2 = 0; v2 < 25; v2++) {
    class C4 extends Float32Array {
        #toString(a6, a7, a8) {
        }
    }
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12) {
            new Float64Array(58766);
        }
        Object.defineProperty(this, "c", { configurable: true, set: f11 });
        this.c = -256;
    }
    new WeakSet();
    const v19 = new ArrayBuffer();
    const v21 = new DataView(v19);
    try { v21.getInt8(256); } catch (e) {}
    for (let v23 = 0; v23 < 100; v23++) {
    }
    new F9();
    new F9();
    new F9();
}
gc();
