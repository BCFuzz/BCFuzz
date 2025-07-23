const v1 = (-16).toLocaleString();
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        const o22 = {
            n(a11, a12, a13) {
                const v14 = this;
                const v16 = v14.Intl.DateTimeFormat;
                function f17(a18) {
                    return v1;
                }
                v16[Symbol.toPrimitive] = f17;
                v16.timeZone = v16;
                return v16(a12, v16);
            },
        };
        const t13 = o22.n;
        t13();
    })()) {
}
gc();
