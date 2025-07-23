function f0() {
    return f0;
}
const v1 = /h/dgis;
Object.defineProperty(v1, "global", { configurable: true, enumerable: true, get: f0 });
const v3 = Date.call();
for (let i = 0; i < 10; i++) {
    const o9 = {
        set b(a5) {
            ("MIN_VALUE" + v3).replace(v1, "MIN_VALUE");
        },
    };
    o9.b = o9;
}
gc();
