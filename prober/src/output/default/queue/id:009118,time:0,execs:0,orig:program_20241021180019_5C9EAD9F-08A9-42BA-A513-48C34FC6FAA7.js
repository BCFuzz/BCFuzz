function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = [Reflect,Reflect,Reflect,Reflect,Reflect];
Reflect.apply(("string").charCodeAt, v2, v5);
gc();
