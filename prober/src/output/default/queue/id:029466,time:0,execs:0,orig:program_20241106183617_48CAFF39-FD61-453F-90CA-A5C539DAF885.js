for (let i = 0; i < 5; i++) {
    async function f0(a1, a2, a3) {
        const o12 = {
            n(a5, a6, a7) {
                return a2;
            },
            n(a9, a10, a11) {
                return f0;
            },
        };
        function f13(a14, a15) {
            for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
            }
        }
        o12.then = f13;
        function f26() {
            o12.Float16Array;
        }
        return o12;
    }
    for (let v28 = 0; v28 < 25; v28++) {
        f0();
    }
}
gc();
