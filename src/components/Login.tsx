import useWixClient from "@/hooks/useWixClient";

const Login = async () => {
  const WixClient = await useWixClient();
  const loginRequestData = WixClient.auth.generateOAuthData(
    "http://localhost:3000"
  );

  const data = loginRequestData;
  const { authUrl } = await WixClient.auth.getAuthUrl(data);

  return data
};

export default Login;

