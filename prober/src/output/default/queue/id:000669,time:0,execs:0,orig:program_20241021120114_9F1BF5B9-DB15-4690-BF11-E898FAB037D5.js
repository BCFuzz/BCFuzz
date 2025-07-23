const v2 = new Int16Array(23);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F3 % v2;
Reflect.construct(F3, [Reflect,Reflect,Reflect,Reflect], Int16Array);
gc();
