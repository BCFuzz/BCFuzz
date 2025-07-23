const v1 = [-2147483648,-7933,1386627879];
for (let v2 = 0; v2 < 25; v2++) {
    class C3 {
    }
    const v4 = new C3();
    function f5(a6, a7, a8, a9) {
        function F10(a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const o15 = {
            };
            Reflect.ownKeys(o15);
            this.h;
            const v19 = v2 / f5;
            try { a7.n(v19, v4, v2); } catch (e) {}
        }
        const v21 = new F10(v1, C3, a7);
        const v22 = v21.constructor;
        try { v22(); } catch (e) {}
        return v21;
    }
    f5.length = f5;
    const v25 = f5(v4, f5).constructor;
    try { new v25(v1, 127, v2); } catch (e) {}
}
gc();
