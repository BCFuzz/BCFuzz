for (let i = 0; i < 50; i++) {
    function f4(a5, a6, a7, a8) {
        const o13 = {
            1000: 2,
            [a7]: undefined,
            "maxByteLength": 2,
            valueOf(a10, a11, a12) {
                return a11;
            },
        };
        return o13;
    }
    f4(f4, 7, f4);
    f4(2, "o", f4());
}
gc();
