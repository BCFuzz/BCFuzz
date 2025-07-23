const v1 = `
    let v3;
    try { v3 = ("boolean").padEnd(); } catch (e) {}
    if ("P" > v3) {
    }
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
`;
eval(v1);
gc();
