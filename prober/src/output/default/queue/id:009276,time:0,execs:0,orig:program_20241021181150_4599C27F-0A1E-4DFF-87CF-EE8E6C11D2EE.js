const v0 = `
    /\u{12345}/myvis;
    async function* f2(a3, a4) {
        return a3;
    }
    f2.bind(f2, v0, v0);
`;
const t7 = eval(v0);
t7(v0, eval);
gc();
