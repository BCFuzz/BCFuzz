const v0 = [5,22833,127,-1024];
for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o28 = {
            n(a10, a11, a12) {
                const v13 = this;
                const t4 = v13.Intl.DateTimeFormat;
                const v16 = t4();
                function f17(a18, a19) {
                    const o20 = {
                    };
                    return o20;
                }
                const v21 = f17(this, i3);
                const v22 = f17(v21, v21);
                let v23 = 44485;
                for (; v23--;) {
                }
                for (let v25 = 0; v25 < 5; v25++) {
                    v21 <= v22;
                }
                return v16.format(v0);
            },
        };
        const v29 = o28.n;
        try { v29(); } catch (e) {}
    })()) {
}
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
}
gc();
