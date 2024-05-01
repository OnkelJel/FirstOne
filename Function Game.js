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
