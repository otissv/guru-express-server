import Bluebird from 'bluebird';

export const capitalize = str => {
  const firstCharUpperCase = str.charAt(0).toUpperCase();
  return `${firstCharUpperCase}${str.substr(1, str.length - 1)}`;
};

export default function cleanObj (obj) {
  Object.keys(obj).forEach(
    key =>
      (obj[key] && typeof obj[key] === 'object' && cleanObj(obj[key])) ||
      ((obj[key] === undefined || obj[key] === null) && delete obj[key])
  );
  return obj;
}

export const pipeAsync = sequence => async initialValue => {
  try {
    return await Bluebird.reduce(
      sequence,
      async (previous, current) => {
        try {
          return await current(previous);
        } catch (error) {
          process.stdout.write(error);
        }
      },
      initialValue
    ).catch(error => process.stdout.write(error));
  } catch (error) {
    process.stdout.write(error);
  }
};
