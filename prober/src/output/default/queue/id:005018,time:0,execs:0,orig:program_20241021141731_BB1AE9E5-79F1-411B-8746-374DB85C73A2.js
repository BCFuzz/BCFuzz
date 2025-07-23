const v2 = new BigInt64Array(3912);
v2.every(Date);
function f7(a8, a9, a10) {
    for (let v11 = 0; v11 < 5; v11++) {
        switch (a9) {
            case 4:
                const v12 = [256,4096,-536870912,-10,-1902932284,4294967295,-1311764233,40225,256];
                function f13(a14, a15) {
                    return a15;
                }
                Object.defineProperty(v12, 8, { configurable: true, enumerable: true, set: f13 });
                break;
        }
        f7(v11, f7);
    }
    return BigInt64Array;
}
Uint8ClampedArray.toString = f7;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
