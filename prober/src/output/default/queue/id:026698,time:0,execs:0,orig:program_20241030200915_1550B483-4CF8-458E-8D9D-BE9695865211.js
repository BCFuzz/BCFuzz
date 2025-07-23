const v1 = `
    async function* f2(a3, a4) {
        return typeof forceGCSlowPaths;
    }
    f2();
`;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
const v18 = eval(v1);
v18.next(v18, eval, eval);
gc();
