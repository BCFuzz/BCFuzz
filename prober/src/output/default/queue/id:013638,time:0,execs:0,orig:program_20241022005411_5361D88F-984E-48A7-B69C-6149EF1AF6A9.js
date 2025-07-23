function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5, a6, a7) {
    for (let v8 = 0; v8 < 10; v8++) {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
            for (const v21 of [[i12,i12,i12,i12,i12],i11]) {
                v21[1] = v21;
            }
            const v23 = new SharedArrayBuffer();
            let v24 = Math;
            v24 = !v2;
            const v27 = new DataView(v23);
            try { v27.getUint16(); } catch (e) {}
            for (let v29 = 0; v29 < 25; v29++) {
            }
        }
    }
}
f3(F0, v2, f3, v2);
gc();
