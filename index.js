// Code your solution in this file!
const feetInBlock = 264
const hq = 42

// currentBlock=43rd street -- hq=42nd street

function distanceFromHqInBlocks (currentBlock) {
  if (currentBlock > hq) {
    return currentBlock - hq
  }
  else {
    return hq - currentBlock 
  }
}

function distanceFromHqInFeet(currentBlock) {
  // figure out how many blocks away and then convert that into feet
 let numberOfBlocks
  if (currentBlock > hq) {
    numberOfBlocks = currentBlock - hq
  }
  else {
    numberOfBlocks = hq - currentBlock 
  }
  return numberOfBlocks * feetInBlock
}

function distanceTravelledInFeet(block1, block2) {
  // 43  48 -> 5*264
  // 1360
  // 1. we want to get distance between blocks
  // 2. get the distance in feet
  const numberOfBlocks = Math.abs(block1 - block2)
  return numberOfBlocks * feetInBlock
}

function calculatesFarePrice(startingBlock, destinationBlock) {
  // how far are they going?
    const numberOfBlocks = Math.abs(startingBlock - destinationBlock)
    const numberOfFeet = numberOfBlocks * feetInBlock
    // first 400 feet are free 
    if (numberOfFeet <= 400)
    return 0 
    
  
}