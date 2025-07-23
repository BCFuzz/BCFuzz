function f0(a1) {
    return f0;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Uint16Array();
    v7.buffer.transferToFixedLength();
    v7[1073741824] = f0;
}
new F3(f0, f0);
gc();
