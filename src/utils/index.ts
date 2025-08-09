import { generatePassword } from "./generate-password.util";
import { getBase64 } from "./get-base64.util";
import { pipeline } from "./pipeline.util";
import { slug } from "./slug.util";
import { truncate } from "./truncate.util";
import { withSearch } from "./with-search";

const utils = {
   pipeline,
   generatePassword,
   getBase64,
   slug,
   truncate,
   withSearch,
};

export default utils;
export { pipeline, generatePassword, getBase64, slug, truncate, withSearch };
