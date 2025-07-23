const v0 = `
    function f1() {
        return f1;
    }
    const v4 = new Uint32Array(4046);
    v4.reduce(f1);
`;
eval(v0);
gc();
