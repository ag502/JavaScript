/**
 * Arrow Function
 */

const name = {
  first: "Lemmy",
  last: "Kilmister"
};

function getName({ first, last }) {
  return `${first} ${last}`;
}

console.log(getName(name));

const getNameArrow = ({ first, last }) => `${first} ${last}`;

console.log(getNameArrow(name));

const comic = {
  first: "Peter",
  last: "Bagge",
  city: "Seattle",
  state: "Washington"
};

const getFullName = ({ first, last }) => ({ fullName: `${first} ${last}` });

console.log(getFullName(comic));

const discounter = discount => {
  return price => {
    return price * (1 - discount);
  };
};

const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100));

const discounterCurring = discount => price => price * (1 - discount);

/**
 * partially appled function
 */

const building = {
  hours: "8 a.m. - 8 p.m.",
  address: "Jayhawk Blvd"
};

const manager = {
  name: "Augusto",
  phone: "555-555-5555"
};

const program = {
  name: "Presenting Research",
  room: "415",
  hours: "3 - 6"
};

const exhibit = {
  name: "Emerging Scholarship",
  contact: "Dyan"
};

const mergeProgramInformation = (building, manager, event) => {
  const { hours, address } = building;
  const { name, phone } = manager;

  const defalut = {
    hours,
    address,
    contact: name,
    phone
  };

  return { ...defalut, ...event };
};

console.log(mergeProgramInformation(building, manager, program));

console.log(mergeProgramInformation(building, manager, exhibit));

const mergeProgramInformationRef = (building, manager) => {
  const { hours, address } = building;
  const { name, phone } = manager;

  const defalut = {
    hours,
    address,
    contact: name,
    phone
  };

  return event => ({ ...defalut, ...event });
};

const programInfo = mergeProgramInformationRef(building, manager)(program);

console.log(programInfo);

const exhibitInfo = mergeProgramInformationRef(building, manager)(exhibit);

console.log(exhibitInfo);

const zip = (...cities) => {
  return (...birds) => {
    return cities.map((city, index) => [city, birds[index]]);
  };
};

console.log(
  zip("kansas", "wisconsin", "new mexico")("meadowlark", "robin", "roadrunner")
);

const dogs = [
  {
    이름: "맥스",
    무게: 10,
    견종: "보스턴테리어",
    지역: "위스콘신",
    색상: "검정색"
  },
  {
    이름: "도니",
    무게: 90,
    견종: "래브라도레트리버",
    지역: "캔자스",
    색상: "검정색"
  },
  {
    이름: "섀도",
    무게: 40,
    견종: "래브라도레트리버",
    지역: "위스콘신",
    색상: "갈색"
  }
];

function getDogsNames(dogs, filter) {
  const [key, value] = filter;

  return dogs.filter(dog => dog[key] === value).map(dog => dog["이름"]);
}

console.log(getDogsNames(dogs, ["색상", "검정색"]));

function getDogsNamesCondition(dogs, filterFunc) {
  return dogs.filter(filterFunc).map(dog => dog["이름"]);
}

console.log(getDogsNamesCondition(dogs, dog => dog["무게"] < 20));

// const weightCheck = weight => {
//   return dog => dog["무게"] < weight;
// };

const weightCheck = weight => dog => dog["무게"] < weight;

console.log(getDogsNamesCondition(dogs, weightCheck(20)));

const identity = field => value => dog => dog[field] === value;

// const identity = field => {
//   return value => {
//     return dog => dog[field] === value;
//   };
// };

const colorCheck = identity("색상");
const stateCheck = identity("지역");

console.log(getDogsNamesCondition(dogs, colorCheck("갈색")));
console.log(getDogsNamesCondition(dogs, stateCheck("캔자스")));

function allFilters(dogs, ...checks) {
  return dogs
    .filter(dog => checks.every(check => check(dog)))
    .map(dog => dog["이름"]);
}

allFilters(dogs, colorCheck("검정색"), stateCheck("캔자스"));

/**
 * Context
 */

const validator = {
  message: "는 유효하지 않습니다.",
  //   setInvalidMessage: function(field) {
  //     return `${field}${this.message}`;
  //   }
  //   setInvalidMessage: function(...fields) {
  //     return fields.map(function(field) {
  //       return `${field}${this.message}`;
  //     });
  //   }
  setInvalidMessage: function(...fields) {
    return fields.map(field => `${field}${this.message}`);
  }
};

console.log(validator.setInvalidMessage("도시", "시골"));
