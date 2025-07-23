function f2() {
    const v3 = new Uint32Array();
    v3.slice(-9007199254740990, -9007199254740990);
}
const v5 = [0.3791757979158641,5.0,0.6074445362731085,3.0];
v5[Symbol.toPrimitive] = f2;
v5.toSpliced(v5);
gc();
