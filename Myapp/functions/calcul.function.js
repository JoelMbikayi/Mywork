const geolib = require('geolib');



    const point = { latitude:-11.678591445700322, longitude:27.487891647187915 };
    const polygon = [
        { latitude: -11.678634785982894, longitude:27.48790975211727 },
        { latitude: -11.678599982425784, longitude: 27.487870189512982},
        { latitude:  -11.678546792076672, longitude: 27.487884271103024 },
        { latitude: -11.678575028914047, longitude: 27.487938585851467 },
    ];

    console.log(geolib.isPointInPolygon(point, polygon))

    