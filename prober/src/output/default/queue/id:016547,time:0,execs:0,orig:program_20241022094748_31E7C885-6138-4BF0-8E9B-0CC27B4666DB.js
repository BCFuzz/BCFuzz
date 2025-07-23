for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            const v6 = new SharedArrayBuffer();
            const v8 = new DataView(v6);
            const v9 = v8.setFloat32;
            try { v9(v6, v6); } catch (e) {}
            for (let v11 = 0; v11 < 100; v11++) {
            }
            return f3;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f3 });
        this.c = -256;
    }
    new F1();
}
gc();
