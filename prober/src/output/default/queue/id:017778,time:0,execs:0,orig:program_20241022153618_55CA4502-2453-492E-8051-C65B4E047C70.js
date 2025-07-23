for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function f11(a12, a13, a14, a15) {
        await arguments;
        return f11;
    }
    f11(f11, v10, v10, v10);
    /\u{12345}/myvis;
`;
eval(v10);
gc();
