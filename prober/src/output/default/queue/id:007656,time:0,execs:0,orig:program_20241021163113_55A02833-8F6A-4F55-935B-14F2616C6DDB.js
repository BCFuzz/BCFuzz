class C0 {
}
new C0();
for (let v2 = 0; v2 < 50; v2++) {
    const v5 = new Int8Array(42, 42, 42);
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    for (let i = 0; i < 5; i++) {
        42 in v8;
    }
    v2++;
    v2--;
}
gc();
