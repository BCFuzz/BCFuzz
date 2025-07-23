function f1() {
    return -976.9311780444849;
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const o8 = {
        "defineProperty": f1,
    };
    const v10 = new Proxy(this, o8);
    v10.f = v10;
}
new F2(-976.9311780444849, -976.9311780444849, -976.9311780444849, f1);
gc();
