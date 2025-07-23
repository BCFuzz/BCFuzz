const v0 = `
    for (let [i11, i12] = (() => {
            const o8 = {
                ["eC"](a5, a6) {
                    "object" in "object";
                },
            };
            try { o8.eC(); } catch (e) {}
            return [0, 10];
        })();
        i11 < i12;
        i12--) {
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
