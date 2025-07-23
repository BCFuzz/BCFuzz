const v0 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
function f1(a2, a3) {
    const o4 = {
        __proto__: v0,
    };
    const v5 = o4.slice(a2, v0, o4, o4, a3);
    v5[0] = f1;
    try { v5.push(); } catch (e) {}
    return a2;
}
for (let i = 0; i < 250; i++) {
    f1(v0, f1);
}
gc();
