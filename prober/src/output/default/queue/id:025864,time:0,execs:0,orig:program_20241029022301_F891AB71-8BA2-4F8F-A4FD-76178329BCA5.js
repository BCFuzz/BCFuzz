function f0() {
    return f0;
}
for (let i4 = 0, i5 = 10;
    (() => {
        const v6 = i4 < i5;
        for (const v7 in this) {
            Object.defineProperty(this, v7, { writable: true, value: i5 });
        }
        --i5;
        return v6;
    })();
    ) {
}
gc();
