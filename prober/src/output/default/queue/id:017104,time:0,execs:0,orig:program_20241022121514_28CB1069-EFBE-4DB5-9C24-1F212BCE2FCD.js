function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        const v11 = i7--;
        const o23 = {
            n(a13, a14, a15) {
                const v16 = this;
                const v18 = v16.Intl.DateTimeFormat;
                function f19() {
                    return v3;
                }
                function f20(a21) {
                    return f20;
                }
                Object.defineProperty(v18, "minute", { configurable: true, get: f19, set: f20 });
                v18(a14, v18);
                return v11;
            },
        };
        const v24 = o23.n;
        try { v24(); } catch (e) {}
    })()) {
}
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
}
gc();
