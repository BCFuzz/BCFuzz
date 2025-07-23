for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = `
    async function* f12(a13, a14) {
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
        false !== "129" ? false : "129";
        return false;
    }
    f12("129", f12);
`;
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
    }
}
const v50 = eval(v11);
v50.next(v50, v50, "129", v50);
gc();
