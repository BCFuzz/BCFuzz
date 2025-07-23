let v1 = 536870912 >> 536870912;
function f2() {
    v1++;
    const v6 = new Uint8Array(3129);
    v6[1707] = v6;
    for (const v7 in v6) {
    }
    return Uint8Array;
}
function f9() {
    return f2;
}
Object.defineProperty(Date, "valueOf", { configurable: true, enumerable: true, get: f9 });
new Date(Date);
gc();
