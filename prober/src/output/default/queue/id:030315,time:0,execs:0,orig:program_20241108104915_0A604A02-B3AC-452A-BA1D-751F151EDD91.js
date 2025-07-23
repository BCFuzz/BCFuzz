for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const o18 = {
        "maxByteLength": 824,
    };
    const v20 = new ArrayBuffer(19, o18);
    const v21 = new Int16Array(v20, Int16Array, 3);
    for (let i25 = 0, i26 = 10; Reflect.deleteProperty(v21, i26), v20.resize(), Reflect.construct(Int32Array, [v20,v20,v20]) < i26;) {
        i26--;
    }
}
new F10();
gc();
