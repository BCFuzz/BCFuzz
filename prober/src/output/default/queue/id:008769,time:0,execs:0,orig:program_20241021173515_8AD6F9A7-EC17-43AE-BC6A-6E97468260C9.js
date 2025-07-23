function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 56116;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F0;
    this.e = a8;
    this.d = v5;
}
new F6(v3);
new F6(v5);
new F6(v5);
new BigInt64Array(6);
new Int32Array(3899);
new Int16Array(4);
const o21 = {
};
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
}
const v26 = new F22();
function f27(a28, a29) {
    new BigUint64Array(7);
    new Int32Array(6);
    new Uint8Array(3654);
    return 3899;
}
v26.valueOf = f27;
const v41 = new Uint32Array(1000);
for (const v42 in v41) {
    function f43(a44, a45, a46, a47) {
        function f49(a50, a51) {
            a47 >= o21;
            return arguments;
        }
        f49(arguments);
    }
    f43(f43, v26, 1000, v26);
}
gc();
