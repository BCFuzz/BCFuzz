for (let v0 = 0; v0 < 5; v0++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = a5.name;
        class C8 {
            constructor(a10, a11) {
                a10 ^ a10;
                v7 in arguments;
            }
        }
        new C8();
        new C8(Infinity, this);
    }
    new F2(Infinity, F2);
}
gc();
