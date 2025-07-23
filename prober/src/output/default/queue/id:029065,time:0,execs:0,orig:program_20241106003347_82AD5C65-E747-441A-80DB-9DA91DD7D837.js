function f1() {
    return 4294967295;
}
Proxy.toString = f1;
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
const v15 = new BigUint64Array(586);
for (const v16 of v15) {
    const o17 = {
    };
    function f18() {
        o17[Proxy] /= arguments;
        return v16;
    }
    f18();
}
gc();
