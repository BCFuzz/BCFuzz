const v6 = `
    async function* f7(a8, a9) {
        const v12 = new Uint16Array();
        if (!(null > v12)) {
            const v14 = a9?.[257];
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F15(v14, 256n, -3.0);
            new F15(1024, a8, -1.392721312038417e+308);
            new F15(f7, -1024n, 4.0);
        }
        return f7;
    }
    f7(4.0, f7);
`;
for (let i26 = 0, i27 = 10; i26 != i27; i27--) {
    for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
    }
}
eval(v6).next();
gc();
