for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = 0, i14 = 10;
    i13 < i14;
    (() => {
        const v18 = i14--;
        const o30 = {
            n(a20, a21, a22) {
                const v23 = this;
                const v25 = v23.Intl.DateTimeFormat;
                function f26() {
                    return 1.7976931348623157e+308;
                }
                function f27(a28) {
                    return i13;
                }
                Object.defineProperty(v25, "hour12", { enumerable: true, get: f26, set: f27 });
                return v25(a21, v25);
            },
        };
        const v31 = o30.n;
        try { v31(v18); } catch (e) {}
    })()) {
}
gc();
