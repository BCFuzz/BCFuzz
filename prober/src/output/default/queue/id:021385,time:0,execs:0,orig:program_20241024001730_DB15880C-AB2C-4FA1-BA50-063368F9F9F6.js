for (let i2 = 0, i3 = 10;
    i2 <= i3;
    (() => {
        function f8(a9) {
            const v10 = new Int8Array(i2, a9, a9);
            v10.toSorted(a9);
            return f8;
        }
        Int8Array.get = f8;
        const v14 = Proxy.revocable(Int8Array, Int8Array).proxy;
        v14.bind(v14);
        i3--;
    })()) {
}
gc();
