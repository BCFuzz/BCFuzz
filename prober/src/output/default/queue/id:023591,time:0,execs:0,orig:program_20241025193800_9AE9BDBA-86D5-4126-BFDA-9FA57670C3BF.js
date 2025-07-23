for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        const v25 = JSON.stringify(v10);
        for (let [i30, i31] = (() => {
                eval(v25);
                return [0, 10];
            })();
            i31--, i30 < i31;
            ) {
        }
        return v10;
    }
    f11(f11, v10);
`;
for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
    for (let i51 = 0, i52 = 10; i51 < i52; i52--) {
    }
}
const v60 = eval(v10);
v60.next(v10, v60, eval);
gc();
