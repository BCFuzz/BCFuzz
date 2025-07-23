class C2 extends WeakSet {
}
const v5 = new BigUint64Array(4092);
for (const v6 of v5) {
    const o11 = {
        "apply": Date,
        "construct": Date,
        "maxByteLength": 4092,
        n(a8, a9, a10) {
            return v6;
        },
        "defineProperty": Date,
        "deleteProperty": Date,
        "get": Date,
        "getOwnPropertyDescriptor": Date,
        "has": Date,
    };
    new Proxy(C2, o11);
}
gc();
