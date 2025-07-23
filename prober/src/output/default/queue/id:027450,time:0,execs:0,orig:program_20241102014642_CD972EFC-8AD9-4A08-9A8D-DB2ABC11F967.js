const v0 = `
    async function* f1(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            (0 <= (v4 >>> 129)) || a2;
        }
        return a3;
    }
    f1.apply();
`;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v22 = eval(v0);
v22.next(v22, v22, v0, v22, v0);
gc();
