function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o8 = {
        "maxByteLength": 3071283242,
    };
    new SharedArrayBuffer(1024, o8);
}
for (let i = 0; i < 5; i++) {
    for (let v11 = 0; v11 < 250; v11++) {
        const o14 = {
            "maxByteLength": 5,
        };
        new SharedArrayBuffer(3, o14);
    }
    new F0();
}
gc();
