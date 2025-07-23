function f2(a3, a4, a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        switch (a4) {
            case 4:
                const v7 = [256,4096,-536870912,-10,-1902932284,4294967295,-1311764233,40225,256];
                function f8(a9, a10) {
                }
                Object.defineProperty(v7, 8, { configurable: true, enumerable: true, set: f8 });
                break;
        }
        f2(v6, f2);
    }
    return f2;
}
Uint8ClampedArray.toString = f2;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
