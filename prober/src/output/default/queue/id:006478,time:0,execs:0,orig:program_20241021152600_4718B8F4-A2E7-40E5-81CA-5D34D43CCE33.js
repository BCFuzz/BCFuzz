let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v2 = --v0;
    const v3 = v2 ^ v2;
    const v4 = v3 << v3;
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F6(10, v4);
    return f1;
}
const v13 = new Uint32Array(4046);
v13.reduce(f1);
gc();
