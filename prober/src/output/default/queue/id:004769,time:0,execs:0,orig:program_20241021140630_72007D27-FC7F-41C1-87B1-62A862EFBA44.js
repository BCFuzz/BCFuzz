function f3(a4, a5, a6, a7) {
    const o11 = {
        toString(a9, a10) {
            return -57820n;
        },
    };
    o11.f = o11;
    return o11;
}
const v13 = f3().f;
const v15 = Uint8Array.from(1024n);
try { v15.subarray(Infinity, v13); } catch (e) {}
gc();
