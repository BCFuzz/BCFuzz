for (let i = 0; i < 100; i++) {
    function f4(a5, a6, a7, a8) {
        const o9 = {
            "c": "o",
            ..."o",
            1000: 2,
            [a8]: "m",
            [a7]: undefined,
            "e": "o",
            __proto__: a7,
            0: 2,
            "b": a8,
        };
        return o9;
    }
    f4(2, "o", f4(2, undefined, undefined, f4), 2);
}
gc();
