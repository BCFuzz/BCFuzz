for (let [i18, i19] = (() => {
        function F0(a2, a3, a4) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v5 = new F0(F0, F0, F0);
        const v7 = v5.__defineSetter__;
        let v8;
        try { v8 = v7(); } catch (e) {}
        const v11 = [Reflect,Reflect,Reflect];
        const v12 = v11[2];
        v12.toString = Symbol;
        const v13 = v12.toLocaleString(v8);
        const v14 = Reflect.construct(Uint32Array, v11);
        try { v14.set(v8, v13); } catch (e) {}
        return [0, 10];
    })();
    i18 < i19;
    i19--) {
}
gc();
