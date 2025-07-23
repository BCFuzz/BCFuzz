for (let v0 = 0; v0 < 10; v0++) {
    for (let v2 = 0; v2 < 5; v2++) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = a7.toString;
            try { v9(v9); } catch (e) {}
        }
        const v11 = new F4(196.25100004624983, F4);
        const t8 = v11.constructor;
        new t8(6, 6);
    }
}
gc();
