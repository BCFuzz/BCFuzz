function f1(a2) {
    const v4 = new BigInt64Array();
    v4.sort(a2);
    return f1;
}
Int8Array.get = f1;
const v8 = Proxy.revocable(Int8Array, Int8Array).proxy;
v8.bind(v8);
gc();
