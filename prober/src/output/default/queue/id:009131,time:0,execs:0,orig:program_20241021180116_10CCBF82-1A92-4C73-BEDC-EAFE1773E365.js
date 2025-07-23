function f0(a1, a2, a3) {
    for (let i = 0; i < 5; i++) {
        this.length = 2;
    }
    return Proxy(f0());
}
Uint8ClampedArray.valueOf = f0;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
