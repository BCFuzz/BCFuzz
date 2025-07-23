const v1 = `
`;
for (let i = 0; i < 10; i++) {
    const o5 = {
        set b(a3) {
            v1 + a3;
        },
    };
    o5.b = 7.737568273264832e+306;
}
gc();
