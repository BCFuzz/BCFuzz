const v3 = 2147483648n + (65536n << 65536n);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    let v8 = 0;
    for (let i = 0; i < 5; i++) {
        try { v3.toString(v8); } catch (e) {}
        v8++;
    }
}
new F4();
gc();
