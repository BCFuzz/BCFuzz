function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
class C3 extends C2 {
}
const o11 = {
    toString(a5) {
        function f6(a7) {
            new C3();
            return arguments;
        }
        f6();
    },
};
const v14 = new Int8Array(681);
function f15(a16, a17, a18, a19) {
    return o11;
}
v14.map(f15);
gc();
