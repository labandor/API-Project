import mongoose from "mongoose";

const Schema = mongoose.Schema

let CountrySchema = new Schema({
	"name": { 
		type: String 
	},
	"capital": { 
		type: String 
	},
	"region": { 
		type: String 
	},
	"timezone": { 
		type: String 
	},
	"language": { 
		type: String 
	},
	"population": { 
		type: Number 
	},
	"borders": { 
		type: Array 
	},
	"flag": {
		type: String
	}
   });

export default mongoose.model("country", CountrySchema)

