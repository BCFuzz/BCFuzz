for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a5(a4, v0, v0, F1); } catch (e) {}
        const v8 = new Uint8Array(a4, a5, v0);
        v8[a3] *= v0;
    }
    new F1(v0, F1, F1);
}
gc();
