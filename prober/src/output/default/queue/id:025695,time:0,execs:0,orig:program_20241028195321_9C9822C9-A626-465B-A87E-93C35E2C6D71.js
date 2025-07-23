for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = -3, i13 = 10; i13--, i12 < i13;) {
}
const v20 = `
    async function* f21(a22, a23) {
        for (let i26 = 0, i27 = 10;
            i26 < i27;
            (() => {
                i27--;
                try { a23(i27, new.target); } catch (e) {}
            })()) {
            /\u{12345}/myvis;
        }
        return v20;
    }
    f21();
`;
for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
    for (let [i60, i61] = (() => {
            for (let i51 = 0, i52 = 10; i51 < i52; i52--) {
            }
            return [0, 10];
        })();
        i60 < i61;
        i61--) {
    }
}
const v69 = eval(v20);
v69.next(v69, eval, v69, v69);
gc();
