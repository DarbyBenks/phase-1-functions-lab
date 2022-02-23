function distanceFromHqInBlocks(dis){
return Math.abs(dis - 42);
}

function distanceFromHqInFeet(dis){
    return Math.abs((dis - 42)*264)
}

function distanceTravelledInFeet(dis, drop){
    return Math.abs((dis - drop)*264)
}

function calculatesFarePrice(start, stop){
    const distance = Math.abs((start - stop)*264)

    if (distance <= 400){
        return 0
    }
    else if (distance <= 2000){
        return Math.abs((distance - 400)*0.02)
    }
    else if (distance <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}

