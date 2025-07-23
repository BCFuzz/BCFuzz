for (let i4 = -3, i5 = 10; i5--, i4 < i5;) {
}
gc();
const v15 = new Uint8ClampedArray();
const v16 = v15.set;
try { v16(); } catch (e) {}
for (let v19 = 0; v19 < 25; v19++) {
    const t7 = createGlobalObject().TypeError;
    t7();
    function F23() {
        if (!new.target) { throw 'must be called with new'; }
        function f25(a26) {
            new Float64Array(58766);
        }
        Object.defineProperty(this, "c", { configurable: true, set: f25 });
        this.c = -256;
    }
    new F23();
    new F23();
    new F23();
}
gc();
