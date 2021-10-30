import { Thing } from 'unity/proto/thing/thing';
import { Place } from 'unity/proto/place/place';

const thing: Thing = {
    id: "chair",
};

const place: Place = {
    name: "room",
    thing: thing,
};

console.log(`${JSON.stringify(place)}`);