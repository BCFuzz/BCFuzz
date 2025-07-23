const v1 = `
    for (let [i16, i17] = (() => {
            const o13 = {
                ["eC"](a5, a6) {
                    class C7 {
                    }
                    eval(C7 + URIError(Uint8ClampedArray));
                },
            };
            try { o13.eC(); } catch (e) {}
            return [0, 10];
        })();
        i16 < i17;
        i17--) {
    }
    /\u{12345}/myvis;
`;
eval(v1);
gc();
