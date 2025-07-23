for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o20 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                function f15() {
                    a11[1191154859];
                    return v14;
                }
                function f17(a18) {
                    return i2;
                }
                Object.defineProperty(v14, "hour12", { enumerable: true, get: f15, set: f17 });
                v14(a10, v14);
                return this;
            },
        };
        const v21 = o20.n;
        try { v21(); } catch (e) {}
    })()) {
}
gc();
