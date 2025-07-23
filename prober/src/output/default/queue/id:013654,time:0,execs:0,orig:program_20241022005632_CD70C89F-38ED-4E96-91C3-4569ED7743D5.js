const v0 = `
    /\u{12345}/myvis;
    function f2(a3, a4, a5, a6) {
        for (let [v7,,,v8] of a3) {
        }
        return a4;
    }
`;
eval(v0);
gc();
