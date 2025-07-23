class C0 {
}
const v1 = new C0();
const v2 = [v1];
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v13 = `
    for (let i16 = 0, i17 = 10;
        i16 < i17;
        (() => {
            [i16] = v2;
        })()) {
        const v23 = delete v2.length;
        try { v1.flat(v23, C0); } catch (e) {}
    }
`;
eval(v13);
gc();
