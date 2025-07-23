function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
for (let v4 = 0; v4 < 25; v4++) {
    const o5 = {
    };
    function f6(a7) {
        a7.toString(v3, f6);
        const v10 = new Uint32Array();
        return v10;
    }
    o5.set = f6;
    const v12 = new Proxy(o5, o5);
    v12.set(v3);
    v12.b = v12;
}
gc();
