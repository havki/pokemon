
export const getOptionsAsync = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        options.results.filter(
          (o) => o.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
        ),
      );
    }, 3000);
  });
};

const options={
  count: 1295,
  next: "https://pokeapi.co/api/v2/pokemon-form/?offset=100&limit=100",
  previous: null,
  results: [
      {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-form/1/"
      },
      {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon-form/2/"
      },
      {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon-form/3/"
      },
      {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon-form/4/"
      },
      {
          name: "charmeleon",
          url: "https://pokeapi.co/api/v2/pokemon-form/5/"
      },
      {
          name: "charizard",
          url: "https://pokeapi.co/api/v2/pokemon-form/6/"
      },
      {
          name: "squirtle",
          url: "https://pokeapi.co/api/v2/pokemon-form/7/"
      },
      {
          name: "wartortle",
          url: "https://pokeapi.co/api/v2/pokemon-form/8/"
      },
      {
          name: "blastoise",
          url: "https://pokeapi.co/api/v2/pokemon-form/9/"
      },
      {
          name: "caterpie",
          url: "https://pokeapi.co/api/v2/pokemon-form/10/"
      },
      {
          name: "metapod",
          url: "https://pokeapi.co/api/v2/pokemon-form/11/"
      },
      {
          name: "butterfree",
          url: "https://pokeapi.co/api/v2/pokemon-form/12/"
      },
      {
          name: "weedle",
          url: "https://pokeapi.co/api/v2/pokemon-form/13/"
      },
      {
          name: "kakuna",
          url: "https://pokeapi.co/api/v2/pokemon-form/14/"
      },
      {
          name: "beedrill",
          url: "https://pokeapi.co/api/v2/pokemon-form/15/"
      },
      {
          name: "pidgey",
          url: "https://pokeapi.co/api/v2/pokemon-form/16/"
      },
      {
          name: "pidgeotto",
          url: "https://pokeapi.co/api/v2/pokemon-form/17/"
      },
      {
          name: "pidgeot",
          url: "https://pokeapi.co/api/v2/pokemon-form/18/"
      },
      {
          name: "rattata",
          url: "https://pokeapi.co/api/v2/pokemon-form/19/"
      },
      {
          name: "raticate",
          url: "https://pokeapi.co/api/v2/pokemon-form/20/"
      },
      {
          name: "spearow",
          url: "https://pokeapi.co/api/v2/pokemon-form/21/"
      },
      {
          name: "fearow",
          url: "https://pokeapi.co/api/v2/pokemon-form/22/"
      },
      {
          name: "ekans",
          url: "https://pokeapi.co/api/v2/pokemon-form/23/"
      },
      {
          name: "arbok",
          url: "https://pokeapi.co/api/v2/pokemon-form/24/"
      },
      {
          name: "pikachu",
          url: "https://pokeapi.co/api/v2/pokemon-form/25/"
      },
      {
          name: "raichu",
          url: "https://pokeapi.co/api/v2/pokemon-form/26/"
      },
      {
          name: "sandshrew",
          url: "https://pokeapi.co/api/v2/pokemon-form/27/"
      },
      {
          name: "sandslash",
          url: "https://pokeapi.co/api/v2/pokemon-form/28/"
      },
      {
          name: "nidoran-f",
          url: "https://pokeapi.co/api/v2/pokemon-form/29/"
      },
      {
          name: "nidorina",
          url: "https://pokeapi.co/api/v2/pokemon-form/30/"
      },
      {
          name: "nidoqueen",
          url: "https://pokeapi.co/api/v2/pokemon-form/31/"
      },
      {
          name: "nidoran-m",
          url: "https://pokeapi.co/api/v2/pokemon-form/32/"
      },
      {
          name: "nidorino",
          url: "https://pokeapi.co/api/v2/pokemon-form/33/"
      },
      {
          name: "nidoking",
          url: "https://pokeapi.co/api/v2/pokemon-form/34/"
      },
      {
          name: "clefairy",
          url: "https://pokeapi.co/api/v2/pokemon-form/35/"
      },
      {
          name: "clefable",
          url: "https://pokeapi.co/api/v2/pokemon-form/36/"
      },
      {
          name: "vulpix",
          url: "https://pokeapi.co/api/v2/pokemon-form/37/"
      },
      {
          name: "ninetales",
          url: "https://pokeapi.co/api/v2/pokemon-form/38/"
      },
      {
          name: "jigglypuff",
          url: "https://pokeapi.co/api/v2/pokemon-form/39/"
      },
      {
          name: "wigglytuff",
          url: "https://pokeapi.co/api/v2/pokemon-form/40/"
      },
      {
          name: "zubat",
          url: "https://pokeapi.co/api/v2/pokemon-form/41/"
      },
      {
          name: "golbat",
          url: "https://pokeapi.co/api/v2/pokemon-form/42/"
      },
      {
          name: "oddish",
          url: "https://pokeapi.co/api/v2/pokemon-form/43/"
      },
      {
          name: "gloom",
          url: "https://pokeapi.co/api/v2/pokemon-form/44/"
      },
      {
          name: "vileplume",
          url: "https://pokeapi.co/api/v2/pokemon-form/45/"
      },
      {
          name: "paras",
          url: "https://pokeapi.co/api/v2/pokemon-form/46/"
      },
      {
          name: "parasect",
          url: "https://pokeapi.co/api/v2/pokemon-form/47/"
      },
      {
          name: "venonat",
          url: "https://pokeapi.co/api/v2/pokemon-form/48/"
      },
      {
          name: "venomoth",
          url: "https://pokeapi.co/api/v2/pokemon-form/49/"
      },
      {
          name: "diglett",
          url: "https://pokeapi.co/api/v2/pokemon-form/50/"
      },
      {
          name: "dugtrio",
          url: "https://pokeapi.co/api/v2/pokemon-form/51/"
      },
      {
          name: "meowth",
          url: "https://pokeapi.co/api/v2/pokemon-form/52/"
      },
      {
          name: "persian",
          url: "https://pokeapi.co/api/v2/pokemon-form/53/"
      },
      {
          name: "psyduck",
          url: "https://pokeapi.co/api/v2/pokemon-form/54/"
      },
      {
          name: "golduck",
          url: "https://pokeapi.co/api/v2/pokemon-form/55/"
      },
      {
          name: "mankey",
          url: "https://pokeapi.co/api/v2/pokemon-form/56/"
      },
      {
          name: "primeape",
          url: "https://pokeapi.co/api/v2/pokemon-form/57/"
      },
      {
          name: "growlithe",
          url: "https://pokeapi.co/api/v2/pokemon-form/58/"
      },
      {
          name: "arcanine",
          url: "https://pokeapi.co/api/v2/pokemon-form/59/"
      },
      {
          name: "poliwag",
          url: "https://pokeapi.co/api/v2/pokemon-form/60/"
      },
      {
          name: "poliwhirl",
          url: "https://pokeapi.co/api/v2/pokemon-form/61/"
      },
      {
          name: "poliwrath",
          url: "https://pokeapi.co/api/v2/pokemon-form/62/"
      },
      {
          name: "abra",
          url: "https://pokeapi.co/api/v2/pokemon-form/63/"
      },
      {
          name: "kadabra",
          url: "https://pokeapi.co/api/v2/pokemon-form/64/"
      },
      {
          name: "alakazam",
          url: "https://pokeapi.co/api/v2/pokemon-form/65/"
      },
      {
          name: "machop",
          url: "https://pokeapi.co/api/v2/pokemon-form/66/"
      },
      {
          name: "machoke",
          url: "https://pokeapi.co/api/v2/pokemon-form/67/"
      },
      {
          name: "machamp",
          url: "https://pokeapi.co/api/v2/pokemon-form/68/"
      },
      {
          name: "bellsprout",
          url: "https://pokeapi.co/api/v2/pokemon-form/69/"
      },
      {
          name: "weepinbell",
          url: "https://pokeapi.co/api/v2/pokemon-form/70/"
      },
      {
          name: "victreebel",
          url: "https://pokeapi.co/api/v2/pokemon-form/71/"
      },
      {
          name: "tentacool",
          url: "https://pokeapi.co/api/v2/pokemon-form/72/"
      },
      {
          name: "tentacruel",
          url: "https://pokeapi.co/api/v2/pokemon-form/73/"
      },
      {
          name: "geodude",
          url: "https://pokeapi.co/api/v2/pokemon-form/74/"
      },
      {
          name: "graveler",
          url: "https://pokeapi.co/api/v2/pokemon-form/75/"
      },
      {
          name: "golem",
          url: "https://pokeapi.co/api/v2/pokemon-form/76/"
      },
      {
          name: "ponyta",
          url: "https://pokeapi.co/api/v2/pokemon-form/77/"
      },
      {
          name: "rapidash",
          url: "https://pokeapi.co/api/v2/pokemon-form/78/"
      },
      {
          name: "slowpoke",
          url: "https://pokeapi.co/api/v2/pokemon-form/79/"
      },
      {
          name: "slowbro",
          url: "https://pokeapi.co/api/v2/pokemon-form/80/"
      },
      {
          name: "magnemite",
          url: "https://pokeapi.co/api/v2/pokemon-form/81/"
      },
      {
          name: "magneton",
          url: "https://pokeapi.co/api/v2/pokemon-form/82/"
      },
      {
          name: "farfetchd",
          url: "https://pokeapi.co/api/v2/pokemon-form/83/"
      },
      {
          name: "doduo",
          url: "https://pokeapi.co/api/v2/pokemon-form/84/"
      },
      {
          name: "dodrio",
          url: "https://pokeapi.co/api/v2/pokemon-form/85/"
      },
      {
          name: "seel",
          url: "https://pokeapi.co/api/v2/pokemon-form/86/"
      },
      {
          name: "dewgong",
          url: "https://pokeapi.co/api/v2/pokemon-form/87/"
      },
      {
          name: "grimer",
          url: "https://pokeapi.co/api/v2/pokemon-form/88/"
      },
      {
          name: "muk",
          url: "https://pokeapi.co/api/v2/pokemon-form/89/"
      },
      {
          name: "shellder",
          url: "https://pokeapi.co/api/v2/pokemon-form/90/"
      },
      {
          name: "cloyster",
          url: "https://pokeapi.co/api/v2/pokemon-form/91/"
      },
      {
          name: "gastly",
          url: "https://pokeapi.co/api/v2/pokemon-form/92/"
      },
      {
          name: "haunter",
          url: "https://pokeapi.co/api/v2/pokemon-form/93/"
      },
      {
          name: "gengar",
          url: "https://pokeapi.co/api/v2/pokemon-form/94/"
      },
      {
          name: "onix",
          url: "https://pokeapi.co/api/v2/pokemon-form/95/"
      },
      {
          name: "drowzee",
          url: "https://pokeapi.co/api/v2/pokemon-form/96/"
      },
      {
          name: "hypno",
          url: "https://pokeapi.co/api/v2/pokemon-form/97/"
      },
      {
          name: "krabby",
          url: "https://pokeapi.co/api/v2/pokemon-form/98/"
      },
      {
          name: "kingler",
          url: "https://pokeapi.co/api/v2/pokemon-form/99/"
      },
      {
          name: "voltorb",
          url: "https://pokeapi.co/api/v2/pokemon-form/100/"
      }
  ]
}


// const options = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
//   { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
//   { title: 'Forrest Gump', year: 1994 },
//   { title: 'Inception', year: 2010 },
//   { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: 'Goodfellas', year: 1990 },
//   { title: 'The Matrix', year: 1999 },
//   { title: 'Seven Samurai', year: 1954 },
//   { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 },
//   { title: 'Léon: The Professional', year: 1994 },
//   { title: 'Spirited Away', year: 2001 },
//   { title: 'Saving Private Ryan', year: 1998 },
//   { title: 'Once Upon a Time in the West', year: 1968 },
//   { title: 'American History X', year: 1998 },
//   { title: 'Interstellar', year: 2014 },
//   { title: 'Casablanca', year: 1942 },
//   { title: 'City Lights', year: 1931 },
//   { title: 'Psycho', year: 1960 },
//   { title: 'The Green Mile', year: 1999 },
//   { title: 'The Intouchables', year: 2011 },
//   { title: 'Modern Times', year: 1936 },
//   { title: 'Raiders of the Lost Ark', year: 1981 },
//   { title: 'Rear Window', year: 1954 },
//   { title: 'The Pianist', year: 2002 },
//   { title: 'The Departed', year: 2006 },
//   { title: 'Terminator 2: Judgment Day', year: 1991 },
//   { title: 'Back to the Future', year: 1985 },
//   { title: 'Whiplash', year: 2014 },
//   { title: 'Gladiator', year: 2000 },
//   { title: 'Memento', year: 2000 },
//   { title: 'The Prestige', year: 2006 },
//   { title: 'The Lion King', year: 1994 },
//   { title: 'Apocalypse Now', year: 1979 },
//   { title: 'Alien', year: 1979 },
//   { title: 'Sunset Boulevard', year: 1950 },
//   {
//     title:
//       'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964,
//   },
//   { title: 'The Great Dictator', year: 1940 },
//   { title: 'Cinema Paradiso', year: 1988 },
//   { title: 'The Lives of Others', year: 2006 },
//   { title: 'Grave of the Fireflies', year: 1988 },
//   { title: 'Paths of Glory', year: 1957 },
//   { title: 'Django Unchained', year: 2012 },
//   { title: 'The Shining', year: 1980 },
//   { title: 'WALL·E', year: 2008 },
//   { title: 'American Beauty', year: 1999 },
//   { title: 'The Dark Knight Rises', year: 2012 },
//   { title: 'Princess Mononoke', year: 1997 },
//   { title: 'Aliens', year: 1986 },
//   { title: 'Oldboy', year: 2003 },
//   { title: 'Once Upon a Time in America', year: 1984 },
//   { title: 'Witness for the Prosecution', year: 1957 },
//   { title: 'Das Boot', year: 1981 },
//   { title: 'Citizen Kane', year: 1941 },
//   { title: 'North by Northwest', year: 1959 },
//   { title: 'Vertigo', year: 1958 },
//   { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
//   { title: 'Reservoir Dogs', year: 1992 },
//   { title: 'Braveheart', year: 1995 },
//   { title: 'M', year: 1931 },
//   { title: 'Requiem for a Dream', year: 2000 },
//   { title: 'Amélie', year: 2001 },
//   { title: 'A Clockwork Orange', year: 1971 },
//   { title: 'Like Stars on Earth', year: 2007 },
//   { title: 'Taxi Driver', year: 1976 },
//   { title: 'Lawrence of Arabia', year: 1962 },
//   { title: 'Double Indemnity', year: 1944 },
//   { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
//   { title: 'Amadeus', year: 1984 },
//   { title: 'To Kill a Mockingbird', year: 1962 },
//   { title: 'Toy Story 3', year: 2010 },
//   { title: 'Logan', year: 2017 },
//   { title: 'Full Metal Jacket', year: 1987 },
//   { title: 'Dangal', year: 2016 },
//   { title: 'The Sting', year: 1973 },
//   { title: '2001: A Space Odyssey', year: 1968 },
//   { title: "Singin' in the Rain", year: 1952 },
//   { title: 'Toy Story', year: 1995 },
//   { title: 'Bicycle Thieves', year: 1948 },
//   { title: 'The Kid', year: 1921 },
//   { title: 'Inglourious Basterds', year: 2009 },
//   { title: 'Snatch', year: 2000 },
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];
