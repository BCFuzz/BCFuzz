function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new Uint32Array();
new F0();
for (let v8 = 0; v8 < 5; v8++) {
    function f9(a10, a11) {
        Object.defineProperty(arguments, 1, { writable: true, configurable: true, enumerable: true, value: undefined });
        const v13 = arguments[1];
        for (let [i23, i24] = (() => {
                const v17 = new SharedArrayBuffer();
                const v19 = new DataView(v17);
                try { v19.getUint16(); } catch (e) {}
                eval();
                return [0, 10];
            })();
            i23 < i24;
            i24--) {
        }
        return v13;
    }
    f9();
}
gc();
