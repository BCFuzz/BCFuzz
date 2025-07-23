class C0 {
}
for (let i = 0; i < 100; i++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C3 extends F1 {
        static {
            C0 <= this;
        }
    }
}
gc();
