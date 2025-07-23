for (let v2 = 0; v2 < 25; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            new Float64Array(58766);
            return F3;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.c = -256;
    }
    const v9 = [1000.0,-1000000000.0,-8.577134301563943,-9.308809768664245,-7.298598688916302e+307,-947.5864983289692,3.6333665853683457e+306,-4.417732566911834,2.372151045286696,1000.0];
    let v10 = new Float64Array();
    const v12 = new FinalizationRegistry(FinalizationRegistry);
    v10 = v12.register(v9, v10, v12);
    new F3();
    new F3();
    new F3();
}
gc();
