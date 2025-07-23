const v0 = `
    /\u{12345}/myvis;
    function f3(a4, a5) {
        return a5;
    }
    f3(false);
`;
eval(v0);
gc();
