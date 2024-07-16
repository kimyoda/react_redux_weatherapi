const hostName = import.meta.env.VITE_API_ENDPOINT;
const appId = import.meta.env.VITE_API_KEY;

console.log("VITE_API_KEY:", appId); // 디버그용 로그
console.log("VITE_API_ENDPOINT:", hostName); // 디버그용 로그

export { appId, hostName };
