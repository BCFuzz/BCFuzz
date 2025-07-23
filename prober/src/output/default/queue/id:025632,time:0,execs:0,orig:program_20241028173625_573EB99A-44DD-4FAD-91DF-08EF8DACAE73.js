for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o24 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v13 = v12.Intl;
                const t5 = v13.DateTimeFormat;
                const v15 = t5(i3, v12, this);
                function f16() {
                    const v17 = `
                        /\u{12345}/myvis;
                    `;
                    v17.replace("allSettled", v17);
                    eval(v13);
                }
                v15.toString = f16;
                try { v15.formatRangeToParts(v15, v15); } catch (e) {}
                return i2;
            },
        };
        const t19 = o24.n;
        t19(i3, v7, i3, o24);
    })()) {
}
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
}
gc();
