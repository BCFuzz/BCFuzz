for (let v0 = 0; v0 < 10; v0++) {
    for (let v2 = 0; v2 < 5; v2++) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = a7.toString;
            try { v9(); } catch (e) {}
            try { v9(); } catch (e) {}
        }
        const v12 = new F4(196.25100004624983, F4);
        const t9 = v12.constructor;
        new t9(6, 6);
    }
}
gc();
