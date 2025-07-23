class C0 {
}
for (let v3 = 0; v3 < 5; v3++) {
    function f4(a5, a6) {
        a6();
        Object.defineProperty(arguments, 1, { writable: true, configurable: true, enumerable: true, value: undefined });
        arguments[1];
        for (let [i17, i18] = (() => {
                const v12 = new SharedArrayBuffer();
                const v14 = new DataView(v12);
                try { v14.getUint16(); } catch (e) {}
                return [0, 10];
            })();
            i17 < i18;
            (() => {
                const v22 = i18--;
                v22 ^ v22;
                TypeError(a6);
            })()) {
        }
    }
    f4(Date, Date);
}
class C29 extends C0 {
}
for (let v30 = 0; v30 < 250; v30++) {
}
gc();
