function f0() {
    function f1() {
        return f1;
    }
    return f1;
}
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        const o19 = {
            n(a11, a12, a13) {
                const v14 = this;
                const v15 = v14.Intl;
                v15.toString = f0;
                const t6 = v15.DateTimeFormat;
                const v17 = t6();
                try { v17.formatRange(v17, v15); } catch (e) {}
                return v14;
            },
        };
        const t12 = o19.n;
        t12();
    })()) {
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
