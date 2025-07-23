for (let i2 = -256;
    (() => {
        const v4 = SharedArrayBuffer.constructor();
        const v5 = v4(5.998768508446499, i2);
        delete SharedArrayBuffer.prototype;
        const v8 = -699.572468142773 || -699.572468142773;
        const o9 = {
        };
        const v10 = o9.__defineGetter__;
        let v11;
        try { v11 = v10(v10, v10, 5.998768508446499, v8); } catch (e) {}
        try { v4(v11, v11, v5, 5.998768508446499, ...v8); } catch (e) {}
        Object.defineProperty(SharedArrayBuffer, i2, { configurable: true, enumerable: true, value: v4 });
        return i2 < 8;
    })();
    i2++) {
}
gc();
