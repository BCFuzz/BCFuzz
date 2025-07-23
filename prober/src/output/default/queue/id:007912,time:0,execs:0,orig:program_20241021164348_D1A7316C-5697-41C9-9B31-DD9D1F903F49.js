let v0 = 10;
for (;
    (() => {
        const v1 = v0--;
        v1 & v1;
        return v1;
    })();
    ) {
    edenGC.call();
}
const v7 = new Uint8Array(3129);
for (const v8 in v7) {
}
gc();
