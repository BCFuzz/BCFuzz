function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a2;
}
const v6 = new F0();
for (const v7 in v6) {
    class C8 {
        constructor(a10) {
            const v12 = `
                function f13(a14, a15, a16, a17) {
                    try { this.all(); } catch (e) {}
                    return f13;
                }
                /\u{12345}/myvis;
            `;
            const v20 = v12.split(a10);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C8(v7);
}
gc();
