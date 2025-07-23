class C0 {
}
class C1 extends C0 {
    static {
        for (let v3 = 0; v3 < 10; v3++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                const t7 = this.__proto__.toLocaleString().constructor;
                t7();
            }
            new F4(this, F4);
        }
    }
}
gc();
