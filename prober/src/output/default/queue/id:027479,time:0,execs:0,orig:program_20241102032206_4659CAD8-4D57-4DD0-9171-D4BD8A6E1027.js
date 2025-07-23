for (let i2 = 0, i3 = 10; i3; i3--) {
}
for (let i11 = 0, i12 = 10; i11 !== i12; i12--) {
}
const v21 = createGlobalObject().Float16Array;
for (let i24 = 0, i25 = 10;
    (() => {
        const v27 = new v21();
        const v29 = new Uint16Array(v27.buffer);
        v29.set(v27);
        i25--;
        return i24 < i25;
    })();
    ) {
}
gc();
