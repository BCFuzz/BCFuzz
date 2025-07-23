function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = [v2,v2,v2];
Reflect.apply(("e").startsWith, v2, v5);
gc();
