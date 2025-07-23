const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            i6 < i7;
            (() => {
                i7--;
                try { a3(i7, new.target); } catch (e) {}
            })()) {
        }
        return a3;
    }
    f1();
`;
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
}
eval(v0).next();
gc();
