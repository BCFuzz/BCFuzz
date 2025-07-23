const v2 = `
    async function* f3(a4, a5) {
        typeof Uint16Array !== -16;
        return Uint16Array;
    }
    f3(-16, -16);
`;
eval(v2).next();
gc();
