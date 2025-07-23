function f1(a2) {
    for (let i5 = 0, i6 = 10;
        i5 < i6;
        (() => {
            const v12 = new SharedArrayBuffer();
            const v14 = new DataView(v12);
            try { v14.getInt32(v14, Map); } catch (e) {}
            i6--;
        })()) {
    }
    return a2;
}
Uint8ClampedArray.toString = f1;
const t13 = Date.constructor;
t13(Uint8ClampedArray);
function f22(a23) {
    return Uint8ClampedArray;
}
f22.apply().toString(f1, Date);
gc();
