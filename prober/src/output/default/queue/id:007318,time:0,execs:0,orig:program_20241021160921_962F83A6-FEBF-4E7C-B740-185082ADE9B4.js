function f0() {
    return f0;
}
for (let v1 = 0; v1 < 10; v1++) {
    class C2 {
    }
    const v3 = new C2();
    const o4 = {
    };
    const v6 = new Proxy(v3, o4);
    v6.constructor = f0;
}
for (let i8 = 0; i8 < 21768; i8++) {
}
gc();
