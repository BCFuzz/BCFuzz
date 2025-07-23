const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        class C14 {
            constructor(a16) {
                function f17(a18) {
                    return Array();
                }
                this.then = f17;
            }
        }
        const v21 = new C14(v0);
        return v21;
    }
    f1.apply();
`;
for (let i25 = 0, i26 = 10;
    (() => {
        const v27 = i25 < i26;
        for (let i30 = 0, i31 = 10; i30 !== i31; i31--) {
        }
        return v27;
    })();
    i26--) {
}
const v44 = eval(v0);
v44.next(v0, v44, eval);
gc();
