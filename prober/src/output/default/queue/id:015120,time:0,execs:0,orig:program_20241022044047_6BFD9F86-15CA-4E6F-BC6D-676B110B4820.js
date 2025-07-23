function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
JSON.toJSON = [v2,9007199254740990,v2];
JSON.stringify(JSON, JSON, 20704);
gc();
