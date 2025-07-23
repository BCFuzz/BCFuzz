const v3 = new Uint8Array(1000);
for (let v4 = 0; v4 < 5; v4++) {
    Object.defineProperty(v3, v4, { writable: true, configurable: true, value: Uint16Array });
}
gc();
