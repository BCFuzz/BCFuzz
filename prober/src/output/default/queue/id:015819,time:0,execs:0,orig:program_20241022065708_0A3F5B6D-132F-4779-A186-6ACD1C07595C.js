const v0 = `
    function* f1(a2, a3) {
        yield a2;
        return f1;
    }
    const v5 = f1(f1, v0);
    v5.next(v5);
    /\u{12345}/myvis;
`;
eval(v0);
gc();
