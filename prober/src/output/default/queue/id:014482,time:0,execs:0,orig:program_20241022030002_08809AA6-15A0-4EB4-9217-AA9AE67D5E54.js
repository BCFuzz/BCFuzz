for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
        constructor(a3, a4, a5) {
            function F6(a8, a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this instanceof C1;
                Symbol.iterator;
            }
            new F6();
            new F6();
        }
    }
    new C1();
    new C1();
}
gc();
