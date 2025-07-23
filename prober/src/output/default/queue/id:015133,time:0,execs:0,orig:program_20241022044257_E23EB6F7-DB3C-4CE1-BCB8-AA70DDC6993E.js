const v0 = `
    const v2 = new WeakMap();
    const v5 = v2 >= ~16;
    if (v5) {
    } else {
        const v6 = [16,16,16,16];
        v6.slice(v6, v0, v6, v5);
    }
    1109 + 1109;
`;
eval(v0);
gc();
