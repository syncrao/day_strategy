import axios from "axios";
import * as OTPAuth from "otplib";

function generateTOTP() {
  return OTPAuth.authenticator.generate(process.env.TOTP_SECRET!);
}

let jwtToken: string | null = null;

export async function loginSmartAPI() {
  if (jwtToken) return jwtToken;

  const res = await axios.post(
    "https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword",
    {
      clientcode: process.env.CLIENT_CODE,
      password: process.env.PASSWORD,
      totp: generateTOTP(),
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-UserType": "USER",
        "X-SourceID": "WEB",
        "X-ClientLocalIP": "127.0.0.1",
        "X-ClientPublicIP": "127.0.0.1",
        "X-MACAddress": "00:00:00:00",
        "X-PrivateKey": process.env.SMART_API_KEY!,
      },
    },
  );

  console.log("SMART API RESPONSE:", res.data); // 👈 ADD THIS

  if (!res.data.data) {
    throw new Error(res.data.message || "Login failed");
  }

  jwtToken = res.data.data.jwtToken;
  return jwtToken;
}
