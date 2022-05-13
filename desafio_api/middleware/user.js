
const { getOneEmail} = require("../model/user");
const { body, validationResult } = require("express-validator");
const { ObjectId } = require("mongodb");
const res = require("express/lib/response");
const { getOnePoke } = require("../controller/pokemon");

exports.validateCreateUser = [
  body("email").trim().notEmpty().isEmail(),
  body("senha").trim().notEmpty(),
];

exports.validateCreatePokes = [
  body("Row").trim().notEmpty(),
  body("Name").trim().notEmpty(),
  body("Pokedex_Number").trim().notEmpty(),
  body("Img_name").trim().notEmpty(), 
  body("Generation").trim().notEmpty(),
  body("Evolution_Stage").trim().notEmpty(),
  body("Evolved").trim().notEmpty(),
  body("FamilyID").trim().notEmpty(),
  body("Cross_Gen").trim().notEmpty(),
  body("Type_1").trim().notEmpty(),
  body("Type_2").trim().notEmpty(),
  body("Weather_1").trim().notEmpty(),
  body("Weather_2").trim().notEmpty(),
  body("STAT_TOTAL").trim().notEmpty(),
  body("ATK").trim().notEmpty(),
  body("DEF").trim().notEmpty(),
  body("STA").trim().notEmpty(),
  body("Legendary").trim().notEmpty(),
  body("Aquireable").trim().notEmpty(),
  body("Spawns").trim().notEmpty(),
  body("Regional").trim().notEmpty(),
  body("Raidable").trim().notEmpty(),
  body("Hatchable").trim().notEmpty(),
  body("Shiny").trim().notEmpty(),
  body("Nest").trim().notEmpty(),
  body("New").trim().notEmpty(),
  body("Not_Gettable").trim().notEmpty(),
  body("Future_Evolve").trim().notEmpty(),
  body("CP_40").trim().notEmpty(),
  body("CP_39").trim().notEmpty(),
]

exports.validateErrorUser = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ MessageError: error.array() });
  }
  return next();
};

exports.validateNotEmailUser = async (req, res, next) => {
  const email  = req.query.email;
  const { data } = await getOneEmail(email);

  if (!data)
    return res.status(400).json({ MessageError: "Email não cadastrado!" });
    
  return next();
};

exports.validateDuplicatedEmailUser = async (req, res, next) => {
  const  email  = req.body.email;
  console.log(email) 
  const  {data} = await getOneEmail(email);
  console.log(data)
  if (data)
    return res.status(400).json({ MessageError: "Email já cadastrado!" });
  return next();
};

exports.validateNamePoke = async(req,res,next) => {
  const name = req.query.name;
  const {data } = await getOnePoke(name)
  if (data)
  return res.status(400).json({ MessageError: "Pokemon já cadastrado!" });
  
return next();
};

