for (let i3 = 0, i4 = 10;
    (() => {
        const v5 = i3 < i4;
        const v6 = new Uint8Array(i4, i4, i4);
        const v9 = createGlobalObject().Atomics;
        try { v9.sub(v6); } catch (e) {}
        return v5;
    })();
    i4--) {
}
gc();
