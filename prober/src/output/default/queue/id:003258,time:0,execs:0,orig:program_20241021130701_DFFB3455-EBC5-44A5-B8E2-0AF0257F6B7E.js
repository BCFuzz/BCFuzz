function F0() {
    if (!new.target) { throw 'must be called with new'; }
    gc();
}
new F0();
const v6 = new BigUint64Array();
function f7(a8, a9, a10) {
    for (let v11 = 0; v11 < 5; v11++) {
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.constructor(); } catch (e) {}
        }
        const v17 = new F12();
        v17.__lookupSetter__;
        v6.lastIndexOf();
    }
}
new f7();
f7();
gc();
