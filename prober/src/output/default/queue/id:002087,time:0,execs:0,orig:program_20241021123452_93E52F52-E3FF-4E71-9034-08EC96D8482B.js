const v0 = `
    function f1(a2, a3) {
        return f1;
    }
    f1();
`;
eval(v0);
gc();
