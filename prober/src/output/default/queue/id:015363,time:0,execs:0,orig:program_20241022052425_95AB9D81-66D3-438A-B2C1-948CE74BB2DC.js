const v0 = `
    function f1(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            continue;
        }
        return f1;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
