for (let i = 0; i < 100; i++) {
    function f4(a5, a6, a7, a8) {
        const o9 = {
            [a8]: "m",
            [a7]: undefined,
            "e": a8,
            __proto__: a7,
        };
        o9.e = o9;
        return o9;
    }
    f4(2, "o", f4());
}
gc();
