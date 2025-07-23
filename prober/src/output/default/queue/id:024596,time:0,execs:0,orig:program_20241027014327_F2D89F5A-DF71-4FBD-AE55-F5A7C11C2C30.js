const v2 = "p" + [];
for (let v3 = 0; v3 < 5; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        class C6 {
        }
        const v7 = new C6();
        v7.toLocaleString();
        for (const v10 of v2.link()) {
            v10 in v7;
        }
    }
    new F4();
}
gc();
