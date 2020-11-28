const testVar = {}

function testFunc() {
  return "hi"
}

console.log(testFunc())

///////////////////////

function superbowlWin(recordKCC) {

  // if (recordKCC[1]["result"] === "W") {
  //   console.log(recordKCC[1]["year"])
  // }

  let ans = recordKCC.find(function(e) {
          return e["result"] === "W"
        })
  // console.log(ans["year"])

  if (!!ans) {
    console.log(ans["year"])
    return ans["year"]
  } else {
    console.log(undefined)
    return undefined
  }


}

// let KCC = [ {year: "2018", result: "L"}, {year: "2017", result: "W"}, {year: "2016", result: "N/A"} ]

superbowlWin(KCC)
