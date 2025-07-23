const v1 = new Float64Array();
for (let i = 0; i < 10; i++) {
    const o13 = {
        set b(a4) {
            function f5(a6, a7) {
                return a6;
            }
            a4[Symbol.toPrimitive] = f5;
            const v10 = "" + a4;
            for (let v11 = 0; v11 < 250; v11++) {
            }
            v10 in v1;
        },
    };
    o13.b = o13;
}
gc();
