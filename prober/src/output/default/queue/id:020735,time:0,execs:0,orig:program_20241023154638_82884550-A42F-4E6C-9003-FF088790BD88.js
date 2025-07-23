for (let v0 = 0; v0 < 5; v0++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = a5.name;
        class C8 {
            constructor(a10, a11) {
                super[a10];
                v7 in arguments;
            }
        }
        const v15 = new C8(a6, C8);
        const t11 = v15.constructor;
        new t11();
    }
    new F2(196.25100004624983, F2);
}
gc();
