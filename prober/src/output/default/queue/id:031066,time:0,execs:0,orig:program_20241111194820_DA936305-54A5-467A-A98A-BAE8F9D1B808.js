const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        }
        for (let [i26, i27] = (() => {
                for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                }
                return [0, 10];
            })();
            i26 < i27;
            i27--) {
        }
        try { RegExp.apply(...9); } catch (e) {}
        return v0;
    }
    f1();
`;
eval(v0).next();
for (let i45 = 0, i46 = 10 + 10; i46--, i46;) {
}
for (let i53 = 0, i54 = 255; i54--;) {
}
gc();
