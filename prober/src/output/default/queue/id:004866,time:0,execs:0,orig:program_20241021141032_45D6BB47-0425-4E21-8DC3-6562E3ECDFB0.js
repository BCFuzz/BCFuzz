function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
this.constructor.entries(this);
gc();
