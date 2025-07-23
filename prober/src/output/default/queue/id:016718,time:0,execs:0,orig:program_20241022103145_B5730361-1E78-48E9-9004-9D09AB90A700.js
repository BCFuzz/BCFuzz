const v0 = `
    /\u{12345}/myvis;
`;
const v3 = eval(v0);
for (let i6 = 0, i7 = 10;
    i7++, i6 < i7;
    (() => {
        const v12 = i7--;
        const t1 = ("isSealed").constructor;
        const v15 = new t1(v12);
        v15.replace(v3, v3);
    })()) {
    i7--;
}
gc();
