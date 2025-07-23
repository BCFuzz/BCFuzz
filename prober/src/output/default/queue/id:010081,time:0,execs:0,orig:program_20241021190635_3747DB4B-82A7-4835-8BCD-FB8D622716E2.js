for (let v0 = 0; v0 < 25; v0++) {
    class C1 {
        constructor(a3, a4, a5) {
            function F6(a8, a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                /6(a\1)/dis.exec("getUint32");
            }
            const v14 = new F6();
            new F6(v14, a4, F6);
        }
    }
    const v16 = new C1(v0, C1, C1);
    new C1(C1, v16, v16);
}
gc();
