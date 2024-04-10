function findMatching(drivers, searchString) {
  return drivers.filter(function(driversName) {
    return driversName.toLowerCase() === searchString.toLowerCase();
  });
}

function fuzzyMatch(drivers, testString) {
return drivers.filter(function(driversName) {
 return driversName.indexOf(testString) === 0;
});
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name;
  });
}

