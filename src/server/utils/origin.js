function isOriginAllowed(origin, allowOrigin) {
  if (allowOrigin.indexOf(origin) >= 0) {
    return true
  } else {
    return false
  }
}

module.exports = isOriginAllowed
