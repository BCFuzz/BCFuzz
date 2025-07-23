function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        i4 < i5;
        (() => {
            class C11 extends Set {
            }
            const v14 = Reflect.construct(Date, [Reflect,Reflect], C11);
            try { v14.values(this, F0, Set, this); } catch (e) {}
            i5--;
        })()) {
    }
}
const v19 = new F0();
const t14 = v19.constructor;
new t14();
gc();
