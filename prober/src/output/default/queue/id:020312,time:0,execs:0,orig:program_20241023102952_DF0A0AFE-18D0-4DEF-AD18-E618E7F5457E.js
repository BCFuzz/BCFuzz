for (let v0 = 0; v0 < 25; v0++) {
    function f1() {
        return f1;
    }
    class C2 {
        constructor(a4) {
            const v6 = new SharedArrayBuffer(a4, SharedArrayBuffer);
            const v8 = new DataView(v6);
            const v9 = v8.setFloat32;
            try { v9(v6, v6, f1); } catch (e) {}
            for (let v11 = 0; v11 < 100; v11++) {
            }
        }
    }
    new C2();
}
gc();
