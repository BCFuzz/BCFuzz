for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v3 = this.propertyIsEnumerable;
        let v4;
        try { v4 = v3(); } catch (e) {}
        class C5 {
        }
        const v6 = new C5();
        function f7() {
            (v4 ** 1685339525) * 5.372064524015583;
            return F1;
        }
        v6.constructor = f7;
        v6.constructor(v4);
    }
    new F1();
    new F1();
}
gc();
