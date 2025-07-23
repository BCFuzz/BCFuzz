for (let i2 = -3, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const v6 = createGlobalObject();
        const v7 = v6.Atomics;
        let v8;
        try { v8 = v7.exchange(v6, v7, v4, v7, i3); } catch (e) {}
        if (v8 != i2) {
        } else {
        }
        return v4;
    })();
    i2++, i3++, i3--) {
}
gc();
