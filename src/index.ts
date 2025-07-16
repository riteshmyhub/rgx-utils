import { pipeline } from "./utils/pipeline.util";
import { generatePassword } from "./utils/generate-password.util";
import { getBase64 } from "./utils/get-base64.util";
import { slug } from "./utils/slug.util";
import { truncate } from "./utils/truncate.util";

const utils = {
   pipeline,
   generatePassword,
   getBase64,
   slug,
   truncate,
};

export default utils;
