for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o18 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v14 = v13.Intl;
                v14[Symbol.toPrimitive] = Symbol;
                const v16 = v14.DateTimeFormat;
                Object.defineProperty(v16, "hourCycle", { writable: true, enumerable: true, value: v14 });
                v16(a11, v16);
                return Symbol;
            },
        };
        const v19 = o18.n;
        try { v19(); } catch (e) {}
    })()) {
}
gc();
