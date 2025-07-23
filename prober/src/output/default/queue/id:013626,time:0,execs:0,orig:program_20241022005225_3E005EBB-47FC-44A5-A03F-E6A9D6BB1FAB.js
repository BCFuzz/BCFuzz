for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        this[Symbol.toStringTag] = this;
        this.c = a3;
    }
    class C7 extends F1 {
        set c(a9) {
            const v13 = this[Symbol.toStringTag].constructor;
            try { new v13(); } catch (e) {}
        }
    }
    new C7();
}
gc();
