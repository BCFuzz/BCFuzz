for (let i = 0; i < 5; i++) {
    async function f0(a1, a2, a3) {
        const o12 = {
            n(a5, a6, a7) {
                return f0;
            },
            n(a9, a10, a11) {
                return a10;
            },
        };
        return o12;
    }
    for (let v13 = 0; v13 < 25; v13++) {
        f0();
    }
}
gc();
