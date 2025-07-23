class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5) {
    const o12 = {
        toString(a7, a8, a9, a10) {
            a7.toLowerCase(v1, a7, a4, a8, a3);
            return a8;
        },
    };
    return a5;
}
for (let v13 = 0; v13 < 100; v13++) {
    f2(v1, v1, v13);
}
gc();
