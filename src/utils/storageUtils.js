const storage = sessionStorage;

module.exports = {
    set: (key, value) => storage.setItem(key, value),
    get: (key) => storage.getItem(key),
    del: (key) => storage.removeItem(key)
}