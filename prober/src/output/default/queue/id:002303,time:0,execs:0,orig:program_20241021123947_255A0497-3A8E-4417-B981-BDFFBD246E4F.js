const v0 = `
    const v2 = Symbol.iterator;
    const o8 = {
        [v2]() {
            let v4 = 10;
            const o7 = {
                next() {
                    return v4--;
                },
            };
        },
    };
`;
eval(v0);
gc();
