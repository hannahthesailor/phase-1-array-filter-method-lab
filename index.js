function findMatching(driverNamesArray, stringToMatch) {
  return driverNamesArray.filter((driverName) => {
    return driverName.toUpperCase() === stringToMatch.toUpperCase()
  })
}

function fuzzyMatch(driverNamesArray, stringToMatch) {
    return driverNamesArray.filter((driverName) => {
        return driverName.toLowerCase().slice(0,2) === stringToMatch.toLowerCase()
    })
}

function matchName(driverObjectsArray, passName) {
    return driverObjectsArray.filter((driverObject) => {
        return driverObject.name.toLowerCase() === passName.toLowerCase()
    })
}