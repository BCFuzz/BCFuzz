for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v3 = 0; v3 < 5; v3++) {
            function f4() {
            }
            function f5(a6) {
                class C7 {
                    get c() {
                    }
                }
                try { new C7(); } catch (e) {}
                const v10 = new C7();
                586 >> 586;
                const v14 = new BigUint64Array(586);
                for (const v15 of v14) {
                    v10.c;
                }
                return BigUint64Array;
            }
            f4.valueOf = f5;
            f4++;
        }
    }
    const v18 = new F1();
    const t25 = v18.constructor;
    new t25();
}
gc();
