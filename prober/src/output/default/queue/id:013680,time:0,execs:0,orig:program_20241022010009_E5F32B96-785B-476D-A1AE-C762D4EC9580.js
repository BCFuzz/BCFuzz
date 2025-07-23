class C0 {
}
const v2 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
function f3(a4, a5) {
    return 9007199254740991 ** -C0;
}
v2.toString = f3;
function f9(a10, a11) {
    const o17 = {
        [a11](a13, a14, a15, a16) {
        },
        __proto__: v2,
    };
    return o17;
}
const v18 = f9(f3, v2);
for (let i = 0; i < 100; i++) {
    f9("m", v18);
}
gc();
