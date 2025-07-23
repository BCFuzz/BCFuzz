const v0 = `
    for (let i2 = 1; i2 < 21768; i2++) {
    }
    const v8 = /\u{12345}/dyvgi;
    for (let v9 = 0; v9 < 5; v9++) {
        const v10 = v9 - v8;
        const v12 = (v10 + v10) & v9;
        v12 >>> v12;
    }
`;
eval(v0);
gc();
