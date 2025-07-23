class C0 {
}
const v1 = new C0();
const v2 = [v1,v1,v1];
for (let v3 = 0; v3 < 25; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        let v6 = 0.5534344452193884;
        function f7(a8, a9) {
            [v2];
            Array.apply(v2.flat, v1);
            ({"length":v6,} = arguments);
        }
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
        }
        f7();
    }
    new F4();
}
gc();
