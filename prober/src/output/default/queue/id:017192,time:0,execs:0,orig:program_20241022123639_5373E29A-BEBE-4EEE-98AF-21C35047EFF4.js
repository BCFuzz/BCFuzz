for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o19 = {
    toString(a11, a12) {
        function F13(a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return F13();
    },
};
for (let i22 = 0, i23 = 10;
    i22 < i23;
    (() => {
        i23--;
        const o39 = {
            n(a29, a30, a31) {
                const v32 = this;
                const v34 = v32.Intl.DateTimeFormat;
                function f35() {
                    return o19;
                }
                function f36(a37) {
                    return o19;
                }
                Object.defineProperty(v34, "minute", { configurable: true, get: f35, set: f36 });
                return v34(a30, v34);
            },
        };
        const v40 = o39.n;
        try { v40(); } catch (e) {}
    })()) {
}
gc();
