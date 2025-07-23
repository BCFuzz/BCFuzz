for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            const v6 = new SharedArrayBuffer();
            eval(a4);
            const v10 = new DataView(v6);
            const v11 = v10.setFloat32;
            try { v11(v6, v6); } catch (e) {}
            for (let v13 = 0; v13 < 100; v13++) {
            }
            return f3;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f3 });
        this.c = -256;
    }
    new F1();
}
gc();
