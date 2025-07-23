const v0 = [-2147483648,1073741825,4294967295,-1810460340];
let v1 = 12;
const v2 = v1++;
const v4 = ("-789426228").constructor;
const v5 = v4.fromCharCode(v1, v4, v0, "-789426228");
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
try {
    new v5(v0, v2, v5, v0, v5);
} catch(e17) {
    class C18 {
    }
    function F19(a21, a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        try { C18.constructor(e17); } catch (e) {}
    }
    new F19(C18, v2, C18, e17);
}
gc();
