const v2 = Math.acos();
for (let v4 = 0; v4 < 25; v4++) {
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        let v10;
        try { v10 = a7(); } catch (e) {}
        const o11 = {
        };
        let v13;
        try { v13 = Reflect.construct(v10, a7, Reflect); } catch (e) {}
        const t10 = Reflect.ownKeys(o11);
        t10[138] = v10;
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a8;
        }
        new F15(-5.0, 14, v2, v13);
        if (a8) {
        }
    }
    new F5();
}
gc();
