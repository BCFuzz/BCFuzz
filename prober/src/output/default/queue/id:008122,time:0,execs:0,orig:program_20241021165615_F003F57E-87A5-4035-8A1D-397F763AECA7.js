const v0 = [];
class C2 {
}
class C3 extends C2 {
}
Object.defineProperty(C2, 2, { value: NaN });
([v0]).copyWithin().pop();
gc();
