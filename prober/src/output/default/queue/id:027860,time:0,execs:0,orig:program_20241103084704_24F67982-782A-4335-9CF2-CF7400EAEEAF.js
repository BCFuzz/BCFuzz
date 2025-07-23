const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
                (null >>> 1.2578684999252103e+307) / -16189;
                for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
                }
            }
        }
        return v0;
    }
    f1();
`;
for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
}
for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
    for (let i62 = 0, i63 = 10; i62 < i63; i63--) {
    }
}
const v71 = eval(v0);
v71.next(v71, v71);
gc();
