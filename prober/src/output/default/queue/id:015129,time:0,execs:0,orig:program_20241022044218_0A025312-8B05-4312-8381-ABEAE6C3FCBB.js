class C0 {
    constructor(a2) {
        const v4 = new SharedArrayBuffer(a2, C0);
        const v6 = new DataView(v4);
        const v7 = v6.setFloat32;
        try { v7(v4, v4); } catch (e) {}
        for (let v9 = 0; v9 < 100; v9++) {
        }
    }
}
new C0();
new C0();
gc();
