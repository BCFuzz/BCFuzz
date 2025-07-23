function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
let v10 = new F4();
let v12 = --v10;
v12++;
gc();
