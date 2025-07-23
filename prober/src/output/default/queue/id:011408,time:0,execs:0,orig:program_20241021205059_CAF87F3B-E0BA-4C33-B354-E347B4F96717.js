class C0 {
}
for (let i = 0; i < 100; i++) {
    function f3(a4, a5, a6, a7) {
        const o8 = {
            __proto__: a6,
        };
        o8[Symbol.toStringTag] = C0;
        return o8;
    }
    f3(2, "o", f3());
}
gc();
