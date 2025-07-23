function f0() {
    return f0;
}
class C1 {
}
new C1();
for (let v3 = 0; v3 < 25; v3++) {
    const v4 = [1000000000.0,-2.0];
    const o5 = {
    };
    for (let v6 = 0; v6 < 100; v6++) {
    }
    Uint16Array.e = Uint16Array;
    const v9 = new Proxy(v4, o5);
    v9.valueOf = f0;
}
gc();
