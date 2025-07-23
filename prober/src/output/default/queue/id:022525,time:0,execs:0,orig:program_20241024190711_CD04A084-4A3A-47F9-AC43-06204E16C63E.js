const v0 = `
    async function* f1(a2, a3) {
        const v4 = [-0.4398870551325462];
        const v6 = new Map(a3);
        [,v6.has.name,...v4];
    }
    f1();
`;
const v13 = eval(v0);
v13.next(v0, eval, v13, v13, v0);
gc();
