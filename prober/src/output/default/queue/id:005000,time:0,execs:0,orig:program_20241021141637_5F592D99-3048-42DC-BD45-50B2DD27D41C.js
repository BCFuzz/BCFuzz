class C3 {
}
class C4 extends C3 {
}
Object.defineProperty(C3, 2, { value: NaN });
const o5 = {
    8: "string",
    1073741825: "function",
};
o5[1073741825] = o5;
4096 in [-4096,2147483648,3,536870887,-336478761,6,-1338899330,536870887,3];
Math.tan([-4294967296,-256,536870888,1024,9]);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
new F12();
class C19 {
}
class C20 extends C19 {
}
new C20();
for (let v22 = 0; v22 < 250; v22++) {
    v22++;
    v22--;
}
gc();
