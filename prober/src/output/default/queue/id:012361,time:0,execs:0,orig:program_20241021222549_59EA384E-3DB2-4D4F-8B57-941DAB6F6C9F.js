for (let v0 = 0; v0 < 10; v0++) {
    class C1 {
    }
    const v2 = new C1();
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8) {
            function f9(a10, a11, a12) {
                const o13 = {
                };
                return o13;
            }
            const v14 = f9();
            f9().constructor.getOwnPropertySymbols(v14);
            return v14;
        }
        Object.defineProperty(this, "f", { enumerable: true, set: f7 });
        this.f = v2;
    }
    new F3(F3, v2);
}
gc();
