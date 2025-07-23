const v1 = new Int16Array();
function f2() {
    return Int16Array;
}
function f3(a4) {
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    return v1;
}
f2[Symbol.species] = f3;
const v17 = [Symbol,Symbol];
v17.constructor = f2;
for (let i = 0; i < 5; i++) {
    const v20 = new Uint8Array(1024);
    function F21(a23, a24, a25, a26) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v20;
    }
    const v27 = new F21();
    v17.filter(ensureArrayStorage);
    for (const v31 of v27.d) {
    }
}
gc();
