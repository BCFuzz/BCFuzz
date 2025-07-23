const v1 = new Set();
const v2 = `
    async function* f3(a4, a5) {
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        const v17 = new Uint8Array(v1, a4, a5);
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
            function f28(a29, a30, a31, a32) {
                a31.valueOf = f28;
                -a29;
                return i20;
            }
            try { f28(v17, v1, v17); } catch (e) {}
        }
        return v2;
    }
    f3();
`;
for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    for (let i48 = 0, i49 = 10; i48 < i49; i49--) {
    }
}
const v57 = eval(v2);
v57.next(v2, v57, v57, Set);
gc();
