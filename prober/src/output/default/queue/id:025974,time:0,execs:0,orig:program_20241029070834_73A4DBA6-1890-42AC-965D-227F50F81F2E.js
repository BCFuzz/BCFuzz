function f0(a1) {
    return a1;
}
const v2 = f0(f0);
function f3() {
    const v4 = `
        /\u{12345}/myvis;
    `;
    return v4;
}
v2.toString = f3;
const v6 = f0(v2);
/^xxx$(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10/isu.test(v6);
gc();
