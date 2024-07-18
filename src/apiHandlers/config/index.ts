const test = {
  baseURL: "https://test.api.shirt.smartwear.click",
};

const production = {
  baseURL: "https://api.shirt.smartwear.click",
};



const config = () => {
  return process.env.NEXT_PUBLIC_API_ENV === "test" ? test : production;
};

export const url = process.env.NEXT_PUBLIC_API_ENV === "test" ? "http://test.shirt.smartwear.click/" : "https://smartwear.click/"
export default config;
