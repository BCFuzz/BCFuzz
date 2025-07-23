const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = `
        const t4 = "toString";
        t4[8] = v1;
        /\u{12345}/myvis;
    `;
    const v11 = v8.split(8).reverse();
    try { ("toString").matchAll(v11); } catch (e) {}
}
new F2();
for (let i17 = -9223372036854775807, i18 = 10; -13369 < i18; i18--) {
}
gc();
