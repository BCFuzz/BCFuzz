for (let i3 = 0, i4 = 10; i4; i4--) {
}
for (let i12 = 0, i13 = 10;
    (() => {
        const v15 = new Float64Array(i13);
        const v17 = new Uint16Array(v15.buffer);
        v17.set(v15);
        i13--;
        return i12 < i13;
    })();
    ) {
}
gc();
