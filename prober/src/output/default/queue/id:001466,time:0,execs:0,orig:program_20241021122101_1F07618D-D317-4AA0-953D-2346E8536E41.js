function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function f3(a4) {
    let v5 = Int8Array;
    let v6 = 9;
    const v8 = new Uint8ClampedArray();
    let v9 = 3;
    ({"b":v9,"buffer":v9,"byteLength":v6,...v5} = v8);
}
f3();
f3();
gc();
