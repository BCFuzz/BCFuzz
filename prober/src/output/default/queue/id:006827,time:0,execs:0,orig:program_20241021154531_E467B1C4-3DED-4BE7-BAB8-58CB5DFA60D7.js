for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v3 = 0; v3 < 5; v3++) {
            function f4() {
                return v3;
            }
            function f5(a6) {
                class C7 {
                    get c() {
                    }
                }
                const v9 = new C7();
                const v12 = new BigUint64Array(586);
                for (const v13 of v12) {
                    v9.c;
                }
                return BigUint64Array;
            }
            f4.valueOf = f5;
            f4++;
        }
    }
    new F1();
}
gc();
