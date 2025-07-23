const v1 = ([-4096,-5,-1760124980,4294967297,-1353864084,9007199254740990,268435439,129,-128,247231449]).toLocaleString();
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        const o22 = {
            n(a11, a12, a13) {
                const v14 = this;
                const v15 = v14.Intl;
                const v16 = v15.DateTimeFormat;
                function f17(a18) {
                    return v1;
                }
                v16[Symbol.toPrimitive] = f17;
                v16.timeZone = v16;
                v16(a12, v16);
                return v15;
            },
        };
        const v23 = o22.n;
        try { v23(); } catch (e) {}
    })()) {
}
for (let i29 = -3, i30 = 10; i29 < i30; i30--) {
}
gc();
