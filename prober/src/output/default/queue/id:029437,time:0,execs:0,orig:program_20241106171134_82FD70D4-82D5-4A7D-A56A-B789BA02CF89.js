function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = /i(?<a>.)\k<a>[\c~]?/mygi;
Object.defineProperty(v5, "ignoreCase", { enumerable: true, get: makeMasquerader, set: F1 });
("1000").padStart(v5);
gc();
