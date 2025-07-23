function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new SyntaxError(Uint8ClampedArray, SyntaxError);
    delete v4[Uint8ClampedArray];
}
new F0();
gc();
