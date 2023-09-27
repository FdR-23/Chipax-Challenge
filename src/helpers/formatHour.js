export const formatMillisegSegMin = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const restMilliSeconds = milliseconds % 1000;
  const result = `${minutes} m, ${seconds} s,  ${restMilliSeconds} ms.`
  return result;
}