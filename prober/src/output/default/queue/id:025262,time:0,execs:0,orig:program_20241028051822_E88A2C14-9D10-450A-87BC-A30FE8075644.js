const v1 = `
    async function* f2(a3, a4) {
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
        }
        return true !== "129" ? true : "129";
    }
    f2(f2, f2);
`;
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    }
}
const v40 = eval(v1);
v40.next(eval, v1, "129", v40);
gc();
