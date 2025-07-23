function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10;
        (() => {
            const v12 = new Int32Array(i9);
            const v14 = new Int16Array(v12.buffer);
            v14.set(v12);
            i10--;
            return i9 < i10;
        })();
        ) {
    }
}
new F1();
gc();
