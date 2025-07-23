function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
        constructor(a6) {
            const v8 = `
                throw "asyncIterator";
            `;
            const v9 = v8.split(a6);
            try { v9.flatMap(eval); } catch (e) {}
        }
    }
    new C4("asyncIterator");
}
new F0(F0);
gc();
