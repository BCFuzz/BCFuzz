const v0 = `
    class C1 {
    }
    const v2 = /\u{12345}/myvis;
    function f3(a4) {
        const v7 = new FinalizationRegistry(Int8Array);
        while ((() => {
                f3();
                v7.c = C1;
                return 0 < 5;
            })()) {
        }
        return v2;
    }
    v2.toString = f3;
    try { v2.toString(); } catch (e) {}
`;
eval(v0);
gc();
