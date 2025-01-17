import { EncodeToken } from "../utility/tokenUtility.js";

export const first = async (req, res) => {
  res.send('Hello world');
};

// TokenEncode function
export const TokenEncode=async (req, res) => {
  let result= EncodeToken("xyz.com",'123')
  res.json({token:result});
}

export const third = async (req, res) => {
  res.send('I am post body');
};

