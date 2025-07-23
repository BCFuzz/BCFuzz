const v0 = `
    async function* f1(a2, a3) {
        yield;
        /\u{12345}/myvis;
        return f1;
    }
    f1();
`;
const v8 = eval(v0);
v8.next(v8, eval, v8);
gc();
