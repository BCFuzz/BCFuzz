const v2 = "p" + [];
for (let v3 = 0; v3 < 5; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        const v8 = new C7();
        v8.e = Int8Array;
        for (const v10 of v2.link()) {
            v10 in v8;
        }
    }
    new F4();
}
gc();
