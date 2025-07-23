function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        for (let v6 = 0; v6 < 25; v6++) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
                function f9(a10) {
                    new Float64Array(58766);
                    return F0;
                }
                Object.defineProperty(this, "c", { configurable: true, set: f9 });
                this.c = -256;
            }
            new F7();
            new F7();
            new F7();
        }
        return f2;
    }
    this.then = f2;
}
const v16 = new F0();
async function f17(a18, a19, a20, a21) {
    await v16;
    return f17;
}
f17(F0, f17, v16, F0);
gc();
