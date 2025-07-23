const v0 = `
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    }
`;
const v15 = SyntaxError(v0).toString();
for (let i18 = 10, i19 = 10; -13369 < i19; i19--) {
}
eval(v15);
for (let i30 = 0, i31 = 10;
    (() => {
        const v32 = i30 < i31;
        for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
        }
        return v32;
    })();
    i31--) {
}
gc();
