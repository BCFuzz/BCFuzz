const v1 = 3262 != 3262;
const v3 = new Int8Array(3262);
const v5 = new Float32Array(3262, 3262, 3262);
gc();
v3[v5] = v1;
for (let v10 = 0; v10 < 25; v10++) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        function f13(a14) {
            new Float64Array(58766);
            return f13;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f13 });
        this.c = -256;
    }
    new F11();
    new F11();
    new F11();
}
gc();
