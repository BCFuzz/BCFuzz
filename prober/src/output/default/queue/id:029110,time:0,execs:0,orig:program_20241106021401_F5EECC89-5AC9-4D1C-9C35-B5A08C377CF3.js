for (let [i12, i13] = (() => {
        for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
        }
        return [0, 10];
    })();
    (() => {
        const v16 = createGlobalObject().Float16Array;
        const o17 = {
        };
        function f18(a19, a20) {
            return o17;
        }
        o17.get = f18;
        const v22 = new Proxy(v16, o17);
        try { new v22(); } catch (e) {}
        return i12 != i13;
    })();
    i13--) {
}
gc();
