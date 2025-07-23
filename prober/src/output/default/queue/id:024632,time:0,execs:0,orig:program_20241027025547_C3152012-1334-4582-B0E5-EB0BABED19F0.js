const v1 = new Uint32Array();
const v4 = new Int32Array(681);
function f5(a6, a7, a8, a9) {
    const v10 = /i/mis;
    const o11 = {
    };
    function f12(a13) {
        try { v1.reduce(a8); } catch (e) {}
        return v4;
    }
    o11.set = f12;
    const v16 = new Proxy(v10, o11);
    v16.lastIndex = v16;
    return 681;
}
v4.map(f5);
for (let i20 = 0, i21 = 10; i20 !== i21; i21--) {
}
gc();
