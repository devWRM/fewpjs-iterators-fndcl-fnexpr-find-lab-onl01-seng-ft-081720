
IMPORTANT LESSON

    When using a condition to find data, use !! (double bang) to confirm data was returned





===========================
FIRST Solution Attemtp

function superbowlWin(recordKCC) {
  recordKCC.find(function(e) {

    if (e["result"] === "W") {
      return e["year"]
    }

  })
}

console.log(superbowlWin([
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]))






