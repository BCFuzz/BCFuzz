function f0() {
    const v1 = [f0,f0,f0];
    const o2 = {
    };
    const v4 = new Proxy(v1, o2);
    const v5 = v4[2];
    try { v5(v5, v5); } catch (e) {}
    "undefined" in v4;
    return f0;
}
f0();
for (let i12 = -3, i13 = 10; i13--, i12 < i13;) {
}
gc();
