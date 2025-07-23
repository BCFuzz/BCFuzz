[-1.0,414917.1832100055,0.9494476743131598,-1000000.0,-1e-15];
class C1 {
}
for (let v3 = 0; v3 < 32; v3++) {
    createGlobalObject();
    const v6 = createGlobalObject();
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
        function f9(a10) {
            new Float64Array(58766);
        }
        Object.defineProperty(this, "c", { configurable: true, set: f9 });
        this.c = -256;
    }
    new F7();
    new F7(C1, v6);
}
gc();
