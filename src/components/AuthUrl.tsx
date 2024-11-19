import useWixClient from "@/hooks/useWixClient";

const AuthUrl = async () => {
  const WixClient = await useWixClient();

  const loginRequestData = WixClient.auth.generateOAuthData(
    "http://localhost:3000"
  );

  
  const { authUrl } = await WixClient.auth.getAuthUrl(loginRequestData);
  return  authUrl 
};
export default AuthUrl;
