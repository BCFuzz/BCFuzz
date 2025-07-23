function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [this,this];
    const v3 = v2.__proto__;
    v3.concat(v2, v3);
}
new F0();
new F0();
new F0();
gc();
