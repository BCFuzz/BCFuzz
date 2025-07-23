const v0 = `
    /\u{12345}/myvis;
    try {
        Math.ceil();
    } finally {
    }
`;
eval(v0);
gc();
