const v0 = [];
for (let i4 = 0, i5 = 10;
    (() => {
        const v6 = i4 !== i5;
        const o7 = {
        };
        const v9 = new Proxy(v0, o7);
        const v12 = Reflect.construct(Int8Array, [o7,o7,o7,o7,o7]);
        try { v12.toSorted(v9); } catch (e) {}
        return v6;
    })();
    i5--) {
}
gc();
