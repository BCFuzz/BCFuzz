for (let i = 0; i < 10; i++) {
    const o16 = {
        set b(a1) {
            function F2(a4, a5) {
                if (!new.target) { throw 'must be called with new'; }
                ([9,9007199254740991,-1,1000,-859215042,-4294967296,128]).copyWithin();
                const o10 = {
                    "maxByteLength": 1953043059,
                };
                const v12 = new ArrayBuffer(7, o10);
                new Uint8Array(v12);
            }
            new F2();
        },
    };
    o16.b = o16;
}
gc();
