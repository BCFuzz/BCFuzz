for (let v1 = 0; v1 < 10; v1++) {
    const o20 = {
        [undefined](a4, a5, a6) {
            function F7(a9, a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                class C13 {
                    8 = v1;
                    constructor(a15, a16) {
                        let v17 = arguments;
                        v17 = 2;
                    }
                }
                new C13(a9, F7);
            }
            new F7();
        },
    };
    o20.undefined();
}
gc();
