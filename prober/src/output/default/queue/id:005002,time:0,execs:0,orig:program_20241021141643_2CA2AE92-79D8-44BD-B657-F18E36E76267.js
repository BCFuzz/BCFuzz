function f0(a1, a2) {
    const v4 = new Int8Array();
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    v7[2] = Int8Array;
}
for (let v8 = 0; v8 < 10; v8++) {
    f0();
}
gc();
