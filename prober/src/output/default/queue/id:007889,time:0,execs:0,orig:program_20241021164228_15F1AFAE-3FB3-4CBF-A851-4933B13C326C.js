const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
    }
    let v2 = 128;
    v2-- + v0;
`;
eval(v0);
gc();
