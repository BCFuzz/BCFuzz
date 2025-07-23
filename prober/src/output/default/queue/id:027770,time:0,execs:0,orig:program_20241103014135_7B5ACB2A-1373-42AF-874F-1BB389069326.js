for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    constructor(a12) {
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        const v24 = `
            /\u{12345}/myvis;
            \`match${C10}getUint32\`;
        `;
        v24.split().flatMap(eval);
    }
}
try { new C10(C10); } catch (e) {}
gc();
