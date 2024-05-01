const mapharhar = () => {
   const generatedMap = [
     [0,0,0,0],
     [0,0,0,0],
     [0,0,0,0],
     [0,0,0,0],
   ]
   let mapForBeginners = ""


   for (var i=0; i<generatedMap.length; i++) {
     let mapForBeginnersPerRow = ""

     for (var n=0; n<generatedMap.length; n++) {
      mapForBeginnersPerRow += generatedMap[0][0]
    }
    console.log(mapForBeginnersPerRow)
   }


   return generatedMap
}


// 1' create function that puts swag messiah and legalized nuclear bombs on the map
// 1.b call maphahar and store it in variable
// 1.c we modify that variable
const swagmessiah = () => {
  var moistCr1t1kal = mapharhar();

  var swagPosition = [0,0]

  const name = "swagmessiah";
  moistCr1t1kal[swagPosition[0], swagPosition[1]] = name
  console.log("SWAG MESSIAH IS IN THE HOUSE 🔥 🔥 🔥")
  const legalizeNuclearBombs = (mapo) => {
    var nuclearPosition = [3,3]
    const nname = "legalizeNuclearBombs"
    mapo[nuclearPosition[0]][nuclearPosition[1]] = nname
    console.log("LEGALIZE NUCLEAR BOMBS ☢️ ☢️ ☢️")
  }
  legalizeNuclearBombs(moistCr1t1kal)

}
mapharhar()
