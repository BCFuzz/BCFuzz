const v0 = `
    function f1(a2, a3) {
        return a2;
    }
    /\u{12345}/myvis;
`;
runString(v0);
gc();
