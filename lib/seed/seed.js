import db from '../db/connection.js';
import data from'./countries.json' assert { type: 'json'}; 
import Country from '../models/Country.js';

let countryData = data.map( item =>{
	const country = {}

	country.name = item.name.common

	item.capital? country.capital = item.capital[0] : country.capital = "";

	item.region? country.region = item.region : country.region = "";

	item.timezones? country.timezone = item.timezones[0] : country.timezones = "";

	if(item.languages){
		const lang = Object.keys(item?.languages)
		country.language = item.languages[lang[0]];
	} else {
		country.language = "";
	}


	item.population? country.population = item.population : country.population = "";

	item.borders? country.borders = item.borders : country.borders = [];

	item.flags? country.flag = item.flags.png : country.flag = "";

	return country
})

Country
    .deleteMany({})
    .then(() => Country.create(countryData))
    .then(() => db.close()) 
    .catch(error => console.error("Error", error ))
