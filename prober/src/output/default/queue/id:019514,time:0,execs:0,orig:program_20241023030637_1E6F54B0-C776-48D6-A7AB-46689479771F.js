const v1 = `
    const o2 = {
    };
    if (!(-4 >= o2)) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
    }
`;
eval(v1);
gc();
