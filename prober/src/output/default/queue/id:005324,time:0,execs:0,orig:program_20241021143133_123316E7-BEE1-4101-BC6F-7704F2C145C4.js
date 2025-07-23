const v4 = [Uint32Array,Uint32Array,Uint32Array,Uint32Array];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = [this,this,this,this];
    function f17() {
        return a13;
    }
    v16.toString = f17;
    const v18 = ["-4294967297",v16];
    for (let v19 = 0; v19 < 50; v19++) {
        class C20 {
            [v18] = v19;
        }
        new C20();
        new C20();
    }
}
new F9(16, BigInt64Array, 16, "__proto__");
new F9(v4, -1024, 18996);
gc();
