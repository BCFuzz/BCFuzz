for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    for (let v11 = 0; v11 < 5; v11++) {
        async function f12(a13, a14, a15, a16) {
            return f12;
        }
    }
    for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
    }
`;
eval(v10);
gc();
