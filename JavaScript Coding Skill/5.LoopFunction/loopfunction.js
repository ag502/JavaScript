/**
 * Arrow Function
 */

function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

const capitalizeAnony = function(name) {
  return name[0].toUpperCase() + name.slice(1);
};

const capitalizeArrow = name => {
  return name[0].toUpperCase() + name.slice(1);
};

function formatUser(name) {
  return `${capitalize(name)}님이 로그인 했습니다.`;
}

const formatUserArrow = name => `${capitalize(name)}님이 로그인 했습니다.`;

function applyCutomerGreeting(name, callback) {
  return callback(capitalize(name));
}

applyCutomerGreeting("mark", function(name) {
  return `안녕 ${name}!`;
});

applyCutomerGreeting("mark", name => `안녕 ${name}`);

/**
 * Arrow Function Loop
 */

const band = [
  {
    name: "corbett",
    instrument: "guitar"
  },
  {
    name: "evan",
    instrument: "guitar"
  },
  {
    name: "sean",
    instrument: "bass"
  },
  {
    name: "brett",
    instrument: "drums"
  }
];

const instrument = band.map(member => member.instrument);

console.log(instrument);

/**
 * filter, find
 */

const team = ["Michalle B", "Dave L", "Dave C", "Courtney B", "Davina M"];

const dav = team.filter(cur => cur.match(/Dav/));

console.log(dav);

const instructors = [
  {
    name: "짐",
    libraries: ["미디어교육정보 도서관"]
  },
  {
    name: "새라",
    libraries: ["기념 도서관", "문헌정보학 도서관"]
  },
  {
    name: "엘리엇",
    libraries: ["중앙 도서관"]
  }
];

let memorialIntructor;

for (let i = 0; i < instructors.length; i++) {
  if (instructors[i].libraries.includes("기념 도서관")) {
    memorialIntructor = instructors[i].name;
    break;
  }
}

const librarian = instructors.find(cur =>
  cur.libraries.includes("기념 도서관")
);

console.log(librarian);

/**
 * forEach()
 */

const name = ["walter", "white"];

name.forEach((cur, idx, arr) => console.log(cur, idx, arr));

/**
 * Method Chaining
 */

const sailors = [
  {
    name: "yi hong",
    active: true,
    email: "yh@hproductions.io"
  },
  {
    name: "alex",
    active: true,
    email: ""
  },
  {
    name: "nathan",
    active: false,
    email: ""
  }
];

const active = sailors.filter(member => member.active);

console.log(active);

const email = active.map(
  member => member.email || `${member.name}@wiscsail.io`
);

console.log(email);

email.forEach(cur => console.log(cur));

sailors
  .filter(member => member.active)
  .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
  .forEach(member => console.log(member));
