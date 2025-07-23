const v0 = `
    const v2 = [730227070,620353721,-29970,-1646943713,9315,55787];
    const v3 = v2.reverse;
    const v4 = v3.apply(1000000000.0);
    try { v4.valueOf(v2, v3); } catch (e) {}
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
`;
eval(v0);
gc();
