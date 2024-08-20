import data from '../../data.json' with { type: "json" }

async function searchPark(query) {
    console.log("searchPark service called with query: ", query);
    return data.search;
} 

export default {
    searchPark
}