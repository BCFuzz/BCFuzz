function F0() {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    const o5 = {
    };
    class C7 extends o5.constructor {
    }
    C7.getOwnPropertyDescriptors(RegExp);
}
new F0();
new F0();
gc();
