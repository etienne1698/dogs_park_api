async function searchPark(query) {
  console.log("searchPark service called with query: ", query);
  return [
    {
      name: "Dog park 1",
      rating: 4,
      distanceFromLocation: 1.8,
      city: "Metz",
      country: "France",
      dailyVisitors: "50-100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      facilities: [
        "Snack bar",
        "Shared Toilet",
        "Bikes and Car Parking",
        "24/7 Water facility",
      ],
    },
    {
      name: "Dog park 2",
      rating: 3,
      distanceFromLocation: 334,
      city: "Paris",
      country: "France",
      dailyVisitors: "100-200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      facilities: ["Snack bar", "Shared Toilet", "24/7 Water facility"],
    },
    {
      name: "Dog park 3",
      rating: 5,
      distanceFromLocation: 509,
      city: "Lyon",
      country: "France",
      dailyVisitors: "200-300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      facilities: ["Snack bar", "Shared Toilet"],
    },
  ];
}

export default {
  searchPark,
};
