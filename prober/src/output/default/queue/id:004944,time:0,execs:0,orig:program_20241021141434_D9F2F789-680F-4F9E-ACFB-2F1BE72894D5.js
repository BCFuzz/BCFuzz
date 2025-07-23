for (let v0 = 0; v0 < 5; v0++) {
    class C2 {
    }
    const v3 = new C2();
    function f4(a5, a6, a7, a8) {
        const t5 = a5.constructor;
        new t5();
        ~a8;
        return f4;
    }
    const v12 = f4(v3, f4, C2, 752281194n);
    try { v12.apply(); } catch (e) {}
}
gc();
