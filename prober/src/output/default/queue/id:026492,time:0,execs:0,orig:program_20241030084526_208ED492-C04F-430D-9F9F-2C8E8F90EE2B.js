function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
        constructor(a6) {
            const v8 = `
                throw "e";
                /\u{12345}/myvis;
            `;
            const v10 = v8.split(a6);
            try { v10.flatMap(eval); } catch (e) {}
        }
    }
    new C4("e");
}
new F0(F0);
gc();
