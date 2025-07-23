const v0 = /a\bc/myvgis;
for (let v1 = 0; v1 < 25; v1++) {
    class C2 {
    }
    const v3 = new C2();
    function f4(a5, a6, a7, a8) {
        function F9(a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const o14 = {
            };
            Reflect.ownKeys(v0);
            const v17 = this.h;
            const v18 = v1 / f4;
            try { a6.n(v18, v3, v1, v17, o14); } catch (e) {}
        }
        new F9(a8, v0, a5);
        return a5;
    }
    f4(v3, f4);
}
gc();
