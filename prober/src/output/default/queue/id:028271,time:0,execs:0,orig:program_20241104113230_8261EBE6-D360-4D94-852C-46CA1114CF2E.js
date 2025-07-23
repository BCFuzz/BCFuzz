for (let i2 = 0, i3 = 10;
    i3--, i2 < i3;
    (() => {
        const o26 = {
            n(a9, a10, a11) {
                const v12 = `
                    function f13(a14, a15) {
                        const v18 = new Uint32Array(1000);
                        for (const v19 in v18) {
                            /\ud808\udf45*[\cA]/mis.test(undefined);
                        }
                        return this;
                    }
                    f13(i2, f13);
                `;
                eval(v12);
                return i3;
            },
        };
        const v27 = o26.n;
        v27(v27);
    })()) {
}
gc();
