for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o24 = {
            n(a9, a10, a11) {
                const v12 = this;
                const t4 = v12.Intl.DateTimeFormat;
                const v15 = t4();
                function f16() {
                    eval(("-789426228").constructor.fromCharCode(12));
                    return v7;
                }
                v15.toString = f16;
                try { v15.formatRangeToParts(v15, v15); } catch (e) {}
                return a9;
            },
        };
        const t15 = o24.n;
        t15();
    })()) {
}
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
}
gc();
