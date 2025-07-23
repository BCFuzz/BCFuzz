for (let i2 = 0, i3 = 10;
    !(i2 == i3);
    (() => {
        i3--;
        for (let i11 = 0, i12 = 10; i11 !== i12; i12--) {
        }
    })()) {
}
const v23 = ("-789426228").constructor.fromCharCode();
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
try {
    class C34 extends v23 {
    }
} catch(e35) {
    class C36 {
    }
    function F37(a39, a40, a41, a42) {
        if (!new.target) { throw 'must be called with new'; }
        try { C36.constructor(e35); } catch (e) {}
    }
    new F37();
}
gc();
