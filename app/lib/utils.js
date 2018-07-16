function set(sessionStorageKey, cartInfo) {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(cartInfo));
}

function get(sessionStorageKey) {
  if (!sessionStorage.getItem(sessionStorageKey)) {
    set(sessionStorageKey, {});
  }
  return JSON.parse(sessionStorage.getItem(sessionStorageKey));
}

module.exports = {
  db: {
    set,
    get,
  },
};
