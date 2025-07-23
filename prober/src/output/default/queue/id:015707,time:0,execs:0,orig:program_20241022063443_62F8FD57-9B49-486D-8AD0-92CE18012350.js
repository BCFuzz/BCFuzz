const v2 = new Float64Array();
for (let i = 0; i < 10; i++) {
    const o13 = {
        set b(a5) {
            function f6(a7, a8) {
                return -544062659;
            }
            a5[Symbol.toPrimitive] = f6;
            ("" + a5) in v2;
        },
    };
    o13.b = o13;
}
gc();
