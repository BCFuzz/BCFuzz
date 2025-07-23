for (let v0 = 0; v0 < 5; v0++) {
    function f1(a2, a3) {
        for (let v4 = 0; v4 < 100; v4++) {
        }
        class C5 {
        }
        const v6 = new C5();
        const t7 = v6.constructor;
        const v8 = new t7(a2, C5, v6, a3, v0);
        const v9 = v8.__defineSetter__;
        for (let i = 0; i < 5; i++) {
            const v12 = new SharedArrayBuffer(256, SharedArrayBuffer);
            const v14 = new DataView(v12);
            try { v14.setUint32(256, v9); } catch (e) {}
        }
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
        return C5;
    }
    f1();
    f1();
}
gc();
