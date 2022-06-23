/**
 * Returns a name of the format {first name} {first letter of lastName}{.}.
 * Works on strings, and objects, strings must be of the form:
 * "{first name} {last name}"
 *
 * objects must be of the form:
 * { ..., (full_name|name): "{first name} {last name}", ... }
 *
 * Be warned, this helper is far from complete and naively assumes the names are well-formed, and that the given name
 * has at least 1 first name plus at least 1 additional name.
 */
const getShortName = obj => {
  let fullNameString = "";
  if (typeof obj === "string") {
    const [firstName, ...remainingNames] = obj.split(' ');
    fullNameString = `${firstName} ${remainingNames[0][0]}.`
  } else if (obj) {
    // Dealing with a non-null object.
    const name = obj.full_name || obj.name || "No-nam Erics";
    const [firstName, ...remainingNames] = name.split(' ');
    fullNameString = `${firstName} ${remainingNames[0][0]}.`
  }
  return fullNameString;
};

export default getShortName;
