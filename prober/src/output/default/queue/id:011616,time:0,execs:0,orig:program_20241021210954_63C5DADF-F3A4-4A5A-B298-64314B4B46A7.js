const v2 = new Int16Array(3551);
function f3() {
    for (let v6 = 0; v6 < 25; v6++) {
        v2[v6] = v6;
        function F7() {
            if (!new.target) { throw 'must be called with new'; }
            function f9(a10) {
                new Float64Array(58766);
                return v6;
            }
            Object.defineProperty(this, "c", { configurable: true, set: f9 });
            this.c = -256;
        }
        new F7();
        new F7();
    }
    return Float64Array;
}
f3();
f3();
gc();
