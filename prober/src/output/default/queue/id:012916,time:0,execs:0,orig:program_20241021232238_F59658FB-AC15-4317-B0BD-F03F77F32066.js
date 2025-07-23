const v1 = `
    const v3 = ("-13").padEnd();
    4 <= v3;
    if (v3) {
    }
    function f5(a6, a7) {
        return a7;
    }
    f5.apply();
`;
eval(v1);
gc();
