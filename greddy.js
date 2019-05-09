/**
 * 
 * @param {object{}} stations 
 * @return {string[]}
 */
function greddy(stations, states_need) {
    let final_stations = [];
    while (states_need.length) {
        let best_station = null, states_covered = [];
        for (let station in stations) {
            let states = stations[station];
            let covered = states_need.filter(item => states.indexOf(item) > -1);
            if (covered.length > states_covered.length) {
                best_station = station;
                states_covered = covered;
            }
        }
        states_need = states_need.filter(item => states_covered.indexOf(item) === -1);
        final_stations.push(best_station);
    }
    return final_stations;
}


let stations = {
    'kone': ['id', 'nv', 'ut'],
    'ktwo': ['wa', 'id', 'mt'],
    'kthree': ['or', 'nv', 'ca'],
    'kfour': ['nv', 'ut'],
    'kfive': ['ca', 'az']
};

let states_need = ['id', 'nv', 'ut', 'wa', 'mt', 'or', 'ca', 'az'];

console.log(greddy(stations, states_need))
