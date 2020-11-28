const testVar = {}

function testFunc() {
  return "hi"
}

console.log(testFunc())

///////////////////////

function superbowlWin(recordKCC) {

    let ans = recordKCC.find(function(e) {
            return e["result"] === "W"
          })

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


// OFFICIAL SOLUTION

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }