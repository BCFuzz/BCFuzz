for (let [i12, i13] = (() => {
        for (let i4 = 0, i5 = 10; i4 !== i5; i5--) {
        }
        return [0, 10];
    })();
    (() => {
        const v16 = createGlobalObject().Float16Array;
        const o18 = {
        };
        function f19(a20, a21) {
            return a20;
        }
        o18.get = f19;
        const v23 = new Proxy(v16, o18);
        try { new v23(-1); } catch (e) {}
        return i12 != i13;
    })();
    i13--) {
}
gc();
