function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4) {
        const v8 = new Float64Array(1024);
        const v10 = new Uint16Array(v8.buffer);
        v10.set(v8);
    }
    this[Symbol.toPrimitive] = f2;
    const v15 = new Float32Array(Symbol, f2, Symbol);
    new Uint8ClampedArray(v15.buffer.transfer(), this);
}
new F0();
gc();
