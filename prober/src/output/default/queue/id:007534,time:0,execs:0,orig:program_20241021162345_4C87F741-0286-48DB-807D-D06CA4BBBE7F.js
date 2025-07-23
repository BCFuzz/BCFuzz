for (let v0 = 0; v0 < 25; v0++) {
    class C1 {
    }
    const v2 = new C1();
    function f3(a4, a5, a6, a7) {
        function F8(a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            const o13 = {
            };
            Reflect.ownKeys(o13);
            const v16 = this.h;
            const v17 = v0 / f3;
            C1 <<= Reflect;
            try { a5.n(v17, v2, v0, v16, o13); } catch (e) {}
        }
        const v19 = new F8();
        return v19;
    }
    f3(v2, f3);
}
gc();
