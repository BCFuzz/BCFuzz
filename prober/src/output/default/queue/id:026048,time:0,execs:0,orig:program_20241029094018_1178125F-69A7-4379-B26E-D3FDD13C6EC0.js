const v0 = `
    for (let [i15, i16] = (() => {
            const o12 = {
                ["eC"](a4, a5) {
                    class C6 {
                    }
                    eval(C6 + URIError(C6));
                },
            };
            try { o12.eC(o12, o12, 0, "eC", o12); } catch (e) {}
            return [0, 10];
        })();
        i15 < i16;
        i16--) {
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
