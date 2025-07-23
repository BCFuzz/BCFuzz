[10,8,379751046,268435440,168779295,1532318562,10000,-2147483647,-35454,-9007199254740992];
function f1(a2, a3, a4) {
    for (let i = 0; i < 5; i++) {
    }
    Proxy(f1());
}
Uint8ClampedArray.valueOf = f1;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
