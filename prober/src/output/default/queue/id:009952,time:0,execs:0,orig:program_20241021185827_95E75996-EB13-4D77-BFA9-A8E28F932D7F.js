for (let v1 = 0; v1 < 5; v1++) {
    function f2(a3, a4) {
        Object.defineProperty(arguments, 1, { writable: true, configurable: true, enumerable: true, value: undefined });
        const v6 = arguments[1];
        for (let [i16, i17] = (() => {
                const v10 = new SharedArrayBuffer(0, SharedArrayBuffer);
                const v12 = new DataView(v10);
                try { v12.getUint16(); } catch (e) {}
                eval(v6);
                return [0, 10];
            })();
            i16 < i17;
            i17--) {
        }
        return v6;
    }
    f2();
}
gc();
