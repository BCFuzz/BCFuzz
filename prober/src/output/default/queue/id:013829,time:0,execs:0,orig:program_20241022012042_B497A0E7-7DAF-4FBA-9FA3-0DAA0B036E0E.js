for (let i3 = -3, i4 = 10;
    (() => {
        const v5 = i3 < i4;
        const v9 = createGlobalObject().Atomics;
        v9.isLockFree("16");
        try { v9.exchange(422721.21020334633, 422721.21020334633, 422721.21020334633); } catch (e) {}
        return v5;
    })();
    i3++, i4++, i4--) {
}
gc();
