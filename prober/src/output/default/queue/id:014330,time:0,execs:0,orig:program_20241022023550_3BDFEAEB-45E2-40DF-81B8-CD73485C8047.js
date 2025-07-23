class C0 {
}
function f2(a3, a4, a5, a6) {
    const o11 = {
        "h": a3,
        [a6]: a5,
        "h": a5,
        o(a8, a9, a10) {
            return a3;
        },
    };
    o11.o(f2, 65537, o11, C0, a5);
    return a5;
}
const v13 = f2();
f2(C0, 65537, f2(v13, v13, f2, v13), 65537);
for (let v16 = 0; v16 < 10; v16++) {
    f2();
}
gc();
