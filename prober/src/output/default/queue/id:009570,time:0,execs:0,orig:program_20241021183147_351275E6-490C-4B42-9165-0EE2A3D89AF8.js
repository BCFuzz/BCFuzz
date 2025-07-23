function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 10; v3++) {
        const v4 = /\P{Decimal_Number}/mvgi;
        class C6 {
            constructor(a8, a9, a10) {
                a8[Symbol.toPrimitive] = Symbol;
                try { a8.exec(a8); } catch (e) {}
            }
        }
        const v13 = new C6(v4);
        new C6(v13);
    }
}
new F0(F0);
gc();
