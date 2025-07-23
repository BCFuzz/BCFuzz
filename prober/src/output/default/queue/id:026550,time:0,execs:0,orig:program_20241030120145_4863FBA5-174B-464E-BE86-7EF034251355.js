for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const v10 = `
        for (let [i23, i24] = (() => {
                const o20 = {
                    ["eC"](a14, a15) {
                        class C16 {
                        }
                        eval(C16 + C16);
                    },
                };
                try { o20.eC(o20, i3); } catch (e) {}
                return [0, 10];
            })();
            i23 < i24;
            i24--) {
        }
        /\u{12345}/myvis;
    `;
    eval(v10);
}
gc();
